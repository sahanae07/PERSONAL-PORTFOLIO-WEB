/* =========================================================
   Design tokens
   ========================================================= */
:root {
  --bg: #0d1117;
  --surface: #161b22;
  --surface-2: #1c2330;
  --border: #2a313c;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --accent: #f2b134;     /* amber - primary accent */
  --accent-2: #5ee6a0;   /* terminal green - secondary accent */
  --danger: #ff6b6b;

  --font-display: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  --radius: 8px;
  --max-width: 1080px;

  color-scheme: dark;
}

[data-theme='light'] {
  --bg: #f6f4ef;
  --surface: #ffffff;
  --surface-2: #fbf9f4;
  --border: #ddd8cd;
  --text: #1c1f24;
  --text-muted: #5d6470;
  --accent: #b9790c;
  --accent-2: #1f8f5e;
  color-scheme: light;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  transition: background 0.2s ease, color 0.2s ease;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

::selection {
  background: var(--accent);
  color: #14171c;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.accent { color: var(--accent); }

/* =========================================================
   Top bar / navigation
   ========================================================= */
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.topbar__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
}

.logo__cursor {
  color: var(--accent);
  animation: blink 1.1s steps(1) infinite;
}

.pathnav {
  display: flex;
  gap: 1.5rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
}

.pathnav a {
  color: var(--text-muted);
  transition: color 0.15s ease;
}

.pathnav a:hover,
.pathnav a:focus-visible {
  color: var(--text);
}

.pathnav__sep {
  color: var(--accent-2);
}

.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.theme-toggle:hover {
  border-color: var(--accent);
}

.theme-toggle__icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 2px transparent;
  transition: background 0.2s ease;
}

[data-theme='light'] .theme-toggle__icon {
  background: var(--accent-2);
}

@media (max-width: 640px) {
  .pathnav { display: none; }
}

/* =========================================================
   Hero
   ========================================================= */
.hero {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4.5rem 1.5rem 3.5rem;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.eyebrow {
  font-family: var(--font-display);
  color: var(--accent-2);
  font-size: 0.85rem;
  text-transform: lowercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

.hero__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
}

.hero__lead {
  color: var(--text-muted);
  max-width: 38ch;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.hero__cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.8rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn--primary {
  background: var(--accent);
  color: #14171c;
}

.btn--primary:hover {
  background: color-mix(in srgb, var(--accent) 88%, white 12%);
}

.btn--ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* --- Terminal mockup --- */
.terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 20px 60px -30px rgba(0, 0, 0, 0.6);
  font-family: var(--font-display);
  font-size: 0.85rem;
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.9rem;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}

.terminal__dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
}

.terminal__dot--red { background: #ff5f56; }
.terminal__dot--yellow { background: #ffbd2e; }
.terminal__dot--green { background: #27c93f; }

.terminal__title {
  margin-left: 0.5rem;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.terminal__body {
  padding: 1.25rem;
  min-height: 220px;
}

.terminal__body p {
  margin-bottom: 0.4rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.prompt {
  color: var(--accent-2);
}

.path {
  color: var(--accent);
}

.cursor {
  display: inline-block;
  animation: blink 1s steps(1) infinite;
}

.terminal__output {
  margin-top: 0.6rem;
  color: var(--text-muted);
}

.terminal__output p {
  margin-bottom: 0.25rem;
}

.terminal__output .ok {
  color: var(--accent-2);
}

.terminal__next {
  margin-top: 0.75rem;
  color: var(--text);
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 3rem;
  }
}

/* =========================================================
   Sections (shared)
   ========================================================= */
.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  border-top: 1px solid var(--border);
}

.section__head {
  margin-bottom: 2.5rem;
  max-width: 60ch;
}

.section__head h2 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section__sub {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* --- About --- */
.about__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.about__text {
  color: var(--text-muted);
}

@media (max-width: 720px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}

/* --- Projects --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.project-card__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-card__badge {
  font-size: 0.65rem;
  font-family: var(--font-display);
  color: var(--accent-2);
  border: 1px solid var(--accent-2);
  border-radius: 999px;
  padding: 0.1rem 0.5rem;
  text-transform: lowercase;
}

.project-card__desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
}

.tech-chip {
  font-family: var(--font-display);
  font-size: 0.72rem;
  color: var(--text-muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
}

.project-card__links a {
  color: var(--accent);
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.project-card__links a:hover {
  border-color: var(--accent);
}

/* --- Skills --- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.skills-category h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--accent-2);
  margin-bottom: 1rem;
  text-transform: lowercase;
}

.skill-row {
  margin-bottom: 0.9rem;
}

.skill-row__label {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.35rem;
}

.skill-row__bar {
  height: 6px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.skill-row__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-2), var(--accent));
  border-radius: 4px;
}

/* --- Status messages --- */
.status-msg {
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 0.9rem;
}

.status-msg--error {
  color: var(--danger);
}

/* =========================================================
   Contact
   ========================================================= */
.contact-form {
  display: grid;
  gap: 1.25rem;
  max-width: 540px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.field input,
.field textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.7rem 0.9rem;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  resize: vertical;
  transition: border-color 0.15s ease;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--accent);
}

.contact-status {
  font-family: var(--font-display);
  font-size: 0.85rem;
  min-height: 1.2em;
}

.contact-status--ok { color: var(--accent-2); }
.contact-status--error { color: var(--danger); }

/* =========================================================
   Footer
   ========================================================= */
.footer {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
}

.footer__links {
  display: flex;
  gap: 1.25rem;
  font-family: var(--font-display);
}

.footer__links a:hover {
  color: var(--accent);
}

/* =========================================================
   Reduced motion
   ========================================================= */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .logo__cursor,
  .cursor {
    animation: none;
  }
}
