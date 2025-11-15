# Astra

Astra is a student-focused research discovery portal that helps learners prepare for and connect with faculty-led opportunities. The application delivers three end-to-end flows:

- **Develop Your Research Skills:** Upload resumes, track critical inputs, and generate readiness scores.
- **Search Faculty Research:** Browse curated project listings by department, view detailed project pages, and jump into outreach.
- **Cold Email Generator:** Create personalized cold emails pre-populated with project data and suggested talking points.

Built with React, Vite, TypeScript, Tailwind CSS, and React Router for a responsive, modern experience.

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
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routes.tsx
│   ├── components
│   │   ├── EmailForm.tsx
│   │   ├── Footer.tsx
│   │   ├── MailingList.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ResumeScore.tsx
│   │   └── ResumeUpload.tsx
│   ├── data
│   │   ├── departments.ts
│   │   └── projects.ts
│   ├── pages
│   │   ├── ColdEmailGenerator.tsx
│   │   ├── Home.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── ProjectSearch.tsx
│   │   └── ResumeTools.tsx
│   └── utils
│       ├── generateEmail.ts
│       └── scoreResume.ts
└── README.md
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open the app**

   Visit the printed URL (default http://localhost:5173) to browse Astra.

## Available Scripts

- `npm run dev` – start the Vite development server with HMR
- `npm run build` – type-check and bundle the production build
- `npm run preview` – preview the production build locally

## Extending the Project

- **Connect real resume services:** Integrate parsing APIs or AI scoring services in `src/utils/scoreResume.ts`.
- **Back the cold email generator:** Replace the placeholder logic in `src/utils/generateEmail.ts` with prompts hitting your LLM endpoint.
- **Add authentication:** Protect advanced flows by wrapping routes with guards in `src/routes.tsx`.
- **Persist data:** Introduce a backend or Supabase/Firebase integration to store student resumes and mailing list signups.

## Screenshots

_Add screenshots of the home page, resume tools, project detail, and email generator views here._
