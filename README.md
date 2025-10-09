# AI DreamTrip — Your 24/7 AI Travel Companion

A modern Next.js landing page for AI DreamTrip, an intelligent travel assistant that automatically plans, books, and guides users through their trips using AI.

## Overview

AI DreamTrip eliminates the stress of manual trip planning by generating end-to-end itineraries optimized for budget, mood, and time — and adjusts plans dynamically based on real-world changes.

## Key Features Showcased

- 🧠 **AI Trip Planning** - End-to-end itinerary generation
- 💬 **Conversational AI** - Natural chat interface for planning
- 💳 **Auto-Booking** - One-click booking for flights, hotels, cabs
- ☁️ **Real-Time Adaptation** - Dynamic rescheduling based on weather/delays
- 🧭 **Live Travel Mode** - Turn-by-turn guidance during trips
- ✨ **Personalization Engine** - AI learns from your travel history

## Landing Page Sections

- 🎯 Hero section with value proposition and stats
- 📋 6 key features aligned with PRD
- 🔄 5-step user flow (from planning to post-trip)
- 👥 Target user segments (Solo, Families, Business, Students)
- 📊 Success metrics showcase (80% time saved, 4.8/5 rating)
- 💬 Strong call-to-action
- 📄 Professional footer

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Google Gemini API Key (Required for AI features)
GEMINI_API_KEY=your_gemini_api_key_here
```

**Important:** You need a Google Gemini API key to use the AI features. Get one at https://makersuite.google.com/app/apikey

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 4. Start Planning Trips!

- Click "Start Planning Free" on the homepage
- Choose between Form mode or Chat mode
- Fill in your trip details or chat with the AI
- Get your personalized itinerary in seconds!

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack (Frontend)

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Planned Tech Stack (Full Product - Per PRD)

| Component | Technology |
|-----------|------------|
| Frontend | React / Next.js ✅ |
| Backend | Python (FastAPI / Flask) |
| AI Engine | Google Gemini Pro ✅ |
| Database | PostgreSQL / Firebase |
| APIs | Skyscanner, Booking.com, Google Maps, Weather API |
| Hosting | AWS / Vercel |

## Project Structure

```
tripp-travel-app/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page (updated per PRD)
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind config
└── next.config.js       # Next.js config
```

## Product Roadmap (Per PRD)

### Phase 1: Landing Page ✅
- Modern, responsive landing page
- Feature showcase
- User flow visualization
- Target audience sections

### Phase 2: Core Features (Planned)
- [ ] Conversational AI chat interface
- [ ] Trip planning engine
- [ ] API integrations (Skyscanner, Booking.com, Google Maps)
- [ ] User authentication & profiles
- [ ] Itinerary generation & storage

### Phase 3: Advanced Features (Planned)
- [ ] Real-time adaptation engine
- [ ] Live travel mode with navigation
- [ ] Booking automation
- [ ] Personalization engine with ML
- [ ] Post-trip feedback system

### Phase 4: Future Enhancements (Per PRD)
- [ ] Voice assistant integration (Alexa, Google Assistant)
- [ ] AI language translator
- [ ] Carbon footprint optimization
- [ ] Travel insurance automation

## Customization

- Edit `app/page.tsx` to modify the landing page content
- Update colors in `tailwind.config.ts`
- Modify metadata in `app/layout.tsx`
- Add new pages in the `app/` directory

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or deploy to any platform that supports Next.js.

## License

MIT
