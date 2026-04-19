Next.js portfolio template using [shadcn/ui](https://ui.shadcn.com/) and [Magic UI](https://magicui.design/).

## Customize

1. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` if you use the contact form.
2. Edit **[`src/data/data.ts`](./src/data/data.ts)** — name, bio, work, education, projects, skills, and social links.
3. Replace or add blog posts as **`.mdx`** files under [`content/`](./content/).
4. Put static assets (avatar, logos, screenshots) in **`public/`** and reference them from `data.ts` (for example `/me.png`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, MDX-based blog.
