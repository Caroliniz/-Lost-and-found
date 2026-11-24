// Camada de acesso a dados — Marco 1 (demonstração).
//
// Todas as telas falam SOMENTE com estas funções. Hoje elas leem/escrevem um
// armazenamento de demonstração no navegador (semeado por fixtures.js); no
// Marco 2 cada função passa a chamar a API real (/api/...) com a mesma
// assinatura, sem mudar as telas. Ver PLAN.md.
import { fixtureItems, fixtureLostReports, fixtureClaims } from './fixtures.js'
import { AUTO_HIDE_DAYS, STATUS, CLAIM_STATUS } from './constants.js'
import { daysSince, maskEmail, maskPhone, normalize } from '../lib/format.js'
import { findMatches } from '../lib/matching.js'

const KEY = 'senac-achados-demo-v1'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const latency = () => sleep(220 + Math.random() * 260)

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    if (saved?.items) return saved
  } catch { /* ignora e semeia de novo */ }
  return { items: fixtureItems, reports: fixtureLostReports, claims: fixtureClaims }
}
let db = load()
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(db))
  } catch {
    throw new Error('Armazenamento do navegador cheio. Tente uma foto menor.')
  }
}
export function resetDemo() {
  localStorage.removeItem(KEY)
  db = load()
}

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // sem 0/O/1/I
function randomId(prefix, len) {
  const bytes = crypto.getRandomValues(new Uint8Array(len))
  return `${prefix}-${[...bytes].map((b) => ALPHABET[b % ALPHABET.length]).join('')}`
}
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

// ---------- Regras de visibilidade pública ----------
const isPublic = (item) => item.status !== STATUS.DEVOLVIDO && !item.hidden && daysSince(item.dateFound) <= AUTO_HIDE_DAYS
const toPublic = (item) => ({
  ...item,
  photo: item.sensitive ? null : item.photo,
  photoHidden: item.sensitive && !!item.photo,
})

// ---------- Público ----------
export async function listPublicItems({ q = '', category = '', color = '', location = '', from = '', to = '' } = {}) {
  await latency()
  const terms = normalize(q).split(/\s+/).filter(Boolean)
  return db.items
    .filter(isPublic)
    .filter((i) => !category || i.category === category)
    .filter((i) => !color || i.color === color)
    .filter((i) => !location || i.location === location)
    .filter((i) => !from || i.dateFound >= from)
    .filter((i) => !to || i.dateFound <= to)
    .filter((i) => {
      if (!terms.length) return true
      const hay = normalize(`${i.name} ${i.description} ${(i.marks || []).join(' ')} ${i.location}`)
      return terms.every((t) => hay.includes(t))
    })
    .sort((a, b) => b.dateFound.localeCompare(a.dateFound))
    .map(toPublic)
}

export async function getPublicItem(id) {
  await latency()
  const item = db.items.find((i) => i.id === id)
  if (!item || !isPublic(item)) return null
  return toPublic(item)
}

export async function getStats() {
  await latency()
  const pub = db.items.filter(isPublic)
  return {
    available: pub.filter((i) => i.status === STATUS.ENCONTRADO).length,
    awaiting: pub.filter((i) => i.status === STATUS.AGUARDANDO).length,
    returned: db.items.filter((i) => i.status === STATUS.DEVOLVIDO).length,
    openReports: db.reports.filter((r) => r.open).length,
  }
}

export async function createFoundItem(data) {
  await latency()
  const item = {
    id: randomId('OBJ', 4),
    name: data.name.trim(),
    category: data.category,
    color: data.color,
    location: data.location,
    dateFound: data.dateFound,
    description: data.description.trim(),
    marks: data.marks || [],
    status: data.status || STATUS.ENCONTRADO,
    sensitive: !!data.sensitive,
    photo: data.photo || null,
    createdAt: new Date().toISOString().slice(0, 10),
  }
  db.items.unshift(item)
  save()
  return { id: item.id }
}

export async function createLostReport(data) {
  await latency()
  const report = {
    id: randomId('PRD', 6),
    name: data.name.trim(),
    category: data.category,
    color: data.color,
    location: data.location,
    dateLost: data.dateLost,
    description: data.description.trim(),
    contactEmail: data.contactEmail?.trim() || '',
    contactPhone: data.contactPhone?.replace(/\D/g, '') || '',
    photo: data.photo || null,
    createdAt: new Date().toISOString().slice(0, 10),
    open: true,
  }
  db.reports.unshift(report)
  save()
  // Devolve apenas o protocolo e sugestões públicas — nunca o contato.
  const matches = findMatches(report, db.items.filter(isPublic), { min: 45, limit: 3 }).map((m) => ({
    ...m,
    item: toPublic(m.item),
  }))
  return { id: report.id, matches }
}

