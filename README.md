 # Medsta — Landing Site

 Medsta is a small Next.js landing site that showcases local healthcare services, WhatsApp-based ordering, and a provider-facing admin area scaffold. This repository focuses on UI, routing, and quick integrations — it is a starting point for a production app.

 ## Tech Stack

 - Next.js (App Router)
 - React + TypeScript
 - Tailwind CSS
 - lucide-react for icons

 ## Quick Start

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

 Default dev server: http://localhost:3000

 ## Useful Scripts

 - `npm run dev` — Start dev server
 - `npm run build` — Create production build
 - `npm start` — Run production build
 - `npm run lint` — Run linter (if configured)

 ## Project Layout (high level)

 - `src/app/` — App Router routes and layouts
   - `src/app/page.tsx` — Landing page (hero, services, features)
   - `src/app/about/page.tsx` — About page
   - `src/app/policies/page.tsx` — Single-page legal policies with anchors
   - `src/app/mlogo.png` — Brand logo used across the site
 - `src/components/ui/` — Reusable UI primitives (button, card, input, etc.)
 - `src/components/dashboard/` — (optional) dashboard UI pieces
 - `src/lib/` — small helpers and provider-context

 ## Notes

 - The landing page includes WhatsApp order links for a lightweight ordering flow.
 - `src/app/policies/page.tsx` provides anchored sections for Terms, Privacy, Payments, Delivery, Returns, and Contact.
 - Several provider/dashboard files have been cleaned or stubbed — search `src/app/provider` and `src/components/dashboard` to review or remove unused stubs.

 ## Contributing

 Feel free to open issues or PRs. Keep changes focused and follow existing code style.

 ## Contact

 For questions or quick feedback, use the project issue tracker or contact the maintainer listed in the repo.

 ---
 _This README was updated to reflect current project structure and quick setup steps._
