# xbrocoder Portfolio — React + Tailwind

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          ← Entry point
    ├── App.jsx           ← Root component
    ├── index.css         ← Global styles + Tailwind
    ├── assets/
    │   └── photo.js      ← Your photo (base64 embedded)
    ├── hooks/
    │   └── useReveal.js  ← Scroll reveal hook
    └── components/
        ├── Cursor.jsx        ← Custom cursor + ring
        ├── ScrollProgress.jsx← Top progress bar
        ├── FloatingCode.jsx  ← Floating code symbols
        ├── Navbar.jsx        ← Fixed navigation
        ├── Terminal.jsx      ← Typing terminal animation
        ├── Hero.jsx          ← Hero section
        ├── About.jsx         ← About + skill bars
        ├── Projects.jsx      ← Project cards grid
        ├── Contact.jsx       ← Contact form
        ├── Footer.jsx        ← Footer
        └── Divider.jsx       ← Section divider
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 🎨 Customisation

| Thing            | Where to edit                        |
|------------------|--------------------------------------|
| Your photo       | `src/assets/photo.js`                |
| Nav links        | `src/components/Navbar.jsx`          |
| Hero text        | `src/components/Hero.jsx`            |
| Terminal lines   | `src/components/Terminal.jsx`        |
| About bio        | `src/components/About.jsx`           |
| Skill bars       | `src/components/About.jsx` → SKILLS  |
| Projects list    | `src/components/Projects.jsx` → PROJECTS |
| Social links     | `src/components/Contact.jsx` → SOCIALS   |
| Colors / fonts   | `tailwind.config.js`                 |
| Global CSS       | `src/index.css`                      |

## 🛠 Tech Stack

- **React 18** — component-based UI
- **Tailwind CSS 3** — utility-first styling
- **Vite** — lightning-fast dev server & build tool
