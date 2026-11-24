# Plano — Achados & Perdidos Senac Canoas

1. **[Parcial] Base pública** — Feito: tema, navegação, início (busca, ações rápidas, estatísticas, recentes), página Procurar com filtros na URL, camada de dados (`src/data/api.js`), motor de correspondência, re-codificação de fotos sem EXIF e analisador local. Falta: páginas Detalhe do objeto (`/objeto/:id` + "Tenho interesse"), Achei algo (`/achei`), Perdi algo (`/perdi`).
2. **Administração** — página `/admin` (funções já existem em `api.js`: aprovar/recusar, códigos SHA-256, validação, status); login protegido no servidor.
3. **Persistência real** — Netlify Server (`netlify/server/index.mjs`) + Netlify Database + Blobs para fotos; trocar `api.js` por chamadas `/api/...` com as mesmas assinaturas; remover `fixtures.js`.
4. **IA** — análise de foto via Netlify AI Gateway com fallback local; correspondências no painel.
5. **Segurança e testes** — validação no servidor, fotos sensíveis restritas, ocultação após 90 dias, testes.
