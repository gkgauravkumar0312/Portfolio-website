# Premium Developer Portfolio

A world-class, production-ready portfolio for a Computer Science Engineering
student — built with the modern web stack and a premium glassmorphism design.

## ✨ Features

- **Next.js 14 (App Router)** + **React 18** + **TypeScript**
- **Tailwind CSS** design system with dark/light mode (`next-themes`)
- **Framer Motion** animations (fade, slide, scale, scroll-reveal, stagger)
- Premium **glassmorphism** UI, animated gradient background & particle canvas
- **Custom cursor**, **mouse-follow glow**, **scroll progress bar**,
  **scroll-to-top**, and an intro **loading screen**
- **GitHub API** integration (repos, followers, stars, languages, contribution graph)
- **LeetCode stats** integration (total / easy / medium / hard solved)
- **EmailJS** contact form
- Fully **responsive**, **accessible** (semantic HTML, ARIA, keyboard nav,
  skip link, reduced-motion support) and **SEO-optimized**
  (metadata, Open Graph image, JSON-LD, sitemap, robots, manifest)
- Custom **404 page**

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🛠️ Make it yours

Almost everything is driven from a single config file:

- **`src/lib/data.ts`** — your name, roles, socials, about, education, skills,
  experience, projects, achievements, certificates, and your **GitHub / LeetCode
  usernames**. Edit this first.
- **`public/`** — replace the placeholder assets:
  - `avatar.svg` — your profile photo (any image; update `siteConfig.avatar`)
  - `resume.pdf` — your real resume
  - `projects/*` and `certificates/*` — project & certificate images
- **`.env.local`** — EmailJS keys (contact form) and an optional GitHub token.

## 🔌 Integrations

| Integration | Where to configure |
| ----------- | ------------------ |
| GitHub      | `usernames.github` in `src/lib/data.ts` (+ optional `GITHUB_TOKEN`) |
| LeetCode    | `usernames.leetcode` in `src/lib/data.ts` |
| EmailJS     | `NEXT_PUBLIC_EMAILJS_*` in `.env.local` |

Stats fall back to sample data if a username isn't set or an API is unavailable,
so the site always looks complete.

## 📦 Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

## ▲ Deploy on Vercel

Push to GitHub, import the repo on [Vercel](https://vercel.com), add the
environment variables from `.env.example`, and deploy. That's it.

## 🧱 Project structure

```
src/
  app/            # routes, layout, metadata, sitemap/robots/manifest, API routes
  components/
    effects/      # cursor, particles, glow, scroll progress, loading screen…
    layout/       # navbar, footer
    sections/     # hero, about, skills, experience, projects, dsa, github…
    seo/          # JSON-LD structured data
    ui/           # reusable primitives (button, card, section, counter)
  hooks/          # useTypingEffect
  lib/            # data (config), motion variants, utils
```
