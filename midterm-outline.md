# Midterm Recording Outline — Talking Points

## Section 1 — Project Overview & Target User (~90 sec)

- Portfolio-style landing page site
- Target user: end users who want fast, responsive pages with easy contact functionality
- Solves: how to build modern web app that scales from static HTML through React components
- Why this project: demonstrates full stack progression across four weeks
- Foundation matters: each week builds on the previous — semantic HTML → responsive design → interactivity → component architecture

## Section 2 — Live Site Walkthrough (~3 min)

1. Open homepage, show header with title and theme toggle button
2. Click theme toggle, show page switches to dark mode, mention localStorage persistence
3. Click Contact link in navigation — show client-side navigation (no page reload)
4. Show contact form with three fields (name, email, message)
5. Try to submit empty form — show inline error messages appear under each field
6. Type in a field — show error clears on input
7. Fill form correctly and submit — show success message and form resets
8. Resize browser to mobile width — show navigation stacks, cards adjust, padding reduces
9. Expand back to desktop — show responsive layout adapts smoothly

## Section 3 — Architectural Decisions (~3 min)

**Decision 1: Semantic HTML Structure**
- Chose `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` instead of generic divs
- Semantic elements tell the browser and screen readers what each part means
- Alt rejected: use `<div>` everywhere with classes — would hide meaning from assistive tech and search engines

**Decision 2: Design System**
- Consistent color palette (green accent, neutral surfaces), spacing scale, single 768px breakpoint
- Why: consistency scales; every component using same tokens means cohesive site and faster updates
- Alt rejected: custom breakpoints and colors scattered throughout — would require hunting through multiple files for any change

**Decision 3: React Over Vanilla JavaScript**
- Week 3 used vanilla DOM queries and listeners; Week 4 refactored to React `useState` and `useEffect`
- Why: vanilla JS works for two features but breaks with three or four; React gives declarative state model and handles DOM sync
- Alt rejected: stick with vanilla JS for simplicity — would lead to memory leaks, state conflicts, and brittle code

**Decision 4: Component Architecture**
- Server components for `Nav`, `Footer`, `Hero`, `Card`; client components for `Header` and `ContactForm`
- Theme state lives in `Header`, not prop-drilled through layers
- Why: smaller bundle, clearer separation, state lives where toggle is, avoids prop drilling
- Alt rejected: make everything client component with global state — would bloat bundle and hurt performance

## Section 4 — Reflection & What Comes Next (~90 sec)

**One thing to reverse:**
- Theme state in `Header` directly — would use React Context from the start if scaling further

**One thing proud of:**
- Semantic HTML foundation — made everything after it easier; felt like enhancement, not retrofit

**What's next:**
- Add complex state management, API calls, backend integration, and scale component library as we head into second half of term.