export async function createClaim(itemId, { name, contactEmail, contactPhone, proof }) {
  await latency()
  const item = db.items.find((i) => i.id === itemId)
  if (!item || !isPublic(item)) throw new Error('Este objeto não está mais disponível.')
  const claim = {
    id: randomId('SOL', 4),
    itemId,
    name: name.trim(),
    contactEmail: contactEmail?.trim() || '',
    contactPhone: contactPhone?.replace(/\D/g, '') || '',
    proof: proof.trim(),
    status: CLAIM_STATUS.PENDENTE,
    createdAt: new Date().toISOString().slice(0, 10),
    codeHash: null,
    codeUsed: false,
  }
  db.claims.unshift(claim)
  save()
  return { id: claim.id }
}

// ---------- Administração (recepção) ----------
// No Marco 2 estas rotas exigem sessão autenticada da equipe no servidor.
const maskContact = (x) => ({ ...x, contactEmail: maskEmail(x.contactEmail), contactPhone: maskPhone(x.contactPhone) })

export async function adminOverview() {
  await latency()
  const items = db.items.map((i) => ({
    ...i,
    autoHidden: daysSince(i.dateFound) > AUTO_HIDE_DAYS,
    claimCount: db.claims.filter((c) => c.itemId === i.id && c.status === CLAIM_STATUS.PENDENTE).length,
  }))
  const claims = db.claims.map((c) => {
    const { codeHash, ...rest } = maskContact(c)
    return { ...rest, hasCode: !!codeHash, item: db.items.find((i) => i.id === c.itemId) }
  })
  const reports = db.reports.map(maskContact)
  const pool = db.items.filter((i) => i.status !== STATUS.DEVOLVIDO)
  const matches = db.reports
    .filter((r) => r.open)
    .map((r) => ({ report: maskContact(r), matches: findMatches(r, pool, { min: 35, limit: 3 }) }))
    .filter((m) => m.matches.length)
  return { items, claims, reports, matches }
}

export async function updateItem(id, patch) {
  await latency()
  const item = db.items.find((i) => i.id === id)
  if (!item) throw new Error('Objeto não encontrado.')
  const allowed = ['status', 'sensitive', 'hidden']
  for (const k of allowed) if (k in patch) item[k] = patch[k]
  save()
}

async function issueCode(claim) {
  const raw = randomId('', 8).slice(1)
  const code = `${raw.slice(0, 4)}-${raw.slice(4)}`
  claim.codeHash = await sha256(code) // só o hash é armazenado
  claim.codeUsed = false
  return code
}

/** Aprova a solicitação e devolve o código UMA ÚNICA VEZ (não é armazenado em texto). */
export async function approveClaim(claimId) {
  await latency()
  const claim = db.claims.find((c) => c.id === claimId)
  if (!claim || claim.status === CLAIM_STATUS.RECUSADA) throw new Error('Solicitação inválida.')
  const item = db.items.find((i) => i.id === claim.itemId)
  if (item.status === STATUS.DEVOLVIDO) throw new Error('Este objeto já foi devolvido.')
  // aprovar uma solicitação recusa as outras pendentes do mesmo objeto
  db.claims.forEach((c) => {
    if (c.itemId === claim.itemId && c.id !== claim.id && c.status !== CLAIM_STATUS.RECUSADA) {
      c.status = CLAIM_STATUS.RECUSADA
      c.codeHash = null
    }
  })
  claim.status = CLAIM_STATUS.APROVADA
  const code = await issueCode(claim)
  item.status = STATUS.AGUARDANDO
  save()
  return { code }
}

export async function regenerateCode(claimId) {
  await latency()
  const claim = db.claims.find((c) => c.id === claimId)
  if (!claim || claim.status !== CLAIM_STATUS.APROVADA || claim.codeUsed) throw new Error('Não é possível gerar código para esta solicitação.')
  const code = await issueCode(claim)
  save()
  return { code }
}

export async function rejectClaim(claimId) {
  await latency()
  const claim = db.claims.find((c) => c.id === claimId)
  if (!claim) throw new Error('Solicitação não encontrada.')
  claim.status = CLAIM_STATUS.RECUSADA
  claim.codeHash = null
  const item = db.items.find((i) => i.id === claim.itemId)
  const stillApproved = db.claims.some((c) => c.itemId === item.id && c.status === CLAIM_STATUS.APROVADA)
  if (item.status === STATUS.AGUARDANDO && !stillApproved) item.status = STATUS.ENCONTRADO
  save()
}

/** Valida o código apresentado na recepção. Uso único: após validar, o objeto vira "Devolvido". */
export async function validatePickupCode(input) {
  await latency()
  const code = (input || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (code.length !== 8) throw new Error('O código tem 8 caracteres (ex.: K7QM-4XPA).')
  const hash = await sha256(`${code.slice(0, 4)}-${code.slice(4)}`)
  const claim = db.claims.find((c) => c.codeHash === hash && c.status === CLAIM_STATUS.APROVADA)
  if (!claim) throw new Error('Código inválido.')
  if (claim.codeUsed) throw new Error('Este código já foi utilizado.')
  claim.codeUsed = true
  const item = db.items.find((i) => i.id === claim.itemId)
  item.status = STATUS.DEVOLVIDO
  save()
  return { item, claimant: claim.name }
}
