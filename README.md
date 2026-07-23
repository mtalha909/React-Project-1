# Internee.pk — React Redesign

A modernized rebuild of the internee.pk landing page using React
(Vite) + Tailwind CSS. This replaces the plain HTML/CSS/JS version
now that you've started learning React — same content, same sections,
but each one is now a real component with its own state and hooks.

## Design direction

Since the audience is students learning to code, the whole page leans
into a "code editor" visual language instead of a generic
gradient-hero template:

- **Hero** — a mock code editor panel that types itself out (`Hero.jsx`)
- **Navbar** — styled like editor tabs (`home.jsx`, `tracks.jsx`, ...)
- **Tracks section** — the signature element: internship tracks shown
  as stations on a route/rail (`TrackRail.jsx`), since a "track"
  already implies a path toward a destination (a job)

**Colors:** `ink` (near-black navy), `paper` (pale sage background),
`primary` (emerald green), `accent` (amber highlight), `muted` (slate
gray) — defined once in `tailwind.config.js`, not hard-coded anywhere.

**Type:** Space Grotesk for headings, Inter for body text, JetBrains
Mono for labels/code — loaded in `index.html`.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
├── main.jsx              → React entry point
├── App.jsx                → lays out sections in order
├── index.css               → Tailwind + shared global styles
├── components/
│   ├── Navbar.jsx          → sticky nav, mobile menu (useState)
│   ├── Hero.jsx             → typewriter code panel (useState + useEffect)
│   ├── Stats.jsx             → animated counters (useCountUp hook)
│   ├── Services.jsx           → "why us" cards from data array
│   ├── TrackRail.jsx           → signature interactive track rail (useState)
│   ├── Testimonials.jsx         → carousel with autoplay (useState + useEffect)
│   ├── ContactForm.jsx           → validated form (useState)
│   ├── Footer.jsx                 → footer + back-to-top button
│   └── Reveal.jsx                  → shared scroll-reveal wrapper
├── hooks/
│   ├── useReveal.js         → IntersectionObserver-based reveal hook
│   └── useCountUp.js         → animated counting hook
└── data/
    ├── tracks.js             → internship track content
    └── services.js            → services + testimonials content
```

## Notes on the React patterns used

- **State lives in the component that needs it.** `TrackRail` owns
  `selectedId`, `ContactForm` owns its own `values`/`errors`, etc. —
  nothing is lifted higher than it needs to be.
- **Data is separated from markup.** Anything content-like (tracks,
  services, testimonials) lives in `src/data/`, so editing copy never
  means touching component logic.
- **Custom hooks** (`useReveal`, `useCountUp`) wrap repeated
  `IntersectionObserver` logic so components stay short and readable.
- **One component per section**, matching exactly how the old plain-JS
  version was already organized by `init...()` functions — this was
  the intentional bridge to make the React version easy to follow.
