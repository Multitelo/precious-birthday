# 🎀 Precious Chinoso's Birthday Website

> A personalised, animated birthday surprise website built for **Precious Chinoso** (aka *Brandy*), unlocking at midnight on **June 3, 2026**. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔒 **Countdown Lock** | Site stays locked with a live countdown until midnight on her birthday |
| 🎁 **Entry Gate** | A gift-unwrapping splash screen that also unlocks background music (bypasses browser autoplay restrictions) |
| 🎉 **Hero Section** | Animated balloons, confetti burst, her full name + nickname tag |
| 💬 **Wishes Carousel** | 5 personal messages with auto-advance, manual arrows, and a progress bar |
| 🖼️ **Polaroid Gallery** | 3 photo cards with hover animations and handwritten captions |
| 💌 **WhatsApp CTA** | One-tap button to send her a birthday message directly on WhatsApp |
| 🎵 **Background Music** | Looping audio with an animated sound-bar indicator button |

---

## 📁 Project Structure

```
birthday-website/
├── assets/                  ← Drop her photos and music file here
│   └── .aistudio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx         ← Name display, confetti, animated decorations
│   │   ├── Countdown.tsx    ← Live countdown timer (locks site until birthday)
│   │   ├── Gallery.tsx      ← Polaroid photo gallery
│   │   ├── WishesCarousel.tsx ← Auto-advancing message carousel
│   │   └── CTA.tsx          ← WhatsApp send-a-wish button
│   ├── App.tsx              ← Main app logic, music player, entry gate
│   ├── index.css            ← Theme, fonts, Tailwind config
│   └── main.tsx             ← React entry point
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Installation

```bash
# 1. Clone or download the project
cd birthday-website

# 2. Install dependencies
npm install

# 3. Install TypeScript types (fixes JSX errors in VS Code)
npm i --save-dev @types/react @types/react-dom

# 4. Start the dev server
npm run dev
```

Open your browser at `http://localhost:3000`

---

## ⚙️ Configuration Guide

All the things you'll want to personalise are clearly marked in the code. Here's a quick map:

### 1. 📅 Birthday Date — `src/App.tsx`

```ts
// Line 11 — change this to her actual birthday
const BIRTHDAY_DATE = new Date("2026-06-03T00:00:00").getTime();
```

To test the site without waiting for the real date, uncomment the test line:

```ts
// const BIRTHDAY_DATE = Date.now() + 5000; // Unlocks after 5 seconds
```

### 2. 🖼️ Photos — `src/components/Gallery.tsx`

Drop **3 photos** of Precious into the `/assets/` folder, then update the `src` paths:

```ts
// Lines 13–31 in Gallery.tsx
const IMAGES = [
  { src: "/assets/photo-1.jpg", caption: "Always radiant ✨", ... },
  { src: "/assets/photo-2.jpg", caption: "Pure joy 🌸",      ... },
  { src: "/assets/photo-3.jpg", caption: "Our Brandy 💖",    ... },
];
```

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. 🎵 Background Music — `src/App.tsx`

External music CDN links are unreliable for personal sites. The recommended approach is to:

1. Download a free track from one of these sources:
   - **[Pixabay Music](https://pixabay.com/music/search/happy/)** — free, no account needed for browsing, download and host yourself
   - **[Free Music Archive](https://freemusicarchive.org/)** — large CC-licensed library
   - **[ccMixter](https://ccmixter.org/)** — community-made royalty-free tracks
2. Save the `.mp3` file into `/assets/`, e.g. `assets/music.mp3`
3. Update the `src` in `App.tsx`:

```tsx
// Around line 97 in App.tsx
<audio ref={audioRef} loop src="/assets/music.mp3" />
```

> 💡 **Tip:** A song she actually loves will make the site 10× more personal than any generic track. Even a 2-minute clip of her favourite artist works perfectly here.

### 4. 💌 WhatsApp Number — `src/components/CTA.tsx`

```ts
// Line 7 in CTA.tsx
// Format: country code + number, no + or leading zero
// Example for Nigeria: "2348012345678"
const phoneNumber = "1234567890";
```

### 5. 💬 Wishes — `src/components/WishesCarousel.tsx`

Edit the `WISHES` array (lines 9–27) to personalise each message. Each item has:

```ts
{ text: "Your message here...", emoji: "🎉" }
```

---

## 🎨 Design System

The site uses a custom **burgundy** colour palette defined in `src/index.css`:

| Token | Hex | Used for |
|---|---|---|
| `burgundy-50` | `#fdf2f4` | Page background |
| `burgundy-300` | `#f5a6b8` | Light accents, decorations |
| `burgundy-500` | `#e34368` | Mid-tone elements |
| `burgundy-600` | `#cc254d` | Primary buttons, highlights |
| `burgundy-950` | `#450816` | Body text |

Fonts:
- **Caveat** — handwriting style (section headers, captions)
- **Outfit** — clean sans-serif (body, buttons, UI)

---

## 🛠️ Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production (outputs to /dist)
npm run preview  # Preview the production build locally
npm run lint     # TypeScript type-check (no emit)
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `motion` | Animations (Framer Motion) |
| `canvas-confetti` | Confetti burst on hero |
| `lucide-react` | Icons |
| `tailwindcss` v4 | Utility-first CSS |
| `vite` | Dev server and bundler |
| `typescript` | Type safety |

---

## 🌐 Deployment

### Option A — Netlify (easiest, free)

1. Run `npm run build`
2. Drag and drop the `/dist` folder to [netlify.com/drop](https://netlify.com/drop)
3. Share the generated link with Precious!

### Option B — Vercel

```bash
npm i -g vercel
vercel
```

### Option C — GitHub Pages

1. Push the project to a GitHub repository
2. Run `npm run build`
3. Deploy the `/dist` folder using the `gh-pages` package or GitHub Actions

> ⚠️ Make sure your `/assets/` images and music are committed to the repo before building, or they won't appear in the deployed site.

---

## 🐛 Troubleshooting

### Red TypeScript errors in VS Code ("JSX element implicitly has type 'any'")
```bash
npm i --save-dev @types/react @types/react-dom
```
Then in VS Code: `Ctrl + Shift + P` → **TypeScript: Restart TS Server**

### Music won't play
- Browser autoplay is blocked until the user interacts — this is why the Entry Gate exists. Make sure she taps "Open Your Gift" first.
- If using a CDN link, it may be blocked by CORS. **Host the file locally in `/assets/` instead.**

### Photos not showing in Gallery
- Confirm the filenames match exactly what's in `Gallery.tsx` (case-sensitive on Linux/Mac)
- Check that the files are in the `assets/` folder at the project root, not inside `src/`

### Site shows countdown instead of the main page
- The birthday date hasn't arrived yet. To test, temporarily uncomment the 5-second test line in `App.tsx` (see Configuration section above)

---

## 👑 Made For

**Precious Chinoso** — aka *Brandy*  
Birthday: **June 3, 2026**  
_Made with ♥ for her special day._# precious-birthday
