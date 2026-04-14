# Jasthi Hima Charan Chowdary — Portfolio

> A modern, dark-mode portfolio built with Vanilla JS + Vite featuring glassmorphism UI, particle animations, a typewriter effect, and scroll-triggered reveals.

**Live Site → [himacharancc.github.io/portfolio](https://himacharancc.github.io/portfolio)** *(connect GitHub Pages to activate)*

---

## ✨ Features

| Feature | Detail |
|---|---|
| 🌑 Dark glassmorphism UI | Translucent cards with blur + neon-cyan / purple accents |
| 🌊 Particle canvas | 90 floating particles rendered via HTML5 Canvas |
| ⌨️ Typewriter roles | Six rotating role phrases with cursor blink |
| 📈 Animated counters | Stats count up when scrolled into view |
| 🔭 Scroll-spy nav | Active nav link highlights on section entry |
| 🎞️ Staggered reveals | Cards fade/slide in with cascading delays |
| 🖱️ Cursor glow | Radial gradient follows the mouse pointer |
| 📱 Fully responsive | Mobile hamburger menu, fluid grids via CSS `auto-fit` |
| ♿ Accessible | Semantic HTML5, ARIA labels, `prefers-reduced-motion` friendly |

---

## 🗂️ Sections

1. **Hero** — Name, animated roles, CTA buttons, key stats
2. **About** — Bio, quick-info cards (university, status, CGPA)
3. **Skills** — 6 categorised skill cards with 40+ tags
4. **Experience** — Timeline (CloudOdyssey SFDC Internships × 2)
5. **Projects** — Cards with metrics (F1 score, accuracy, dataset)
6. **Education** — Academic journey with year badges
7. **Certifications** — Oracle, Azure AI-900, Salesforce Admin + Leadership

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/HimaCharanChowdary/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local dev server (http://localhost:5173)
npm run dev

# Build for production (output → /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Deploy to GitHub Pages

```bash
# Install the gh-pages helper (one-time)
npm install --save-dev gh-pages

# Add to package.json → "scripts":
#   "deploy": "npm run build && npx gh-pages -d dist"

npm run deploy
```

Then in your GitHub repo → **Settings → Pages → Source: gh-pages branch**.

---

## 🗃️ Project Structure

```
portfolio/
├── index.html          # Semantic HTML, all sections
├── style.css           # Full CSS design system (no frameworks)
├── main.js             # Particles, typewriter, counters, interactions
├── public/             # Static assets (favicon, images)
├── dist/               # Production build output (git-ignored)
└── package.json
```

---

## 📬 Contact

| | |
|---|---|
| **Email** | himacharan.cc@gmail.com |
| **LinkedIn** | [hima-charan-chowdary](https://www.linkedin.com/in/hima-charan-chowdary) |
| **GitHub** | [HimaCharanChowdary](https://github.com/HimaCharanChowdary) |
| **LeetCode** | [himacharancc](https://leetcode.com/himacharancc) |

---

<p align="center">Built with ❤️ · Vanilla JS + Vite · No CSS frameworks</p>
