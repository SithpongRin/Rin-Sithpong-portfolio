# Rin Sithpong — Personal Portfolio Website

A modern, premium, responsive, single-page personal portfolio website for **Mr. RIN SITHPONG (រិន សិទ្ធិពង្ស)** — certified Lower Secondary School Teacher in Mathematics & Physics, state educator, and digital STEM enthusiast based in Kandal, Cambodia.

Built strictly with **pure semantic HTML5, modern CSS3, and vanilla JavaScript**. No frontend frameworks, no bundlers, no build steps, and zero emojis throughout the entire user interface.

---

## Live Demo & GitHub Pages

- **Live URL**: `https://sithpongrin.github.io/portfolio/` (or your GitHub repository Pages URL)
- **Local preview**: Simply double-click `index.html` in any modern web browser.

---

## Features

- **Strict Zero-Emoji Rule**: Built exclusively with clean vector SVG icons and modern geometric typography.
- **Dual-Theme System (Light & Dark Mode)**:
  - Smart priority: Saved user preference (`localStorage`) &rarr; Operating system preference (`prefers-color-scheme`) &rarr; Light fallback.
  - Smooth color transitions across all surfaces, cards, and borders.
- **Instant Bilingual Switcher (English ⇄ Khmer)**:
  - Seamless client-side dictionary translation without page reloads.
  - Automatic typography adjustment for Khmer script (line-height, letter-spacing, font hierarchy).
  - Preference persisted in `localStorage`.
- **Responsive Layout**:
  - Pixel-perfect across all screen sizes: 320px, 375px, 768px, 1024px, 1440px+.
  - Mobile slide-down navigation drawer with automatic close upon selecting any section.
- **Scroll & Micro-Interactions**:
  - Sticky navigation bar with dynamic backdrop blur and shadow on scroll.
  - Real-time reading progress bar at the top of the viewport.
  - ScrollSpy navigation indicator highlighting the current section in view.
  - Smooth scroll reveal animations powered by lightweight `IntersectionObserver`.
  - Floating back-to-top button.
- **Interactive Contact Form**:
  - Real-time client-side field validation with localized feedback messages.
  - Direct email composition fallback via `mailto:`.
- **Accessibility & Performance**:
  - Semantic HTML5 landmark structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Full keyboard accessibility with visible `:focus-visible` outlines.
  - Dedicated `@media (prefers-reduced-motion: reduce)` rules for motion-sensitive users.
  - 100% lightweight with no external runtime dependencies.

---

## Technologies Used

- **HTML5**: Semantic tags, ARIA attributes, SVG vectors.
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, Media Queries, Hardware-accelerated transitions.
- **JavaScript (ES6+)**: Vanilla DOM manipulation, `IntersectionObserver`, `localStorage`, `matchMedia`.
- **Web Fonts**: Google Fonts (`Inter` for English, `Kantumruy Pro` for Khmer).

---

## File Structure

```text
Portfolio/
├── index.html                           # Main portfolio markup & semantic structure
├── style.css                            # Complete CSS design system, themes & animations
├── script.js                            # Theme toggle, i18n translations & UI controllers
├── favicon.svg                          # Geometric RS monogram favicon
├── .gitignore                           # Git ignore rules
├── README.md                            # Documentation & customization guide
├── Photo/                               # Original source photos
│   ├── rin_sithpong_photo.png
│   ├── KOL_SARAVUTH_Photo.jpg
│   └── SAT_SOLINA_Photo.jpg
├── Resume_RIN_SITHPONG.pdf              # Original resume document (PDF)
├── Resume_RIN_SITHPONG.docx             # Original resume document (Word)
└── assets/
    ├── documents/
    │   └── Resume_RIN_SITHPONG.pdf      # Downloadable resume
    ├── mentors/
    │   ├── KOL_SARAVUTH_Photo.jpg       # Referee photo: Kol Saravuth
    │   └── SAT_SOLINA_Photo.jpg         # Referee photo: Sat Solina
    ├── profile/
    │   └── rin_sithpong_photo.png       # Profile portrait
    └── projects/
        ├── stem_physics_sim.svg         # Project 1 illustration
        ├── math_question_bank.svg       # Project 2 illustration
        ├── online_learning_hub.svg      # Project 3 illustration
        └── grade_analytics.svg          # Project 4 illustration
```

