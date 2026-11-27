# Lost and Found

**English** · [Português (Brasil)](README.pt-BR.md)

This document presents the Lost and Found project, developed as part of the Technical Course in Systems Development at Senac. The documentation will be maintained in both Portuguese and English, keeping both versions updated as the project evolves.

# Live DEMO: https://lost-found-senac.lovable.app/

## Team

- **Class:** TDS — mixed classes 6570, 6756, and 6863
- **Tech Lead:** Carolini Rodrigues
- **Project Presentation:** Gabriel Lopes
- **Team Members:**
  - Carolini Rodrigues — [GitHub](https://github.com/Caroliniz)
  - Felipe (6756) — GitHub to be confirmed
  - Gabriel Lopes — GitHub to be confirmed
  - Davi (V Marins) — GitHub to be confirmed

## Theme / Area

Lost and found — campus life and community.

## Problem

In academic environments, students, teachers, and staff members commonly lose or find personal belongings during their daily routines.

People who find lost items often do not know how to locate their owners, while those who have lost something lack a centralized way to check whether someone has found it.

The absence of an organized platform to share information about these items makes communication and the recovery of belongings more difficult.

## Solution

Lost and Found is an application designed to make it easier to identify and recover lost items in academic environments.

The application will allow people who find lost items to upload photographs. Artificial intelligence will be used to analyze the image and generate a suggested description of the item.

After registration, the image will be displayed on the application's main page, allowing other users to browse found items and recognize their belongings.

### Main Features

- Registration of found items through photographs.
- Use of artificial intelligence to generate item descriptions based on images.
- Display of found items on the main page.
- Browsing published items to help owners recognize their belongings.

Additional features may be documented as they are implemented.

## Tech Stack

### Languages and Technologies

- **React:** back-end development.
- **JavaScript:** development of application functionalities.
- **React:** user interface development.
- **TypeScript:** front-end development with static typing.
- **PL/pgSQL:** procedural language used with Supabase/Lovable.

**Database:** Supabase/Lovable.

_The frameworks, libraries, and specific versions will be detailed once the project's configuration has been confirmed._

## Folder Structure

The project will be organized to separate the back-end from the front-end, making it easier to organize, maintain, and develop the different parts of the application.

The exact directory structure will be documented according to the organization actually used in the repository.

```text
/
├── README.md
├── README.pt-BR.md
├── DECISIONS.md
├── DECISIONS.pt-BR.md
├── AI_LOG.md
├── AI_LOG.pt-BR.md
├── .lovable/
├── drizzle/
├── public/
├── src/
└── supabase/
```

_This structure is an initial reference and should be adjusted to match the actual folders in the repository._

## How to Run

### Prerequisites

- React.
- Node.js and npm.
- PostgreSQL.
- Git.

### Back-end

The project's back-end uses _Supabase/Lovable Cloud_ as its backend platform.

Supabase provides the following services:

- _Supabase/Lovable:_ database management and data storage.
- _Authentication:_ user authentication.
- _Storage:_ file and image storage.
- _RPC Functions:_ execution of database functions.

The application communicates directly with Supabase through the Supabase JavaScript client, performing operations on tables such as items, claims, lost_reports, and profiles.

The project also uses _TanStack Start server functions_, including functionality for photo analysis.

The database schema is defined in schema.sql.

### Front-end

The project's front-end is developed using _React 19 and TypeScript_, with TanStack Start and TanStack Router for application structure and routing.

The main technologies and tools used are:

- _React:_ building the user interface and components.
- _TypeScript:_ static typing and improved development safety.
- _Tailwind CSS:_ interface styling.
- _Vite:_ development environment and production builds.
- _TanStack Start:_ application framework and server functions.
- _TanStack Router:_ application routing.
- _ESLint:_ static code analysis and identification of potential issues.
- _Prettier:_ consistent code formatting.
- _Vitest:_ automated testing.

_Installing dependencies:_

bash
npm install

_Running the development environment:_

bash
npm run dev

_Building for production:_

bash
npm run build

## CI/CD

The project uses _GitHub Actions_ to automate Continuous Integration (CI) processes.

The workflow runs automatically when:

- A push is made to the main branch.
- A Pull Request targeting the main branch is opened or updated.

The following steps are performed during execution:

- _Dependency installation:_ installs the required packages using npm ci.
- _Lint:_ checks for potential code issues and inconsistencies using npm run lint.
- _Automated tests:_ runs the tests using Vitest.
- _Build:_ checks whether the application can be compiled for production using npm run build.

The automation configuration file is located at .github/workflows/ci.yml.
