import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ShieldCheck } from 'lucide-react'

export const NAV = [
  { to: '/', label: 'Início', end: true },
  { to: '/procurar', label: 'Procurar' },
  { to: '/achei', label: 'Achei algo' },
  { to: '/perdi', label: 'Perdi algo' },
  { to: '/admin', label: 'Administração' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src="/favicon.svg" alt="" className="size-9" />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold text-navy-900">Achados &amp; Perdidos</span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-flame-600">Senac Canoas</span>
      </span>
    </Link>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  const linkCls = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-navy-900 text-white' : 'text-navy-900/80 hover:bg-navy-50 hover:text-navy-900'}`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end} className={linkCls}>{n.label}</NavLink>)}
          </nav>
          <button className="rounded-lg p-2 text-navy-900 hover:bg-navy-50 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <nav className="rise border-t border-line bg-white px-4 py-3 md:hidden" aria-label="Menu móvel">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end} className={linkCls}>{n.label}</NavLink>)}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="mt-20 bg-navy-950 text-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-white">Achados &amp; Perdidos</p>
            <p className="mt-1 text-sm">Senac Canoas · Rio Grande do Sul</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Retirada de objetos</p>
            <p className="mt-1">Na recepção, de segunda a sexta, das 8h às 22h. Apresente seu código de retirada.</p>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-flame-400" />
            <p>Seus dados de contato nunca são exibidos publicamente. Fotos com rostos, documentos ou cartões ficam restritas à recepção.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
