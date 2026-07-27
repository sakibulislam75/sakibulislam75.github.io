# Sakibul Islam — Personal Website (React + Tailwind + DaisyUI)

Converted from the original static HTML/CSS/JS site into a component-based React app.

## Stack
- React 18 + Vite
- Tailwind CSS + DaisyUI

## Setup
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
```

## Folder structure
```
src/
  components/   Navbar, Hero, ResumeCard, Projects, ProjectCard, Skills, SkillPill, Connect, Footer
  data/         projects.js, skills.jsx  (content, separate from markup)
  hooks/        useTheme.js (light/dark/system toggle), useTypingEffect.js (hero typing animation)
  App.jsx       page layout
  main.jsx      React entry point
  index.css     Tailwind imports
```

## Features preserved from the original
- Typing/deleting animation in the hero role line
- Resume download card
- Projects grid (responsive: 2 columns → 1 column on mobile)
- Skills pills grouped by category, including the dashed "Learning" pills
- Connect section with email + social buttons
- Footer flip-text animation (copyright ↔ "Built with ❤️")
- Light / Dark / System theme toggle, persisted in localStorage and synced to OS preference in "system" mode
- Fully responsive across mobile, tablet, and desktop breakpoints
