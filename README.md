# Emma Watson — Portfolio (React + Vite)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  components/
    Navbar.jsx / Navbar.css
    Hero.jsx / Hero.css
    About.jsx / About.css
    Skills.jsx / Skills.css
    ProjectCard.jsx / ProjectCard.css
    Projects.jsx / Projects.css
    Work.jsx        (Experience section)
    Education.jsx   (Education section)
    Timeline.css    (shared by Work + Education)
    Contact.jsx / Contact.css
  pages/
    Home.jsx        (assembles all sections)
  App.jsx
  main.jsx
  index.css         (design tokens / global styles)
```

## Customize

- Edit the arrays at the top of each component (`SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `SOCIALS`) to swap in your real content and links.
- The avatar is a gradient "EW" placeholder — swap `.hero__avatar` / `.about__avatar` for a real `<img>` if you'd like to use an actual photo.
- Colors and fonts live in `src/index.css` under `:root`.
