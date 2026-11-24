# AGENTS

- `src/pages/` telas; `src/components/` UI (`ui.jsx`, `ItemBits.jsx`, `Layout.jsx`).
- `src/data/api.js` é a ÚNICA porta de dados: telas nunca acessam armazenamento direto. Trocar sua implementação por `fetch('/api/...')` mantendo assinaturas.
- `src/data/fixtures.js` é demo temporária; `constants.js` é vocabulário compartilhado (status em pt-BR).
- `src/lib/matching.js` é puro (reutilizar no servidor); `imageTools.js` re-codifica fotos (remove EXIF).
- Contatos sempre mascarados; códigos de retirada só como hash SHA-256.
- Backend futuro: Netlify Server + Netlify Database/Blobs. Siga [PLAN.md](PLAN.md).
