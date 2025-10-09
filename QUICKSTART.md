# 🚀 Quick Start Guide - AI DreamTrip

Get your AI travel assistant running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get Your Google Gemini API Key

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key

## Step 3: Create Environment File

Create a file named `.env.local` in the project root:

```env
GEMINI_API_KEY=your-actual-gemini-key-here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any-random-string-here
```

**Replace** `your-actual-gemini-key-here` with your real Google Gemini API key!

## Step 4: Start the App

```bash
npm run dev
```

## Step 5: Open in Browser

Visit: http://localhost:3000

## 🎉 You're Ready!

### Try These Features:

1. **Landing Page** - See the beautiful homepage at `/`
2. **Trip Planner** - Click "Start Planning Free" or go to `/plan`
3. **Form Mode** - Fill out the trip planning form
4. **Chat Mode** - Talk to the AI assistant
5. **View Itinerary** - See your AI-generated travel plan

## 📝 Example Trip to Try

**Form Mode:**
- Destination: `Paris, France`
- Dates: Next week (any 5 days)
- Budget: `$3000`
- Mood: `Romantic`
- Interests: `Food & Dining`, `Culture & History`, `Art & Museums`
- Pace: `Moderate`

**Chat Mode:**
Try saying:
> "I want to plan a 5-day romantic trip to Paris with a budget of $3000. I love food, art, and culture."

## ⚠️ Important Notes

- **Gemini API Key Required**: The AI features won't work without a valid API key
- **API Costs**: Google Gemini has a generous free tier (60 requests per minute)
- **Internet Required**: The app needs internet to call Google's Gemini API

## 🐛 Troubleshooting

### "Failed to generate itinerary"
- Check your Gemini API key in `.env.local`
- Make sure your API key is active
- Check browser console for detailed errors

### "Module not found" errors
- Run `npm install` again
- Delete `node_modules` and `.next` folders, then run `npm install`

### Port already in use
- Change the port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

## 📚 Next Steps

- Read `SETUP.md` for detailed setup instructions
- Check `PRD.md` for the full product roadmap
- See `README.md` for complete documentation

## 🎯 Phase 2 Features Available

✅ Conversational AI Chat Interface  
✅ Trip Planning Form  
✅ AI Itinerary Generation  
✅ Beautiful Itinerary Display  
✅ Real-time Chat with Context  
✅ Multi-day Trip Planning  
✅ Activity & Meal Recommendations  
✅ Cost Breakdown  

## 🔮 Coming Soon (Phase 3)

- User Authentication
- Save & Share Trips
- Real-time Weather Updates
- Booking Integration
- Live Travel Mode
- Mobile App

---

**Need Help?** Check the documentation or create an issue!

Happy Traveling! ✈️🌍
