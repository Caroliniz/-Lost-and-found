# Theme briefing: Lost and found

**English** · [Português (Brasil)](BRIEFING.pt-BR.md)

**Hack with AI: Coding with Intelligence**  
Senac na Prática · Technical Program in Systems Development  
Area: campus life and community  
Immersion from 23 to 29 November · presentations on 30 November and 1 December

This briefing is the starting point for **your** theme. Read it carefully, cut an MVP that fits in one week, and record your decisions. You will turn this problem into a real product, with a front end and a back end, an organized repository, and documented use of AI. This is a collaborative immersion: the panel evaluates what the team built, decided, and learned.

## Theme and context

**Lost and found** — A system to register and search for lost items, with AI describing the object from a photo.

Every term, campus fills up with bottles, chargers, notebooks, jackets, and documents that someone left in a lab, a classroom, or the courtyard. Many items end up in a box at the front desk, described from memory (“a black jacket”), or circulate as a loose photo in a group chat. The person who lost the item struggles to search; the person who found it does not know how to register it properly; and items that carry personal data — badges, ID cards — need more care than improvisation can offer.

You will build a simple, responsible flow to register, describe, and locate these objects at Senac and in the immediate surroundings of the campus.

## Audience and personas

- **Someone who lost an item:** needs to describe what they are looking for and recognize the item safely.
- **Someone who found an item:** wants to register it quickly, with a photo and a location, without becoming permanently responsible for it.
- **Front desk or campus staff:** can centralize storage and return, with a clear record.

## Goal

Ship an MVP in which a found item (or a lost-item report) is registered with a photo and a location, AI generates a structured description from the image, and people can search, follow the status, and complete a return with as little personal data as possible shown in public.

## Minimum requirements (MVP)

The scope below is realistic for one week. Lock it on the first day and record in `DECISIONS.md` what is in, what is out, and why. A complete, demonstrable flow is better than a long list left half-done.

1. Register a found item, with a photo, date, approximate campus location, and an initial status.
2. AI generates a structured description from the photo (type, color, visible marks) for the person to review and adjust.
3. Register a lost-item report (what the person is looking for, when and where they think they lost it).
4. Search and filter items by type, color, location, or words in the description.
5. A simple interest-and-return flow that does not display a phone number or ID document in a public listing.
6. Update the item status (found, waiting for pickup, returned).

## Where AI comes in

The use of AI is allowed and encouraged — in the product and in the process — and it must appear in `AI_LOG.md`. Some concrete starting points for this theme:

- Describe the object from the photo, in plain language, with attributes that help the search.
- Suggest tags (category, color, type) that the person confirms before publishing.
- Help match a lost-item report with found items, suggesting candidates — always with human confirmation.
- Flag a photo that seems to contain a document, a face, or other sensitive data, so the team can handle it more carefully.

Do not publish, without your review, an AI-generated text or automatic decision as if it were already the final version.

## Optional extras

Only after the MVP is standing. These are ideas, not obligations:

- A notice when an item similar to an open lost-item report is registered.
- A simple map of the places where items are found most often.
- A code or slip for pickup at the front desk.
- Visible guidance on what to do with documents and cards.

## Out of scope

To protect the deadline and the focus of the product:

- Shipping or logistics off campus.
- Payment, rewards, or auctions of unclaimed items.
- Facial recognition or automatic identification of people in photos.
- An official police report.

## Questions to guide the team

Use these questions on the first day, when you define the MVP, and again before the demo:

- How do you confirm that the person picking up the item is the right person, without exposing too much data on the screen?
- What do you do when the photo shows a document, a badge, or a face?
- Who is responsible for keeping the physical object while the record is open?
- How long does an item stay visible in the search?
- How does search work if the person only remembers a vague mental picture?

## Deliverables and how the panel evaluates

This is a one-week **collaborative immersion**, with teams of 3 or 4 TDS students. The panel evaluates **your** work, on your own project — formative feedback, not a comparison with other teams.

**What must be in the repository** (at the root), in **English** (the main version) and in **Portuguese** (`.pt-BR`), with a language link at the top of each file:

- `README.md` and `README.pt-BR.md`
- `DECISIONS.md` and `DECISIONS.pt-BR.md`
- `AI_LOG.md` and `AI_LOG.pt-BR.md`

The application must have a **front end and a back end**. The back end may be **Java**, **Python**, or **Node.js** (alone or combined, as long as they are integrated). A front end is required (web, desktop, or mobile). Justify the stack in `DECISIONS.md`. Also required: a Conventional Commits history, work through reviewed Pull Requests, a protected `main` branch, and a green **GitHub Actions** pipeline (build, lint, and tests) on PRs and on `main`. Do not commit secrets. On the first day, add the instructor as a collaborator: **adrianoanschau@gmail.com**.

**Code freeze** is on Sunday, **29 November, at 23:59**. Presentations are **15 minutes + 5 minutes of questions**, on 30 November and 1 December, at Senac Canoas, Room 103. Rehearse the demo and the required outline (problem and solution, live demo, workflow, decisions, AI in practice, and CI/CD).

Evaluation is split equally between **two panels**:

- **Technical panel (50%):** code quality and architecture; Git, Conventional Commits, and PRs; CI/CD; command of the code in the Q&A.
- **Innovation and Impact panel (50%):** originality; impact (the real problem and for whom); user experience; clarity of the pitch; creative use of AI.

Anyone on the team may be asked about any part of the project. Use AI thoughtfully, record what it generated and what you corrected, and own the code you present.

Good work — and may the week be intense, collaborative, and well documented.

