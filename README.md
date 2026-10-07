<img width="1346" height="900" alt="view" src="https://github.com/user-attachments/assets/e0dc1aa8-54a6-4c77-b2a7-b6688e65ae77" />



# Developer Portfolio

Personal portfolio website, built as a React single-page application and designed to present my projects, technical skills, current learning areas, languages, interests, and contact information.

The site uses a dark developer-focused visual style with a customizable accent color, responsive layouts, lazy-loaded pages, a custom cursor, subtle motion, project cards, and a working contact form.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Main Features](#main-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Routing](#routing)
- [Styling System](#styling-system)
- [Theme Color System](#theme-color-system)
- [Custom Cursor](#custom-cursor)
- [Animations](#animations)
- [Performance Decisions](#performance-decisions)
- [Images and Assets](#images-and-assets)
- [Contact Form and Formspree](#contact-form-and-formspree)
- [External Services and Platforms](#external-services-and-platforms)
- [Accessibility](#accessibility)
- [Responsive Design](#responsive-design)
- [SEO and Metadata](#seo-and-metadata)
- [Project Pages](#project-pages)
- [Featured Projects](#featured-projects)
- [Local Development](#local-development)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Environment and Configuration](#environment-and-configuration)
- [Important Implementation Decisions](#important-implementation-decisions)
- [Known Technical Notes](#known-technical-notes)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)
- [Repository Structure](#repository-structure)
- [Author](#author)

---

## Project Overview

This portfolio is a client-side React application created to serve as my personal developer website.

Its main goals are to:

- introduce me as a Front-End / Full-Stack Developer;
- present my main technologies and development interests;
- showcase selected personal, team, frontend, backend, and Angular projects;
- provide direct links to GitHub repositories and live demos where available;
- provide a working contact form;
- demonstrate responsive UI design and reusable component-based architecture;
- demonstrate implementation details such as client-side routing, lazy loading, theming, form submission, custom styling, and deployment.

The portfolio is intentionally designed as more than a static CV page. It is also a small frontend project that demonstrates practical React and UI implementation decisions.

---

## Main Features

### Navigation

The site uses React Router and contains the following routes:

- `/` — Home
- `/about` — About Me
- `/projects` — Projects
- `/contacts` — Contacts

The main layout contains a shared header and renders individual pages through React Router's `Outlet`.

### Home page

The Home page includes:

- short introduction;
- role: Front-End / Full-Stack Developer;
- availability status;
- navigation buttons to Projects and Contacts;
- core stack:
  - React
  - Angular
  - TypeScript
  - Node.js
- developer-themed visual presentation.

### About page

The About page includes:

- personal introduction;
- technical skills grouped by category;
- soft skills;
- spoken languages;
- interests;
- current learning and development areas.

### Projects page

The Projects page contains:

- featured Angular project;
- project cards;
- technology tags;
- GitHub links;
- live demo links where available.

### Contacts page

The Contacts page includes:

- location;
- email address;
- GitHub;
- LinkedIn;
- availability information;
- working contact form;
- success and error states.

### Dynamic accent colors

The user can choose an accent color from the header.

Available themes:

- Cyan
- Violet
- Pink
- Green
- Orange

The selected color is stored in `localStorage` and restored on the next visit.

### Custom cursor

The site uses a custom cursor image stored in:

```text
src/images/cursor.png
```

The same custom cursor is intentionally preserved over buttons, links, inputs, textareas, labels, and other interactive elements rather than switching to the browser's default pointer cursor.

### Page loading and transitions

Secondary routes are lazy-loaded with `React.lazy()` and `Suspense`.

This avoids loading all page modules immediately when the application starts.

---

## Technology Stack

### Core frontend

| Technology | Purpose |
| --- | --- |
| React 18 | UI component architecture |
| React DOM | Rendering the React application |
| JavaScript | Application logic |
| HTML5 | Semantic markup |
| CSS3 | Global styling and browser-level styles |
| Emotion Styled | CSS-in-JS and reusable styled components |
| React Router DOM | Client-side routing |
| Create React App | Current build system |
| react-scripts | Development server and production build tooling |

### Design and styling concepts

The current implementation uses:

- CSS-in-JS;
- CSS custom properties;
- gradients;
- responsive media queries;
- Flexbox;
- CSS Grid;
- custom hover states;
- custom scrollbars;
- reusable styled components;
- theme variables;
- responsive typography with `clamp()`;
- custom cursor styling;
- animated transitions.

### Performance-related implementation

The application currently uses:

- route-based code splitting;
- `React.lazy()`;
- `Suspense`;
- optimized WebP assets for larger images;
- removal of unused images;
- reuse of visual assets where possible;
- CSS backgrounds for decorative imagery rather than additional DOM image elements.

---

## Project Architecture

The application follows a page/component structure.

```text
src/
├── Components/
│   ├── App/
│   │   └── App.js
│   ├── Container/
│   │   └── Container.styled.js
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.styled.js
│   └── Layout/
│       ├── Layout.jsx
│       └── Layout.styled.js
├── images/
├── pages/
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.styled.js
│   ├── Contacts/
│   │   ├── Contacts.jsx
│   │   └── Contacts.styled.js
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.styled.js
│   └── Projects/
│       ├── Projects.jsx
│       └── Projects.styled.js
├── index.css
└── index.js
```

### Component responsibilities

#### `App.js`

Responsible for:

- application routing;
- route-level lazy loading;
- `Suspense` fallbacks;
- mapping routes to pages.

#### `Layout.jsx`

Provides the shared application layout.

It renders:

- `Header`
- React Router `Outlet`

#### `Header.jsx`

Responsible for:

- main navigation;
- active route links;
- theme selection;
- reading the saved theme from `localStorage`;
- updating global CSS variables.

#### `Container.styled.js`

Provides a shared content-width container used by multiple pages.

#### Page components

Each page is separated into:

- `PageName.jsx` — content and application logic;
- `PageName.styled.js` — Emotion styled components.

This keeps markup/logic separate from page-specific styling.

---

## Routing

Routing is implemented with:

```js
react-router-dom
```

The application uses:

- `BrowserRouter`
- `Routes`
- `Route`
- `NavLink`
- `Link`
- `Outlet`

The router is initialized in:

```text
src/index.js
```

The route definitions are located in:

```text
src/Components/App/App.js
```

### Lazy-loaded routes

The following pages are lazy-loaded:

- About
- Projects
- Contacts

The Home page remains eagerly loaded because it is the primary landing page.

Example pattern:

```js
const About = lazy(() =>
  import("../../pages/About/About").then((module) => ({
    default: module.About,
  }))
);
```

The explicit `.then()` mapping is used because the page modules use named exports instead of default exports.

---

## Styling System

The project uses:

```text
@emotion/styled
```

Each page has its own styled-components file.

Example:

```text
About.jsx
About.styled.js
```

### Why Emotion Styled is used

It provides:

- component-scoped styling;
- dynamic props;
- easier organization of large page styles;
- reusable style primitives;
- access to CSS variables;
- responsive styles directly beside component definitions.

### Important Emotion limitation encountered

Emotion component selectors such as:

```js
${SomeStyledComponent} {
  ...
}
```

require an Emotion-aware Babel/SWC compiler plugin.

Because this project uses Create React App without the Emotion Babel plugin, component selectors caused the runtime error:

```text
Component selectors can only be used in conjunction with @emotion/babel-plugin
```

The implementation was changed to standard CSS selectors such as:

```css
& > section {
  margin-bottom: 0;
}
```

and:

```css
& h2 {
  font-size: 21px;
}
```

This avoids adding extra Babel configuration and keeps the project compatible with the current CRA setup.

---

## Theme Color System

The portfolio uses CSS custom properties for the dynamic accent theme.

Default values are defined in:

```text
src/index.css
```

Example:

```css
:root {
  --accent: #31dce8;
  --accent-2: #31bff1;
  --accent-deep: #0b7fd0;
  --accent-rgb: 49, 220, 232;
}
```

Components reference the variables instead of hard-coding the main accent color:

```css
color: var(--accent);
border-color: var(--accent);
box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.2);
```

### Theme configuration

Theme definitions are stored in:

```text
src/Components/Header/Header.jsx
```

Each theme defines:

- `accent`
- `accent2`
- `accentDeep`
- RGB value for alpha-based effects.

### Theme persistence

The selected theme is saved with:

```js
localStorage.setItem("portfolio-theme", theme.name);
```

On application load:

```js
localStorage.getItem("portfolio-theme");
```

is used to restore the previous choice.

No backend or account is required for theme persistence because it is a local UI preference.

---

## Custom Cursor

The global cursor is configured in:

```text
src/index.css
```

The asset is:

```text
src/images/cursor.png
```

The implementation uses:

```css
cursor: url("./images/cursor.png") 4 4, auto;
```

The values `4 4` define the cursor hotspot coordinates, not its size.

### Important note

CSS cannot resize an image passed to `cursor: url(...)`.

If a custom cursor is too large, the image itself must be resized before use.

---

## Animations

Animation is intentionally lightweight and implemented with CSS rather than an animation library.

Current UI motion includes:

- hover transitions;
- button movement;
- border and shadow transitions;
- theme-dot scaling;
- project-card interactions;
- route/page visual transitions.

The project also contains a `prefers-reduced-motion` media query to reduce motion for users who request it at OS/browser level.

This is preferable to forcing decorative animation for every user.

---

## Performance Decisions

Several performance-related changes were made during development.

### 1. Route-based code splitting

About, Projects, and Contacts are loaded only when required.

This reduces the JavaScript required for the initial Home route.

### 2. WebP assets

Large visual assets were converted from JPEG to WebP where practical.

This reduces transferred image size while preserving visual quality.

### 3. Removed unused images

Unused generated images and duplicated assets were removed from the repository.

This reduces repository size and avoids accidentally importing unnecessary assets later.

### 4. Decorative background reduction

An additional large Home background image that contributed little visually was removed.

The decorative effect was replaced with CSS gradients and lines.

### 5. Reused assets

Some visual assets are reused in multiple parts of the application instead of storing multiple near-identical files.

### Remaining optimization opportunities

Possible future improvements include:

- AVIF assets;
- responsive image sources;
- preloading the Home hero image;
- self-hosting fonts;
- migrating away from Create React App;
- image CDN usage for larger production sites;
- Lighthouse-based optimization.

---

## Images and Assets

Assets are stored under:

```text
src/images/
```

They include:

- portfolio backgrounds;
- Home/About illustration;
- project screenshots;
- custom cursor.

Large visual backgrounds use CSS `background-image` because they are decorative rather than semantic content.

Project screenshots are selected dynamically in the Projects styling layer according to the project variant.

---

## Contact Form and Formspree

The contact form is integrated with **Formspree**.

Form endpoint:

```text
https://formspree.io/f/meaeaglg
```

The implementation is located in:

```text
src/pages/Contacts/Contacts.jsx
```

### Why Formspree was chosen

The portfolio is primarily a frontend project and does not need a dedicated backend just to deliver contact messages.

Formspree provides:

- hosted form processing;
- email delivery;
- submission storage in the Formspree dashboard;
- no email credentials inside the GitHub repository;
- simple deployment with static/frontend hosting.

### Submission implementation

The form uses the browser Fetch API:

```js
await fetch(FORMSPREE_ENDPOINT, {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json",
  },
});
```

### Submitted fields

The form sends:

- `name`
- `email`
- `subject`
- `message`

### Form state

Local React state is used for:

- `isSubmitting`
- `submitStatus`

Possible states are:

- idle;
- sending;
- success;
- error.

While submitting:

- the button is disabled;
- button text changes to `Sending...`.

On success:

- Formspree returns an OK response;
- the form is reset;
- a success message is shown.

On failure:

- an error message is shown;
- the user is encouraged to try again or use email.

### Why the Formspree React package is not required

Although Formspree provides `@formspree/react`, this project currently uses the Fetch API directly.

This decision avoids an additional dependency and is sufficient for the current form requirements.

---

## External Services and Platforms

### GitHub

Used for:

- source control;
- repository hosting;
- project links;
- version history.

Portfolio repository:

```text
https://github.com/yanakhorolska/me
```

### Vercel

Used for:

- production hosting;
- automatic deployments after pushes to the connected GitHub branch;
- production build execution;
- deployment status.

Typical deployment flow:

```text
Local code
   ↓
Git commit
   ↓
GitHub main branch
   ↓
Vercel detects push
   ↓
npm install
   ↓
npm run build
   ↓
Production deployment
```

### Formspree

Used for contact-form processing and email delivery.

### Google Fonts

Fonts are loaded through Google Fonts in `src/index.css`.

Current font families:

- Inter
- Chivo Mono

Inter is used for the main UI.

Chivo Mono is used for developer/technical visual elements.

### LinkedIn

The Contacts page contains a direct link to the LinkedIn profile.

### External project hosting

Individual portfolio projects may be hosted through services such as:

- Vercel;
- GitHub Pages.

These are linked from the Projects page when a live demo is available.

---

## Accessibility

Accessibility-related implementation includes:

- semantic buttons and links;
- `aria-label` on theme selectors;
- `aria-pressed` for current theme state;
- `aria-live` status for successful form submission;
- `role="alert"` for form errors;
- visible focus-capable form controls;
- required form fields;
- `prefers-reduced-motion` support;
- text alternatives through visible labels rather than placeholder-only form UX.

Potential future accessibility work:

- full keyboard navigation audit;
- automated axe testing;
- contrast verification for every accent theme;
- explicit skip-to-content link.

---

## Responsive Design

The site uses CSS media queries and responsive layout techniques.

Main techniques:

- CSS Grid;
- Flexbox;
- `clamp()` typography;
- responsive column switching;
- mobile project-card layouts;
- responsive Contact page grid;
- adaptive Home hero presentation;
- responsive navigation spacing.

Important breakpoints currently exist around:

- 980px
- 900px
- 860px
- 820px
- 760px
- 700px
- 680px
- 640px
- 620px
- 560px

These are component-specific rather than based on one global framework breakpoint scale.

---

## SEO and Metadata

The HTML entry point is:

```text
public/index.html
```

It defines:

- UTF-8;
- viewport;
- favicon;
- theme color;
- page description;
- page title;
- web manifest.

The portfolio uses a custom favicon from the `public` directory.

Future SEO improvements could include:

- Open Graph tags;
- Twitter/X card metadata;
- canonical URL;
- structured data;
- richer page description;
- individual route metadata using React Helmet or a similar solution.

---

## Project Pages

### Home

Purpose:

- immediate introduction;
- role and positioning;
- core stack;
- availability;
- clear calls to action.

Main CTA routes:

- Projects
- Contacts

### About

Contains the portfolio's full personal and skills overview.

Technical skill groups currently displayed:

#### Frontend

- HTML5
- CSS3
- SCSS/SASS
- Tailwind CSS
- Material UI
- JavaScript
- TypeScript
- React
- Angular

#### State & Async

- Redux Toolkit
- React Query
- RxJS
- NgRx

#### Backend & APIs

- Node.js
- Express.js
- REST API
- OpenAPI
- Axios
- Joi
- Zod
- Postman

#### Databases & Cloud

- MongoDB
- PostgreSQL
- AWS

#### Testing & DevOps

- Jest
- Docker
- Vercel

#### Tools

- Git
- GitHub
- VS Code
- Figma

Important distinction: these are portfolio skills and technologies I work with or study. They are not all dependencies of this specific portfolio application.

### Projects

Displays featured and supporting projects.

### Contacts

Provides direct contact methods and the Formspree form.

---

## Featured Projects

### TaskFlow

Angular task-management project.

Technologies displayed in the portfolio:

- Angular
- TypeScript
- RxJS
- Signals
- SCSS
- REST API

Repository:

```text
https://github.com/yanakhorolska/task-flow
```

### Petly

Team/full-stack pet adoption project.

Technologies displayed:

- React
- Redux
- Node.js
- MongoDB
- REST API

Live demo:

```text
https://pets-front-end.vercel.app/
```

### Weather App

Weather application with live forecast/location functionality.

Technologies displayed:

- React
- API
- CSS
- JavaScript

Live demo:

```text
https://yanakhorolska.github.io/weather--app/
```

### Weekendly

Weekend activity planning/discovery project.

Technologies displayed:

- React
- Tailwind
- Node.js
- REST API

Repository:

```text
https://github.com/yanakhorolska/Weekendly-App
```

### Portfolio Website

This repository.

Technologies displayed on the Projects page:

- React
- Responsive Design
- Vercel

---

## Local Development

### Requirements

Install:

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/yanakhorolska/me.git
cd me
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The development server normally starts at:

```text
http://localhost:3000
```

---

## Production Build

Create a production build with:

```bash
npm run build
```

Create React App writes the output to:

```text
build/
```

Always run a production build before pushing major changes:

```bash
npm run build
```

This is especially useful because Vercel treats CI warnings more strictly than the local development server.

---

## Deployment

The site is deployed through Vercel from GitHub.

Typical workflow:

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel then automatically starts a new deployment.

### Important Vercel/CRA behavior

In CI environments, Create React App may treat ESLint warnings as build errors because:

```text
process.env.CI = true
```

For example, an unused import that only appears as a warning locally can fail the Vercel build.

Example:

```text
'bg' is defined but never used  no-unused-vars
```

Fix the warning instead of disabling CI validation.

---

## Environment and Configuration

The current project does not require a local `.env` file for its existing functionality.

The Formspree form ID is used as a public client-side form endpoint.

No private email password or secret API credential is stored in the frontend.

If future features require secrets, they must not be committed to Git.

For Vercel, secrets should be configured through:

```text
Project Settings → Environment Variables
```

---

## Important Implementation Decisions

### Why React Router instead of separate HTML pages

The portfolio is a single-page application.

React Router provides:

- fast client-side navigation;
- shared layout;
- reusable route logic;
- route-level lazy loading.

### Why Emotion Styled

Emotion is used to keep component styling organized and colocated with page components while still supporting:

- dynamic styling;
- media queries;
- CSS variables;
- pseudo-elements;
- hover/focus states.

### Why CSS variables for themes

Changing individual hard-coded colors throughout many styled components would be difficult to maintain.

Instead, the theme system changes a small group of global CSS custom properties.

All theme-aware components reference those variables.

### Why localStorage

Theme preference is UI-only state.

It does not need:

- Redux;
- backend persistence;
- authentication;
- a database.

`localStorage` is sufficient and persists the choice across browser sessions.

### Why Fetch for Formspree

The contact workflow is small and does not require another form library.

Using `fetch`:

- reduces dependencies;
- keeps behavior explicit;
- provides complete control over loading/success/error states.

### Why lazy loading

Home is the most likely first route.

There is no reason to force a visitor to immediately download the JavaScript for every secondary page.

### Why WebP

Large generated illustrations were one of the main performance costs.

WebP reduces file transfer size while maintaining good visual quality.

### Why no heavy animation library

The design requires subtle UI motion, not physics-heavy animation.

CSS transitions keep:

- bundle size lower;
- implementation simple;
- performance predictable.

---

## Known Technical Notes

### Create React App

The project currently uses:

```json
"react-scripts": "5.0.1"
```

Create React App is now a legacy toolchain.

The current project still works with CRA, but a future migration to Vite would provide:

- faster development startup;
- a smaller/simpler modern toolchain;
- fewer legacy dependency issues;
- easier long-term maintenance.

### Current package dependencies

The current `package.json` includes:

```text
@emotion/styled
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
react
react-dom
react-icons
react-router-dom
react-scripts
styled-system
web-vitals
```

Not every installed dependency is currently required by the visible production code.

A future dependency cleanup can remove packages that are no longer used.

### React version

The application currently uses React 18 and the modern root API:

```js
ReactDOM.createRoot(...)
```

### StrictMode

The root is wrapped in:

```jsx
<React.StrictMode>
```

In development, this may intentionally cause some React lifecycle behavior to run more than once in order to reveal unsafe side effects.

This does not mean production renders everything twice.

---

## Troubleshooting

### Vercel build fails because of an ESLint warning

Example:

```text
Treating warnings as errors because process.env.CI = true
```

Fix the reported warning.

Common cause:

```text
variable is defined but never used
```

### Emotion error about component selectors

Error:

```text
Component selectors can only be used in conjunction with @emotion/babel-plugin
```

Do not use styled-component interpolation as a selector with the current CRA configuration.

Avoid:

```js
${ProjectTitle} {
  font-size: 21px;
}
```

Use a normal selector when possible:

```css
& h2 {
  font-size: 21px;
}
```

### Custom cursor does not appear

Check:

1. the file exists in `src/images/cursor.png`;
2. the path in `index.css` is correct;
3. the cursor image is not excessively large;
4. the browser supports the image format;
5. CSS has not been overridden.

Current pattern:

```css
cursor: url("./images/cursor.png") 4 4, auto;
```

### Contact form says success but no email appears

Check Formspree:

```text
Formspree Dashboard → Form → Submissions
```

If the submission exists there, the frontend request succeeded and the issue is email delivery/configuration rather than the React form.

Also check:

- spam/junk;
- Formspree notification settings;
- verified destination email.

### Formspree shows no submission

Use browser DevTools:

```text
Network → submit form → locate request to meaeaglg
```

Check:

- HTTP status;
- response body;
- request method;
- submitted form data.

### Images feel slow

Check asset size first.

Large hero backgrounds have much more impact on perceived performance than small JavaScript micro-optimizations.

Preferred approach:

- WebP/AVIF;
- remove unused backgrounds;
- lazy-load secondary routes;
- avoid unnecessary duplicate image files.

### New deployment does not show latest changes

Try:

- verify latest Vercel deployment is `Ready`;
- confirm the deployment corresponds to the latest Git commit;
- hard refresh browser with `Ctrl + F5`;
- clear stale cache if required.

---

## Future Improvements

Potential improvements that can be implemented later:

- migrate CRA to Vite;
- improve tablet navigation;
- add mobile theme-picker UI;
- optimize all remaining large images;
- add AVIF fallbacks;
- add project case-study pages;
- add downloadable CV;
- add custom 404 route;
- add Open Graph preview image;
- add richer SEO metadata;
- add automated tests for contact form behavior;
- add accessibility testing;
- run Lighthouse audits regularly;
- add analytics only if required;
- self-host fonts if external font loading becomes a performance concern.

---

## Repository Structure

```text
me/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── static public assets
├── src/
│   ├── Components/
│   │   ├── App/
│   │   ├── Container/
│   │   ├── Header/
│   │   └── Layout/
│   ├── images/
│   ├── pages/
│   │   ├── About/
│   │   ├── Contacts/
│   │   ├── Home/
│   │   └── Projects/
│   ├── index.css
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Author

**Yana Khorolska**

Front-End / Full-Stack Developer

GitHub:

```text
https://github.com/yanakhorolska
```

LinkedIn:

```text
https://www.linkedin.com/in/yana-khorolska
```

Email:

```text
yana.khorolska@protonmail.com
```

Location:

```text
Olsztyn, Poland
```

---

## Documentation Purpose

This README is intentionally more detailed than a typical public portfolio README.

It serves two purposes:

1. public project documentation;
2. a technical reference for remembering how the portfolio works, which external services it uses, why specific implementation decisions were made, and how to troubleshoot common issues.

When the implementation changes, this README should be updated together with the code so it remains a reliable source of truth.
