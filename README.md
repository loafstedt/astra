# Astra

Astra is a student-focused research discovery hub that helps learners build research-ready resumes, explore faculty-led projects, and draft cold emails with confidence. The project is built with React, Vite, TypeScript, TailwindCSS, and React Router.

## Project Overview

The application provides four primary experiences:

1. **Develop Your Research Skills** – A workspace for building and scoring resumes with placeholder tooling.
2. **Search Faculty Research** – Filterable project listings by department to connect students with faculty mentors.
3. **Cold Email Generator** – Auto-generated email templates populated with project and professor data.
4. **Mailing List Flow** – A simple email capture with instant feedback.

Each flow currently relies on client-side placeholder logic and is ready to be connected to real services.

## File Structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── src
    ├── App.tsx
    ├── main.tsx
    ├── routes.tsx
    ├── components
    │   ├── EmailForm.tsx
    │   ├── Footer.tsx
    │   ├── MailingList.tsx
    │   ├── Navbar.tsx
    │   ├── ProjectCard.tsx
    │   ├── ResumeScore.tsx
    │   └── ResumeUpload.tsx
    ├── data
    │   ├── departments.ts
    │   └── projects.ts
    ├── pages
    │   ├── ColdEmailGenerator.tsx
    │   ├── Home.tsx
    │   ├── ProjectDetails.tsx
    │   ├── ProjectSearch.tsx
    │   └── ResumeTools.tsx
    └── utils
        ├── generateEmail.ts
        └── scoreResume.ts
```

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the URL shown in the terminal (defaults to `http://localhost:5173`).

## How to Extend the Project

- **Connect real resume services:** Replace the placeholder functions in `src/utils/scoreResume.ts` with API calls to scoring services or machine learning models.
- **Integrate storage:** Add backend endpoints or Firebase/Hasura to persist resumes, project metadata, and mailing list subscriptions.
- **Enhance search:** Expand `src/data/projects.ts` with live data and integrate advanced filtering or keyword search.
- **Personalize cold emails:** Improve `generateEmail` in `src/utils/generateEmail.ts` to support templates, tone adjustments, and personalization tokens.
- **Add authentication:** Protect certain flows behind student logins and sync with campus identity providers.

## Example Screenshots

> _Add screenshots of the home page, resume tools, and cold email generator here._

