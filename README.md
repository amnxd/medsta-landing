# Medsta - Healthcare Platform

A modern healthcare platform for Tier 2 and Tier 3 Indian cities. Built with Next.js 15, React 19, Tailwind CSS, and ShadCN UI.

## Features

### Landing Page

- Modern, responsive design
- Service showcase
- WhatsApp integration for easy ordering
- Provider partnership CTA
- Testimonials section

### Provider Dashboard

- **Dashboard Home**: Overview with stats, quick actions, and upcoming schedule
- **My Profile**: Manage public-facing information
- **My Services**: Add, edit, and toggle services
- **My Posts**: Create and manage posts visible to patients
- **Orders/Requests**: WhatsApp-based order management
- **Payments**: Payment information and methods
- **Settings**: Notification preferences and account security
- **Terms & Policies**: Legal documents and agreements

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Components**: ShadCN UI (Radix UI primitives)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   ├── policies/
│   │   └── page.tsx          # Terms and policies page
│   └── provider/
│       └── dashboard/
│           ├── layout.tsx    # Dashboard layout with sidebar
│           ├── page.tsx      # Dashboard home
│           ├── profile/      # Profile management
│           ├── services/     # Services management
│           ├── posts/        # Posts management
│           ├── orders/       # Orders placeholder
│           ├── payments/     # Payments placeholder
│           ├── settings/     # Settings page
│           └── terms/        # Terms & policies
├── components/
│   ├── dashboard/            # Dashboard-specific components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── welcome-banner.tsx
│   │   ├── dashboard-home.tsx
│   │   ├── my-profile.tsx
│   │   ├── my-posts.tsx
│   │   ├── my-services.tsx
│   │   ├── orders.tsx
│   │   ├── payments.tsx
│   │   ├── settings.tsx
│   │   └── terms-policies.tsx
│   └── ui/                   # ShadCN UI components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       ├── switch.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
└── lib/
    ├── provider-context.tsx  # Provider state management
    ├── types.ts              # TypeScript types
    └── utils.ts              # Utility functions
```

## Routes

| Route                          | Description             |
| ------------------------------ | ----------------------- |
| `/`                            | Landing page            |
| `/policies`                    | Terms and policies      |
| `/provider/dashboard`          | Provider dashboard home |
| `/provider/dashboard/profile`  | Profile management      |
| `/provider/dashboard/services` | Services management     |
| `/provider/dashboard/posts`    | Posts management        |
| `/provider/dashboard/orders`   | Orders (placeholder)    |
| `/provider/dashboard/payments` | Payments (placeholder)  |
| `/provider/dashboard/settings` | Settings                |
| `/provider/dashboard/terms`    | Terms & policies        |

## Adding Firebase (Future)

The project is structured to easily integrate Firebase:

1. Install Firebase:

   ```bash
   npm install firebase
   ```

2. Create `src/lib/firebase.ts` with your config

3. Replace the mock data in `provider-context.tsx` with Firestore queries

4. Add authentication to protect dashboard routes

## License

Copyright © 2026 Medsta. All rights reserved.
