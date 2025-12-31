# 🚀 Vercel Deployment Guide for nikah.in

Complete guide to deploy your nikah.in wedding invitation landing page to Vercel.

## 🌟 Why Vercel?

- ✅ **Zero Configuration**: Automatic detection of Vite framework
- ✅ **Free Hosting**: Generous free tier with custom domains
- ✅ **Instant Deployment**: Deploy in seconds via GitHub integration
- ✅ **Automatic HTTPS**: Free SSL certificates
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Environment Variables**: Easy management via dashboard
- ✅ **Preview Deployments**: Every git push gets a preview URL
- ✅ **Perfect for React**: Built by the creators of Next.js

---

## 📋 Prerequisites

1. A GitHub account (free)
2. A Vercel account (free) - sign up at [vercel.com](https://vercel.com)
3. Your nikah.in project code

---

## 🎯 Deployment Methods

There are **3 ways** to deploy to Vercel. Choose the one that works best for you:

---

## Method 1: GitHub Integration (Recommended) ⭐

This is the **easiest and most powerful** method with automatic deployments.

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository settings:
   - **Name**: `nikah-in-landing-page`
   - **Visibility**: Private (recommended) or Public
   - **DO NOT** initialize with README (we already have files)
4. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open Terminal and run these commands:

```bash
# Navigate to your project
cd "/Users/950124/Library/CloudStorage/OneDrive-PT.TelekomunikasiIndonesia/TELKOM/training/welcome-page"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete nikah.in landing page"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nikah-in-landing-page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. **Sign up with GitHub** (recommended for easy integration)
4. Click **"Add New Project"**
5. Click **"Import Git Repository"**
6. Find your `nikah-in-landing-page` repository
7. Click **"Import"**

### Step 4: Configure Project

Vercel will automatically detect Vite. Just verify these settings:

- **Framework Preset**: Vite (auto-detected)
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

### Step 5: Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_WHATSAPP_PHONE` | `6281234567890` | Production |
| `VITE_FORMSPREE_ID` | `your-actual-form-id` | Production |

**How to get Formspree ID:**
1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy the form ID (looks like `xyzabc123`)

### Step 6: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build
3. 🎉 Your site is live!

### 🌐 Your Live URLs:

After deployment, you'll get:

- **Production URL**: `https://nikah-in-landing-page.vercel.app`
- **Custom Domain** (optional): You can add your own domain later

### 🔄 Automatic Updates:

Every time you push to GitHub, Vercel **automatically rebuilds and deploys**:

```bash
# Make changes to your code
# Then commit and push
git add .
git commit -m "Update pricing"
git push
```

Vercel will automatically deploy the changes in ~2 minutes!

---

## Method 2: Vercel CLI (For Advanced Users)

If you prefer command-line deployment:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Navigate to Project

```bash
cd "/Users/950124/Library/CloudStorage/OneDrive-PT.TelekomunikasiIndonesia/TELKOM/training/welcome-page"
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → nikah-in-landing-page
- **Directory?** → ./ (press Enter)
- **Override settings?** → No

### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## Method 3: Drag & Drop (Quickest for Testing)

For a super quick test deployment:

### Step 1: Build Locally

First, you need Node.js installed. If you don't have it:

**On macOS:**
```bash
# Install Node.js via Homebrew
brew install node

# Or download from: https://nodejs.org
```

Then build:

```bash
cd "/Users/950124/Library/CloudStorage/OneDrive-PT.TelekomunikasiIndonesia/TELKOM/training/welcome-page"
npm install
npm run build
```

This creates a `dist/` folder.

### Step 2: Deploy via Drag & Drop

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Drag the `dist/` folder** onto the upload area
3. Wait 30 seconds
4. 🎉 Your site is live!

**Note:** This method doesn't include environment variables or automatic updates.

---

## 🔧 Post-Deployment Configuration

### Add Custom Domain

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `nikah.in`)
4. Follow DNS configuration instructions
5. Free SSL certificate is automatically generated!

### Update Environment Variables

1. Go to **"Settings"** → **"Environment Variables"**
2. Add or update variables
3. Click **"Redeploy"** to apply changes

### Monitor Performance

- Go to **"Analytics"** to see:
  - Page views
  - Load times
  - Geographic distribution
  - Core Web Vitals

---

## 🎨 Customization Before Deployment

### 1. Update WhatsApp Number

Edit `.env` (for local testing) or add to Vercel environment variables:
```
VITE_WHATSAPP_PHONE=6281234567890
```

### 2. Update Content

Edit these files:
- `src/data/content.ts` - All text content
- `src/data/pricing.ts` - Pricing packages
- `src/data/designs.ts` - Design gallery
- `src/data/testimonials.ts` - Customer testimonials

### 3. Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { 500: '#ffc0d0' },  // Your brand color
  secondary: { 500: '#a8dadc' },
}
```

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error**: `Command "npm run build" exited with 1`

**Solutions**:
1. Check your code for TypeScript errors locally:
   ```bash
   npm run type-check
   ```
2. Ensure all imports are correct (case-sensitive!)
3. Check the build logs in Vercel dashboard

### Environment Variables Not Working

**Error**: WhatsApp links or forms not working

**Solutions**:
1. Make sure variable names start with `VITE_`
2. Click **"Redeploy"** after adding variables
3. Check variables are added to **Production** environment

### Images Not Loading

**Solutions**:
1. Ensure image URLs are absolute (start with `https://`)
2. Use images from CDN (Unsplash, Cloudinary, etc.)
3. Or place images in `public/` folder and reference as `/images/photo.jpg`

---

## 📊 Performance Optimization Tips

Your site is already optimized, but here are extra tips:

1. **Image Optimization**:
   - Use WebP format
   - Compress images before uploading
   - Use CDN URLs (Unsplash automatically optimizes)

2. **Code Splitting**:
   - Already implemented! ✅
   - Large components load on-demand

3. **Caching**:
   - Vercel automatically handles this ✅

4. **Analytics**:
   - Enable Vercel Analytics in project settings
   - Free for hobby projects

---

## 🔒 Security Best Practices

1. **Never commit `.env` to GitHub**
   - Already in `.gitignore` ✅

2. **Use Environment Variables**
   - Store sensitive data in Vercel dashboard ✅

3. **Enable HTTPS Only**
   - Automatically enforced by Vercel ✅

4. **Keep Dependencies Updated**
   ```bash
   npm outdated
   npm update
   ```

---

## 🎯 Recommended Workflow

For the best development experience:

```bash
# 1. Make changes locally
# Edit files in VSCode

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Update feature X"

# 4. Push to GitHub
git push

# 5. Vercel automatically deploys!
# Check your live site in ~2 minutes
```

---

## 📱 Testing Your Deployed Site

After deployment, test these features:

- ✅ All WhatsApp links work correctly
- ✅ Design gallery filtering works
- ✅ Pricing cards display properly
- ✅ RSVP form submits successfully
- ✅ Mobile responsive design
- ✅ All images load
- ✅ Smooth scrolling navigation
- ✅ SEO meta tags (view page source)

---

## 🆘 Need Help?

If you run into issues:

1. **Check Vercel Logs**:
   - Go to your deployment
   - Click **"Functions"** → **"Logs"**

2. **Vercel Documentation**:
   - [Deploying Vite](https://vercel.com/docs/frameworks/vite)
   - [Environment Variables](https://vercel.com/docs/environment-variables)

3. **Common Issues**:
   - Build errors: Run `npm run build` locally first
   - 404 errors: Check your routing configuration
   - Env vars: Redeploy after adding them

---

## 🎉 Success Checklist

After successful deployment:

- [ ] Site is live and accessible
- [ ] WhatsApp number is correct
- [ ] Form submissions working (test it!)
- [ ] All images loading
- [ ] Mobile version looks good
- [ ] Custom domain added (optional)
- [ ] Analytics enabled
- [ ] Performance score 90+ (check with Lighthouse)

---

## 💰 Pricing

**Vercel Free Tier includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Analytics (basic)
- Preview deployments

This is **more than enough** for most landing pages!

---

## 🚀 Next Steps After Deployment

1. **Share Your Site**:
   - Share the Vercel URL with clients
   - Add to your portfolio

2. **Add Custom Domain**:
   - Buy domain from Namecheap, GoDaddy, etc.
   - Connect to Vercel (free SSL included!)

3. **Monitor Traffic**:
   - Enable Vercel Analytics
   - Track visitor behavior

4. **Iterate & Improve**:
   - Collect user feedback
   - Update content regularly
   - A/B test pricing

---

## 📞 Support

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Vercel Discord**: Join the community
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)

---

**Happy Deploying! 🎉**

Your nikah.in landing page is production-ready and optimized for Vercel deployment!
