# Vivek Koundal — Portfolio

A cinematic, scroll-driven developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The page uses a full-screen Tokyo skyline video as its backdrop, with the video scrubbed by scroll position while portfolio scenes transition in the foreground.

## Features

- Scroll-scrubbed, full-screen video background with a final skyline reveal
- Animated scene transitions for the intro, about section, projects, skills, and contact links
- Responsive layout with reduced-motion-aware text animations
- Featured projects linked to their source repositories and live demos
- Profile photo in the About scene
- GitHub and LinkedIn contact links

## Tech stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS 3
- Lucide React icons

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create an optimized production build and run it locally:

```bash
npm run build
npm start
```

## Portfolio content

The main page and its scene sequence are in [`app/page.tsx`](./app/page.tsx). Update the profile text, project data, skills, links, and scene order there.

Replace `public/profile.jpg` to change the portrait used in the About scene. The skyline video and matching final-frame cutout are loaded from the existing `cdn.21st.dev` asset URLs in the page and hero component.

Global styles and scene entrance animations are in [`app/globals.css`](./app/globals.css). Tailwind theme settings are in [`tailwind.config.js`](./tailwind.config.js).

## Project structure

```text
app/
  globals.css                 Global styles and scene animations
  layout.tsx                  Root layout and page metadata
  page.tsx                    Scroll-driven portfolio scenes
components/
  ui/
    sunset-skyline-hero.tsx   Reusable skyline hero component
public/
  profile.jpg                Profile photo
```

## Deployment

### Deploy to Vercel

1. Push this repository to GitHub and import it into [Vercel](https://vercel.com/new).
2. Keep the root directory set to `./` and select the Next.js framework preset.
3. Use the default install and build settings (`npm install` and `npm run build`). Vercel detects the Next.js output automatically; do not set a custom output directory.
4. No environment variables are required for the current portfolio.

The project requires Node.js 20.9 or later, as declared in `package.json`. Vercel can deploy from every push to the connected branch and create preview deployments for pull requests.

Before deploying, the production build can be checked locally with:

```bash
npm ci
npm run build
```

## Links

- [GitHub](https://github.com/koundalvivek073-dotcom)
- [LinkedIn](https://www.linkedin.com/in/vivek-koundal-977b42332/)
