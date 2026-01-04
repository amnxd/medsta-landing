# Medsta - Healthcare Platform

A modern healthcare platform for Tier 2 and Tier 3 Indian cities. Built with Next.js 15, React 19, Tailwind CSS, and ShadCN UI.

## Features
# Medsta — Local Healthcare Platform

Medsta is a lightweight landing site and provider dashboard scaffold for local healthcare services. It demonstrates a modern Next.js App Router setup with a responsive landing page and a provider-facing dashboard (profile, services, posts, orders, payments, settings).

## Key Features

- Responsive landing page with service showcase and contact CTA
- WhatsApp-based order flow (link integration for quick requests)
- Provider Dashboard: overview, profile management, services, posts, orders, payments, settings, and terms
- Simple component-driven UI (Radix primitives + utility components)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Radix UI primitives, Lucide icons

## Project Structure (important files)

- `src/app/` — App router routes and layouts
  - `src/app/page.tsx` — Landing page
  - `src/app/policies/page.tsx` — Terms & policies
  - `src/app/provider/dashboard/layout.tsx` — Dashboard layout
  - `src/app/provider/dashboard/page.tsx` — Dashboard home
  - `src/app/provider/dashboard/*` — `profile`, `services`, `posts`, `orders`, `payments`, `settings`, `terms`
- `src/components/dashboard/` — Dashboard UI pieces (sidebar, header, sections)
- `src/components/ui/` — Reusable UI primitives (button, input, card, etc.)
- `src/lib/provider-context.tsx` — Provider mock state and helpers

See the code for details in the `src` folder.

## Routes

- `/` — Landing page
- `/policies` — Terms & Policies
- `/provider/dashboard` — Provider dashboard home
- `/provider/dashboard/profile` — Profile
- `/provider/dashboard/services` — Services
- `/provider/dashboard/posts` — Posts
- `/provider/dashboard/orders` — Orders
- `/provider/dashboard/payments` — Payments
- `/provider/dashboard/settings` — Settings
- `/provider/dashboard/terms` — Terms & Policies

## Local Development

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

4. Lint

```bash
npm run lint
```

The app runs on http://localhost:3000 by default.

## Notes & Extensibility

- The dashboard currently uses local mock state (`src/lib/provider-context.tsx`). Replace it with real APIs or Firebase/Firestore for persistence and authentication.
- WhatsApp order links are implemented as lightweight integrations; adapt them to your backend or messaging workflow as needed.

## Contributing

Contributions are welcome — open issues or PRs with focused changes. Keep formatting consistent with TypeScript and Tailwind conventions.

## License

Copyright © 2026 Medsta. All rights reserved.
