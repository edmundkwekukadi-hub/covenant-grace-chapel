# Covenant Grace Chapel — Official Website

A world-class, $100k-quality church website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** CSS + Framer Motion
- **Fonts:** Cinzel, Cormorant Garamond, DM Sans
- **Deployment:** Vercel + GitHub

## Pages
- `/` — Home (Hero, Pillars, Pastor Welcome, Sermons, Gallery, CTA)
- `/about` — About (Story, Beliefs, Leadership Team)
- `/sermons` — Sermon Archive (Filter by speaker, series, search)
- `/visit` — Plan Your Visit (Steps, FAQ, First Timer Form)
- `/give` — Online Giving (Amount selector, fund selection)
- `/events` — Events Calendar
- `/groups` — Ministries & Small Groups
- `/live` — Live Stream + Countdown
- `/contact` — Contact Form + Info

## Design System
- **Gold:** #C9A84C
- **Navy:** #0B1628
- **Electric Blue:** #1E6FD9
- **Background:** #07101F
- **Text:** #F0EDE6

## Setup on StackBlitz

1. Go to [stackblitz.com](https://stackblitz.com)
2. Click **"New Project"** → Choose **Next.js**
3. Delete all default files
4. Upload all files from this zip into the project
5. StackBlitz auto-installs dependencies
6. Click **Connect to GitHub** → Push to your repo
7. Go to [vercel.com](https://vercel.com) → Import GitHub repo → Deploy

## Customization Needed
- Replace YouTube channel ID in `/live/page.tsx`
- Add real Google Maps embed in `/contact/page.tsx`  
- Connect Stripe or Paystack for real payments in `/give/page.tsx`
- Add real sermon videos/audio links in `/sermons/page.tsx`
- Update social media links in `Footer.tsx`
- Update church address in `Footer.tsx` and `contact/page.tsx`

## Pastor Images
All pastor images are in `/public/images/pastors/`
- `pastor-alex-owusu-1.webp` — Senior Pastor (formal)
- `pastor-alex-owusu-2.webp` — Senior Pastor (preaching)
- `pastor-isaac-nkansah.jpg`
- `pastor-emmanuel-kusi.jpg`
- `pastor-daniel-opoku.jpg`
- `pastor-emmanuel-asare.jpg`
