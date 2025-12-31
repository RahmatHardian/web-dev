# nikah.in - Setup Guide

Complete setup guide for the nikah.in wedding invitation landing page.

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

### Installation Steps

1. **Navigate to the project directory:**

```bash
cd "/Users/950124/Library/CloudStorage/OneDrive-PT.TelekomunikasiIndonesia/TELKOM/training/welcome-page"
```

2. **Install dependencies:**

```bash
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- React Hook Form + Zod
- And more...

3. **Configure environment variables:**

Edit the `.env` file and update your WhatsApp phone number and Formspree ID:

```env
VITE_WHATSAPP_PHONE=6281234567890  # Your WhatsApp number
VITE_FORMSPREE_ID=your-form-id      # Get from formspree.io
```

To get a Formspree ID:
- Go to https://formspree.io
- Sign up for free
- Create a new form
- Copy the form ID

4. **Start the development server:**

```bash
npm run dev
```

The site will be available at http://localhost:5173

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Update WhatsApp Number

Edit `.env`:
```env
VITE_WHATSAPP_PHONE=6281234567890  # Your number
```

### 2. Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ffc0d0',  // Change this
  },
  secondary: {
    500: '#a8dadc',  // Change this
  },
}
```

### 3. Update Content

All content is in `src/data/content.ts`. Edit:
- Headlines
- Descriptions
- Button text
- Footer text

### 4. Modify Pricing

Edit `src/data/pricing.ts`:

```typescript
{
  name: 'Paket Akad',
  price: 150000,        // Change price
  features: [...],      // Add/remove features
}
```

### 5. Add/Remove Designs

Edit `src/data/designs.ts`:

```typescript
{
  id: 'elegant-1',
  title: 'Golden Elegance',
  category: 'elegant',
  thumbnail: 'your-image-url',  // Update image
}
```

### 6. Update Testimonials

Edit `src/data/testimonials.ts`:

```typescript
{
  name: 'Rina & Andi',
  city: 'Jakarta',
  quote: 'Your quote here',
  photo: 'photo-url',
}
```

## 🎯 Features Checklist

- ✅ **10 Sections**: Hero, Trust, Designs, Features, How It Works, Pricing, Testimonials, Final CTA
- ✅ **WhatsApp Integration**: All CTAs open WhatsApp with pre-filled messages
- ✅ **Design Gallery**: Filterable by 5 categories (Elegant, Minimal, Islami, Adat, Modern)
- ✅ **Interactive Pricing**: 3 packages with comparison
- ✅ **RSVP Form**: Working form with validation (uses Formspree)
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Sticky WhatsApp Button**: Mobile floating action button
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Card
- ✅ **Smooth Animations**: Framer Motion + Tailwind animations
- ✅ **Type Safe**: Full TypeScript support

## 📱 Mobile Features

- Sticky WhatsApp button (bottom right)
- Mobile-optimized navigation
- Touch-friendly buttons (48px minimum)
- Responsive images with lazy loading
- One-column layout for easy scrolling

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   ├── common/          # Common components (Section, Container, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── features/        # Feature components (WhatsAppLink, DesignGallery, etc.)
│   └── sections/        # Page sections (Hero, Pricing, etc.)
├── data/                # Mock data and content
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── styles/              # Global styles
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run build && npm run deploy
```

## 🔐 Environment Variables

Required variables in `.env`:

- `VITE_WHATSAPP_PHONE` - Your WhatsApp business number
- `VITE_FORMSPREE_ID` - Your Formspree form ID

Optional variables:
- `VITE_EMAILJS_SERVICE_ID` - If using EmailJS instead
- `VITE_EMAILJS_TEMPLATE_ID` - If using EmailJS
- `VITE_EMAILJS_USER_ID` - If using EmailJS

## 🐛 Troubleshooting

### Issue: npm install fails

**Solution**: Make sure you have Node.js 18+ installed. Try:
```bash
npm cache clean --force
npm install
```

### Issue: Images not loading

**Solution**: Make sure image URLs are accessible. For local images, place them in `public/images/` and reference as `/images/your-image.jpg`

### Issue: WhatsApp links not working

**Solution**:
1. Check `.env` file has correct phone number format (no spaces, dashes, or + symbol)
2. Use format: `6281234567890` (country code + number)

### Issue: Form submissions not working

**Solution**:
1. Create a Formspree account at https://formspree.io
2. Create a new form
3. Copy the form ID
4. Update `VITE_FORMSPREE_ID` in `.env`

## 📊 Performance Optimization

The project is already optimized with:
- Code splitting (React.lazy for modals)
- Lazy loading images
- Optimized bundle size with tree-shaking
- CSS purging in production
- Compressed assets

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📞 Support

For issues or questions:
1. Check this setup guide
2. Review the code comments
3. Check the [Vite documentation](https://vitejs.dev)
4. Check the [React documentation](https://react.dev)

## 📝 License

MIT License - Feel free to use this project for your own purposes.

---

**Happy Building! 🎉**
