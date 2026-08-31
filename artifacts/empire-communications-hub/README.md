# Empire Communications Hub — Website

Full production codebase: public marketing site, Employee Workspace, and Admin
Dashboard, all backed by a live Supabase project.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack) — chosen for server rendering (SEO) on public pages
- **Tailwind CSS** — design tokens for the brand system (Ink Navy / Hub Blue / Spoke Cyan)
- **Supabase** — Postgres database, Auth, Storage (resumes), Edge Functions
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The `.env.local` file already contains the live
Supabase project's URL and public (anon) key — no setup needed for the
database itself.

> **First run needs internet access** so Next.js can fetch Space Grotesk, IBM
> Plex Sans and IBM Plex Mono from Google Fonts and self-host them. This is
> normal for any Next.js project using `next/font/google` and only happens
> during build — nothing loads from Google at runtime for your visitors.

## What's already live in Supabase

- All 11 tables (`profiles`, `enquiries`, `jobs`, `job_applications`,
  `attendance`, `leave_requests`, `goals`, `training_logs`, `services`,
  `departments`, `content_blocks`) with Row-Level Security policies matching
  the role model (Employee sees only their own data + assigned enquiries;
  Admin sees everything; public tables are publicly readable, admin-writable).
- A private `resumes` storage bucket for job application uploads.
- `services` and `departments` are seeded with real draft copy for the 5
  confirmed BPO service lines — edit anytime from **Admin → Content**.
- `jobs` is intentionally empty — post real openings from **Admin → Jobs**.

## One manual step: deploying the employee-invite Edge Function

Registering a new employee (Admin → Employees → Register Employee) calls a
Supabase Edge Function (`create-employee`) that securely creates their login
using the service-role key — a key that must never reach the browser, so it
has to run as a deployed server function rather than client-side code.

The function's source is ready at `supabase/functions/create-employee/index.ts`.
To deploy it:

```bash
npx supabase login
npx supabase link --project-ref denxqaldjtbfcjsxipqx
npx supabase functions deploy create-employee
```

Everything else in the app works immediately without this step — it only
affects the "Register Employee" button specifically.

## Project structure

```
src/
  app/
    (public)/        Home, About, Services, Departments, Careers, Contact, legal
    employee/        Employee Workspace (login, dashboard, leads, attendance, leave, performance, training, profile)
    admin/           Admin Dashboard (overview, enquiries, jobs, employees, content)
  components/        Organized by feature (home/, careers/, employee/, admin/, dashboard/, ui/, layout/, auth/)
  lib/
    supabase/        Browser + server Supabase client factories
    types.ts         Hand-written types matching the live schema
  proxy.ts           Session refresh + convenience redirects (not the security boundary — see below)
supabase/
  functions/create-employee/   The Edge Function described above
```

## How access control works

Three layers, deliberately redundant:

1. **`proxy.ts`** refreshes the session cookie and redirects signed-out
   visitors away from `/employee` and `/admin` for a smooth experience —
   convenience only.
2. **Each area's `layout.tsx`** re-checks the session (and role, for Admin)
   server-side before rendering anything. This is the real gate.
3. **Postgres Row-Level Security** enforces who can read/write which rows no
   matter what the application code does. Even a bug in (1) or (2) couldn't
   expose another user's data.

## Known scope for a fast follow-up

- Legal pages (Privacy Policy, Terms) are a reasonable starting draft, not
  legal advice — have them reviewed before relying on them.
- Company registration details, team bios, and testimonials are left out
  until you confirm them — nothing invented gets displayed.
- The Manager role currently reuses Admin access, as agreed — a dedicated
  Manager-only view can be added later without restructuring anything.