---

## Customization Guide

### 1. How to Edit Personal Information
Open [index.html](file:///d:/Portfolio/index.html) and search for the respective section:
- **Name & Title**: Search for `<h1 class="hero-name">` and `<h2 class="hero-role">`.
- **About Text**: Search for `<section class="section about-section" id="about">`.
- **Contact Details**: Update the email address, phone number, and Telegram link inside `<section class="section contact-section" id="contact">`.

### 2. How to Add or Modify Projects
1. Navigate to the `<section class="section projects-section" id="projects">` in `index.html`.
2. Duplicate any `<article class="project-card">` block.
3. Update the project title, description, technology tags, and links:
   ```html
   <article class="project-card reveal fade-up">
     <div class="project-image-box">
       <img src="assets/projects/your_project.svg" alt="Project Name" class="project-img" loading="lazy">
     </div>
     <div class="project-body">
       <h3 class="project-title">Your Project Name</h3>
       <p class="project-description">Summary of what this project accomplishes...</p>
       <div class="project-tech-tags">
         <span class="tech-tag">Technology 1</span>
         <span class="tech-tag">Technology 2</span>
       </div>
       <div class="project-actions">
         <a href="https://example.com" class="btn btn-sm btn-primary" target="_blank">Demo</a>
         <a href="https://github.com/..." class="btn btn-sm btn-ghost" target="_blank">GitHub</a>
       </div>
     </div>
   </article>
   ```

### 3. How to Update English & Khmer Translations
All translation text is centralized in [script.js](file:///d:/Portfolio/script.js) inside the `translations` object:
```javascript
const translations = {
  en: {
    hero_name: "RIN SITHPONG",
    hero_role: "Lower Secondary School Teacher specialized in Math & Physics",
    // Add or edit keys here
  },
  km: {
    hero_name: "រិន សិទ្ធិពង្ស",
    hero_role: "គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា",
    // Add or edit keys here
  }
};
```
Any HTML element with `data-i18n="your_key"` will automatically update when the user switches languages.

### 4. How to Change Theme Colors
All colors are configured via CSS custom properties at the top of [style.css](file:///d:/Portfolio/style.css):
```css
:root {
  --primary: #053463;       /* Main brand color (Light mode) */
  --accent: #d97706;        /* Highlight color */
  --background: #f8fafc;    /* Page background */
  --surface: #ffffff;       /* Card background */
  --text: #0f172a;          /* Body text */
}

[data-theme="dark"] {
  --primary: #38bdf8;       /* Main brand color (Dark mode) */
  --background: #0b0f19;    /* Dark page background */
  --surface: #121927;       /* Dark card surface */
  --text: #f1f5f9;          /* Dark body text */
}
```

### 5. How to Add New Images
1. Save your image into the `assets/` subfolder (e.g., `assets/profile/`, `assets/projects/`, or `assets/mentors/`).
2. Update the `src` attribute of the corresponding `<img>` tag in `index.html`.
3. Provide a descriptive `alt` attribute for accessibility.

---

## How to Run Locally

Because this website uses pure HTML, CSS, and vanilla JavaScript without build steps, you can run it immediately:

### Option A: Direct Open
Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Option B: Local HTTP Server (Python)
If you have Python installed, open PowerShell or Terminal in the project root and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## How to Deploy to GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/[your-username]/[your-repo-name].git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
3. Within 1–2 minutes, your website will be live at:
   `https://[your-username].github.io/[your-repo-name]/`

---

## License

&copy; 2026 Rin Sithpong. All rights reserved.
