### Next.js + PostgreSQL (Docker local, Vercel free)

This is a minimal Next.js (App Router) app with a simple Todos feature backed by PostgreSQL.
- Local development uses Docker (Postgres 16-alpine)
- Production on Vercel uses a managed Postgres (e.g. Vercel Postgres/Neon free tier)

#### Quickstart (Local)
1. Copy envs:
```bash
cp .env.example .env.local
```
2. Start Postgres with Docker:
```bash
docker compose up -d
```
3. Install deps and run dev server:
```bash
npm install
npm run dev
```
4. Open http://localhost:3000

The first request will create the `todos` table automatically.

#### Deploy to Vercel (Free)
1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Add Environment Variables in Vercel Project Settings:
   - `DATABASE_URL` = your managed Postgres URL (e.g., Neon or Vercel Postgres)
   - `DATABASE_SSL` = `true`
4. Set Build Command: `npm run build` and Output Directory: `.next` (defaults).
5. Deploy. On first API call, the schema will be created.

#### Notes
- For Neon: enable connection string with `?sslmode=require` or set `DATABASE_SSL=true` (already handled here).
- The app uses `pg` and a shared Pool. Schema is created lazily.