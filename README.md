# Clinic Website Template

A production-ready, config-driven static website template for dental, physiotherapy, and skin clinics in India. Built with **Astro 6**, **Tailwind CSS v4**, and **TypeScript**. Customize for any clinic by editing a single config file.

## ✨ Features

- **Single-file configuration** — All clinic data lives in `src/config/clinic.ts`
- **6 optimized pages** — Home, About, Services, Doctors, Contact, Thank You
- **Mobile-first design** — 70%+ traffic-ready, tested at 375px
- **WhatsApp integration** — Floating button + service-specific booking links
- **Appointment form** — Formspree-powered with Indian phone validation
- **SEO-ready** — Meta tags, Open Graph, JSON-LD schema, auto-generated sitemap
- **Fast** — Static HTML output, no client-side framework, lazy-loaded images
- **Accessible** — Proper ARIA labels, focus states, semantic HTML

## 🚀 Quick Start

### Prerequisites

- **Node.js 22+** (required by Astro 6)
- **npm** (comes with Node)

### Install

```bash
git clone <this-repo> clinic-site
cd clinic-site
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

Static files are generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customizing for a New Clinic

### Step 1: Edit the Config File

Open `src/config/clinic.ts` and update ALL fields:

```typescript
export const clinic = {
  name: "Your Clinic Name",
  tagline: "Your clinic tagline",
  category: "dental",        // "dental" | "physio" | "skin"
  phone: "+91 98765 43210",
  whatsapp: "919876543210",   // Digits only, with country code
  // ... rest of config
};
```

**Key fields to change:**
1. `name`, `tagline`, `category`
2. `phone`, `whatsapp`, `email`
3. `address` (all fields including mapsUrl and embedSrc)
4. `hours`
5. `brand` (colors, fonts, logo)
6. `services` (title, description, icon, priceRange)
7. `doctors` (name, qualifications, experience, bio, photo)
8. `testimonials`
9. `stats`
10. `formspreeEndpoint` (see Step 3)
11. `seo` (title, description, keywords, siteUrl)
12. `social` (Instagram, Facebook, YouTube URLs)

### Step 2: Swap Images

Replace all images in `public/images/`:

| File | Purpose | Recommended Size |
|------|---------|-----------------|
| `hero-clinic.jpg` | Hero section background | 1280×960px |
| `doctor-1.jpg` | First doctor headshot | 800×1000px |
| `doctor-2.jpg` | Second doctor headshot | 800×1000px |
| `about-clinic.jpg` | About page feature image | 1280×960px |
| `gallery-1.jpg` to `gallery-4.jpg` | About page gallery | 600×450px each |
| `og-image.jpg` | Social sharing preview | 1200×630px |
| `favicon.svg` | Browser tab icon | 32×32px SVG |

**Tips:**
- Optimize images with [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Use WebP format for better compression
- Keep individual images under 200KB

### Step 3: Set Up Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the form endpoint (e.g., `https://formspree.io/f/xPqRsTuV`)
4. Paste it in `clinic.ts` → `formspreeEndpoint`

### Step 4: Update Astro Config

Open `astro.config.mjs` and change the `site` URL:

```javascript
export default defineConfig({
  site: 'https://your-clinic-domain.com',
  // ...
});
```

### Step 5: Update robots.txt

Open `public/robots.txt` and update the Sitemap URL.

### Step 6: Build and Deploy

```bash
npm run build
```

## 🌐 Deploying

### Netlify (Recommended)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Done! Your site is live.

**Option B: Git Integration**
1. Push your code to GitHub/GitLab
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → "New Project"
3. Import your repository
4. Framework preset: **Astro**
5. Deploy!

### Custom Domain Setup

1. Buy a domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Hostinger](https://hostinger.com)
2. In Netlify/Vercel dashboard → Domain settings → Add custom domain
3. Point your domain's DNS (CNAME or A records) as instructed
4. SSL is automatically enabled

## 📊 Adding Analytics (Optional)

### Google Analytics

Add this to `BaseLayout.astro` in the `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-Friendly)

```html
<script defer data-domain="your-clinic.com" src="https://plausible.io/js/script.js"></script>
```

## 🏗️ Project Structure

```
clinic-site/
├── src/
│   ├── config/
│   │   └── clinic.ts          # ALL clinic-specific data
│   ├── components/
│   │   ├── Header.astro       # Sticky nav with phone + Book Now
│   │   ├── Footer.astro       # Contact, links, hours, social
│   │   ├── Hero.astro         # Hero with CTAs and rating badge
│   │   ├── ServiceCard.astro  # Service with WhatsApp booking
│   │   ├── DoctorCard.astro   # Doctor bio card
│   │   ├── TestimonialCard.astro  # Patient review card
│   │   ├── AppointmentForm.astro  # Form with Formspree
│   │   ├── WhatsAppButton.astro   # Floating WhatsApp button
│   │   └── SEO.astro          # Meta tags + JSON-LD
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base HTML wrapper
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About us
│   │   ├── services.astro     # All services
│   │   ├── doctors.astro      # Doctor bios
│   │   ├── contact.astro      # Contact + form + map
│   │   └── thank-you.astro    # Form confirmation
│   └── styles/
│       └── global.css         # Tailwind + theme + animations
├── public/
│   ├── images/                # Clinic photos
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── package.json
├── .env.example
├── NEW_CLINIC_CHECKLIST.md
└── README.md
```

## 🎨 Color Presets by Category

| Category | Primary | Primary Dark | Accent |
|----------|---------|--------------|--------|
| Dental | `#0F766E` (Teal) | `#0D5C56` | `#FCD34D` |
| Physio | `#1D4ED8` (Blue) | `#1E3A8A` | `#FCD34D` |
| Skin | `#BE185D` (Rose) | `#9D174D` | `#FCD34D` |

Update these in `clinic.ts` → `brand.primaryColor` and in `global.css` → `@theme` block.

## 📝 License

MIT — Free to use for commercial projects.
