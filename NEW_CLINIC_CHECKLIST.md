# New Clinic Onboarding Checklist

Use this checklist when setting up the website for a new clinic client.

## 📋 Pre-Setup (Client Information Gathering)

- [ ] **Clinic name** and tagline
- [ ] **Category**: dental / physio / skin
- [ ] **Year established**
- [ ] **Phone number** (with country code)
- [ ] **WhatsApp number** (digits only, e.g., `919876543210`)
- [ ] **Email address**
- [ ] **Full address** (line1, line2, area, pincode)
- [ ] **Google Maps URL** (search the clinic on maps, copy the share link)
- [ ] **Google Maps Embed URL** (from Google Maps → Share → Embed → copy `src`)
- [ ] **Clinic hours** (day ranges + times)
- [ ] **Brand colors** (or use preset: teal for dental, blue for physio, rose for skin)
- [ ] **Logo image** (SVG preferred, or use text logo)
- [ ] **Services list** (3–8 services with title, description, icon, price range)
- [ ] **Doctor details** (name, qualifications, experience, bio, specializations, languages, photo)
- [ ] **Patient testimonials** (3–6 with name, rating, text, source)
- [ ] **Clinic stats** (patients served, Google rating, review count, years experience)
- [ ] **Social media URLs** (Instagram, Facebook, YouTube — optional)
- [ ] **SEO keywords** (5–10 relevant keywords)
- [ ] **Client's desired domain name**

## 🔧 Setup Steps

### 1. Clone & Configure

- [ ] Clone the template repository
- [ ] Run `npm install`
- [ ] Open `src/config/clinic.ts`
- [ ] Update ALL config fields with client data

### 2. Branding

- [ ] Set `brand.primaryColor`, `brand.primaryColorDark`, `brand.accentColor`
- [ ] Update colors in `src/styles/global.css` → `@theme` block to match
- [ ] Set `brand.fontHeading` and `brand.fontBody` (update Google Fonts import in `global.css` if different)
- [ ] Add logo image to `public/images/logo.svg` (if provided)
- [ ] Update `brand.logoImage` path in config (or leave empty for text logo)

### 3. Images

- [ ] Replace `public/images/hero-clinic.jpg` (1280×960px, clinic exterior or reception)
- [ ] Replace `public/images/about-clinic.jpg` (1280×960px, clinic interior)
- [ ] Replace `public/images/doctor-1.jpg` (800×1000px, headshot)
- [ ] Replace `public/images/doctor-2.jpg` (and any additional doctor photos)
- [ ] Replace `public/images/gallery-1.jpg` through `gallery-4.jpg`
- [ ] Replace `public/images/og-image.jpg` (1200×630px, social sharing image)
- [ ] Update `public/favicon.svg` with clinic initial/colors
- [ ] Optimize all images (use Squoosh or TinyPNG, target <200KB each)

### 4. Form Setup

- [ ] Create a [Formspree](https://formspree.io) account (free tier)
- [ ] Create a new form and copy the endpoint URL
- [ ] Update `formspreeEndpoint` in `clinic.ts`
- [ ] Test the form submission

### 5. SEO

- [ ] Update `seo.defaultTitle` (format: "Clinic Name | Best [type] in [area]")
- [ ] Update `seo.defaultDescription` (compelling, 150–160 chars)
- [ ] Update `seo.keywords` (5–10 local search terms)
- [ ] Update `seo.siteUrl` to the final domain
- [ ] Update `site` in `astro.config.mjs` to match
- [ ] Update `Sitemap` URL in `public/robots.txt`

### 6. Content Review

- [ ] Review About page text — update clinic story if generic text doesn't fit
- [ ] Review "Why Choose Us" section text on homepage
- [ ] Review certification list on About page
- [ ] Ensure all doctor bios are accurate
- [ ] Verify all prices are correct

## ✅ Pre-Launch Testing

### Functionality

- [ ] Test appointment form submission (verify Formspree receives data)
- [ ] Test thank-you page WhatsApp redirect
- [ ] Test floating WhatsApp button (correct number? correct message?)
- [ ] Test WhatsApp "Book this" links on service cards
- [ ] Test phone number tap-to-call on mobile
- [ ] Test email links
- [ ] Test Google Maps link
- [ ] Test all navigation links (desktop and mobile)
- [ ] Test mobile hamburger menu open/close

### Visual

- [ ] Check homepage on mobile (375px width)
- [ ] Check all pages on tablet (768px width)
- [ ] Check all pages on desktop (1280px+)
- [ ] Verify all images load correctly
- [ ] Verify no layout shifts (images have width/height)
- [ ] Verify sticky header works on scroll
- [ ] Verify footer info is correct

### SEO

- [ ] Check page titles (each page should have unique title)
- [ ] Check meta descriptions
- [ ] Verify JSON-LD structured data (use [Google's Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Verify sitemap.xml is generated (visit /sitemap-index.xml)
- [ ] Verify robots.txt (visit /robots.txt)

## 🚀 Deployment

- [ ] Run `npm run build` (ensure no errors)
- [ ] Check `dist/` folder size (should be < 2MB)
- [ ] Deploy to Netlify or Vercel
- [ ] Set up custom domain
- [ ] Verify SSL certificate is active (https)
- [ ] Test live site on mobile device
- [ ] Share live URL with client for approval

## 📧 Post-Launch

- [ ] Set up analytics (Google Analytics or Plausible) — optional
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Test form submission on live site
- [ ] Send client a "going live" confirmation email
- [ ] Schedule follow-up for review/updates in 2 weeks
