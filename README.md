# nikah.in - Landing Page

Modern wedding invitation landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Carousel**: Embla Carousel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Update `.env` with your WhatsApp number and Formspree ID

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, StickyWhatsAppButton
│   ├── sections/        # Hero, Features, Pricing, etc.
│   ├── features/        # Interactive components
│   ├── ui/              # Reusable UI components
│   └── common/          # Common components
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── types/               # TypeScript types
├── data/                # Mock data
├── styles/              # Global styles
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Features

- ✅ Responsive mobile-first design
- ✅ WhatsApp integration for CTAs
- ✅ Interactive design gallery with filtering
- ✅ Pricing package selector
- ✅ RSVP form with validation
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ SEO optimized
- ✅ TypeScript for type safety

## Deployment

### 🚀 Vercel (Recommended)

**The easiest and best way to deploy this site!**

See detailed deployment guide: [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

**Quick Start:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click!

**Benefits:**
- ✅ Zero configuration
- ✅ Automatic HTTPS & CDN
- ✅ Free hosting
- ✅ Auto-deploy on git push
- ✅ Environment variable management
- ✅ Preview deployments

### Alternative: Netlify

1. Build: `npm run build`
2. Deploy the `dist/` folder to Netlify

## License

MIT
