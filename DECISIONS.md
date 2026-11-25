# Project decisions

**English** · [Português (Brasil)](DECISIONS.pt-BR.md)

Record the team's important decisions here. Each entry should be short and state what was decided, the alternatives considered and the reason for the choice.

Project documentation must be written in **English** (this file is the main version), with a **Portuguese version** alongside (`DECISIONS.pt-BR.md`). Keep both versions in sync.

Keep this file at the **root** of the repository. Add a new entry for every relevant decision (stack, architecture, MVP scope, what was left out, paths you tried and abandoned, etc.). This file is a script for the decisions segment of the presentation.

Copy the template below whenever you need a new entry.

[23/11/2026] — Initial project scope and frontend technology

Decision: start developing a responsive Lost and Found web application for Senac Canoas using React and Tailwind CSS, with a Brazilian Portuguese interface.

Alternatives considered: none were specified at this stage.

Reason: establish the project's technological and functional foundation, covering item registration, search, management, and item recovery, while prioritizing security and user experience.

[24/11/2026] — Adoption of real backend persistence

Decision: use Lovable's integrated backend to manage the database, authentication, and image storage, connecting forms to actual registration and update operations.

Alternatives considered: using mock data or implementing an external backend.

Reason: ensure data persistence, avoid purely visual features, and take advantage of the platform's native resources. Validation and error messages were also prioritized to prevent incomplete registrations and silent failures.

[24/11/2026] — Interface and responsiveness improvements

Decision: improve the user experience by making the interface responsive, accessible, and visually consistent while preserving the existing visual identity and functionality.

Alternatives considered: keep the original interface unchanged or completely redesign it.

Reason: make the system easier to use for students, teachers, and staff across different devices by improving navigation, information organization, and accessibility without affecting existing integrations.

[24/11/2026] — Implementation of security and access control rules

Decision: enforce permission-based access control in the backend, protect personal and administrative information, and implement a secure item retrieval process using randomly generated codes stored as SHA-256 hashes.

Alternatives considered: restricting operations only through the user interface or leaving personal and administrative information publicly accessible.

Reason: prevent unauthorized access and modifications, protect user privacy, and ensure a secure item return process. Returned items must also be hidden from public searches, and old records must be archived after 90 days.

[24/11/2026] — Testing and delivery preparation

Decision: conduct a general application review, prioritizing tests of the main workflows, correction of identified issues, and documentation updates before delivery.

Alternatives considered: deliver the application without a general review or replace parts of the project during the final stage.

Reason: ensure that existing features work correctly, data is persisted, access permissions are enforced, and the application is ready for deployment.
