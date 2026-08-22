# Elle Trivia Muhoza Website

Official platform for **Elle Trivia Muhoza**, Miss World Uganda.

## Edit The Site

1. Main page order: `src/app/page.tsx`
2. Core copy, links, and downloads: `src/lib/event.ts`
3. Hero: `src/components/hero.tsx`
4. Purpose/story: `src/components/advocacy.tsx`
5. Projects: `src/components/project-portfolio.tsx`
6. Book and downloads: `src/components/book-launch.tsx` and `src/components/resources.tsx`

## Uploaded Files

Public PDFs live in `public/docs/` and are served directly by Vercel:

1. `elles-kindness-club.pdf`
2. `elle-muhoza-profile-2026.pdf`

## Local Commands

```bash
npm run dev
npm run lint
npm run build
```

## Deploy

The project is linked to Vercel project `elle-muhoza-webapp` under
`hsf-j-globals-projects`. Pushes to `main` deploy through GitHub, or deploy
manually with:

```bash
npx vercel@latest deploy --prod --scope hsf-j-globals-projects --yes
```
