# AI usage log (AI_LOG)

**English** · [Português (Brasil)](AI_LOG.pt-BR.md)

Record how the team used artificial intelligence in the project. The use of AI is allowed and encouraged, as long as it is documented: this file is a required deliverable and a script for the “AI in practice” segment of the presentation.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`AI_LOG.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Include the tools used and, for every relevant use, the main prompt, what the AI generated, what the team kept and what was corrected or rejected — and why.

Never commit API keys, passwords or other secrets. Those values go in a `.env` file (outside the repository) and in GitHub Secrets.

Copy the template below whenever you need a new entry.

## Tools

- (e.g. ChatGPT, GitHub Copilot, Cursor, other)

## Entry template

```markdown
### [date] — [task or section]

- **Main prompt:**
- **What the AI generated:**
- **What the team kept:**
- **What the team corrected or rejected, and why:**
```

## Log

### 24/11/2026 — JWT authentication (example)

- **Main prompt:** "Generate a JWT authentication middleware in Node.js/Express, with expired-token handling and a sample protected route."
- **What the AI generated:** a middleware and a sample route, with an outdated dependency and no validation of environment variables.
- **What the team kept:** the middleware structure and the token verification flow.
- **What the team corrected or rejected, and why:** we updated the library, moved the secret to an environment variable and added tests. The sample route was rewritten to fit our user model.

### [24/11/2026] — [Creation of website skeleton front-end]

- **Main prompt:** Build a complete, responsive, production-ready Lost & Found MVP web app for Senac Canoas (Brazil) in pt-BR, using React, Tailwind CSS, JavaScript, Netlify Functions, and Supabase (Auth, Database, Storage) on free-tier services.

UI & Pages:

- Modern, minimalist design (dark blue, orange, light backgrounds) with navigation: Início, Procurar, Achei algo, Perdi algo, Administração.
- Homepage: hero search bar, quick actions, statistics, and recently found items.
- Search & Details: filter by name, category, color, location, date, and keywords; item detail view with a "Tenho interesse" claim button.

Core Features:

- Found Items: form with photo upload, editable AI auto-fill (category, color, features, marks) with a free local fallback analyzer, and manual approval before publishing.
- Lost Items: report form generating a unique ID while keeping private email/phone hidden from public view.
- AI Matching: suggest matches between lost and found items with relevance scores and reasons (no auto-confirmation).
- Claim & Pickup Workflow: user submits claim -> staff approves -> system generates a single-use random pickup code (stored as SHA-256 hash) -> staff validates code at reception -> status updates to "Devolvido".
- Admin Dashboard: protected staff area (Supabase Auth) to manage items/reports, approve/reject claims, validate pickup codes, update statuses (Encontrado, Aguardando retirada, Devolvido), view masked contacts, and hide sensitive photos.

Security & Privacy:

- Strip EXIF metadata from uploaded images; restrict photos with faces, IDs, or bank cards to staff only.
- Auto-hide returned items from public search and archive items older than 90 days.
- Never expose secrets or admin tokens in frontend code; include an .env.example.
- Inspect existing code first, reuse working components, and ensure full data persistence (no mock data).

- **What the AI generated:** The full skeleton of our Front-end website.
- **What the team kept:** Everything
- **What the team corrected or rejected, and why:** Nothing
