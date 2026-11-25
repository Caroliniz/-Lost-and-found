# Lost and Found

**English** · [Português (Brasil)](README.pt-BR.md)

This document presents the Lost and Found project, developed as part of the Technical Course in Systems Development at Senac. The documentation will be maintained in both Portuguese and English, keeping both versions updated as the project evolves.

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

- **Java:** back-end development.
- **JavaScript:** development of application functionalities.
- **React:** user interface development.
- **TypeScript:** front-end development with static typing.
- **PL/pgSQL:** procedural language used with PostgreSQL.

**Database:** PostgreSQL.

*The frameworks, libraries, and specific versions will be detailed once the project's configuration has been confirmed.*

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

*This structure is an initial reference and should be adjusted to match the actual folders in the repository.*

## How to Run

### Prerequisites

- Java (version to be confirmed).
- Node.js and npm.
- PostgreSQL.
- Git.

### Back-end

Installation and execution commands will be added once the project configuration has been confirmed.

### Front-end

Installation and execution commands will be added once the dependencies and scripts being used have been confirmed.

## CI/CD

The project's automation process will be documented in this section.

The pipeline is expected to use GitHub Actions to run automated checks, including build, code linting, and tests.

The configurations for running these checks on pull requests and updates to the `main` branch will be documented after the workflows are implemented.

## Deployment

The application has a version available for preview:

https://lost-found-senac.lovable.app/

## Links

- **Repository:** To be added.
- **Application:** https://lost-found-senac.lovable.app/
- **GitHub Board / Project:** To be defined.