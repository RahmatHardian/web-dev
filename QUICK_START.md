# 🚀 nikah.in - Quick Start Guide

## ⚡ Deploy to Vercel in 5 Minutes

### Step 1: Create GitHub Repository (2 min)

1. Go to [github.com/new](https://github.com/new)
2. Name: `nikah-in-landing-page`
3. Visibility: Private
4. Click **Create repository**

### Step 2: Push Your Code (1 min)

```bash
cd "/Users/950124/Library/CloudStorage/OneDrive-PT.TelekomunikasiIndonesia/TELKOM/training/welcome-page"

git init
git add .
git commit -m "Initial commit: nikah.in landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nikah-in-landing-page.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

### Step 3: Deploy to Vercel (2 min)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up with GitHub**
3. Click **Add New Project**
4. Click **Import** on your `nikah-in-landing-page` repository
5. Add environment variables:
   - `VITE_WHATSAPP_PHONE` = `6281234567890` (your number)
   - `VITE_FORMSPREE_ID` = Get from [formspree.io](https://formspree.io)
6. Click **Deploy**

### Step 4: Done! 🎉

Your site is now live at:
`https://nikah-in-landing-page.vercel.app`

---

## 📝 Important Configuration

### Update WhatsApp Number

In Vercel dashboard:
- **Settings** → **Environment Variables**
- Update `VITE_WHATSAPP_PHONE`
- Click **Redeploy**

### Get Formspree ID

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form
4. Copy form ID
5. Add to Vercel environment variables

---

## 🎨 Customize Content

Edit these files before deploying:

| File | What to Update |
|------|----------------|
| `src/data/content.ts` | All text content |
| `src/data/pricing.ts` | Prices and packages |
| `src/data/designs.ts` | Design gallery images |
| `src/data/testimonials.ts` | Customer reviews |
| `tailwind.config.js` | Colors and theme |

---

## 🔄 Update Your Site

After making changes:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel automatically redeploys in ~2 minutes!

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] WhatsApp number is correct in `.env`
- [ ] Formspree account created
- [ ] All content reviewed (pricing, testimonials, etc.)
- [ ] Images are optimized and loading
- [ ] Test locally with `npm run dev`

---

## 📚 Need More Help?

- **Detailed Guide**: [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
- **Setup Guide**: [SETUP.md](SETUP.md)
- **Main README**: [README.md](README.md)

---

## 🆘 Troubleshooting

**Can't push to GitHub?**
```bash
# Make sure you replaced YOUR_USERNAME with your actual GitHub username
git remote -v  # Check your remote URL
```

**Build failing on Vercel?**
- Check environment variables are added
- Make sure `VITE_` prefix is used
- Click **Redeploy** after adding variables

**WhatsApp links not working?**
- Phone number format: `6281234567890` (no spaces, no +)
- Must start with country code (62 for Indonesia)

---

**Happy Deploying! 🎉**
