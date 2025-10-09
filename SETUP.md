# AI DreamTrip - Phase 2 Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL (optional, for database)
- Google Gemini API Key

## Frontend Setup (Next.js)

### 1. Install Dependencies

```bash
cd tripp-travel-app
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy from example
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
GEMINI_API_KEY=your-gemini-api-key-here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at http://localhost:3000

## Backend Setup (Python FastAPI) - Optional

The Next.js API routes handle most functionality, but you can also run the Python backend for additional features.

### 1. Create Virtual Environment

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
```

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory:

```env
GEMINI_API_KEY=your-gemini-api-key-here
DATABASE_URL=postgresql://user:password@localhost/aidreamtrip
```

### 4. Initialize Database (Optional)

If using PostgreSQL:

```bash
# Create database
createdb aidreamtrip

# Run migrations
python -c "from database import init_db; init_db()"
```

### 5. Run Backend Server

```bash
python main.py
```

The API will be available at http://localhost:8000

## Features Implemented

### ✅ Phase 2 Core Features

1. **Conversational AI Chat Interface**
   - Real-time chat with AI travel assistant
   - Context-aware responses
   - Message history
   - Beautiful UI with animations

2. **Trip Planning Form**
   - Destination input
   - Date selection
   - Budget configuration
   - Mood selection (Adventure, Relaxation, Cultural, etc.)
   - Interest tags
   - Travel pace selection
   - Form validation

3. **AI Itinerary Generation**
   - Google Gemini Pro integration
   - Detailed day-by-day plans
   - Activity recommendations with timing
   - Meal suggestions
   - Accommodation recommendations
   - Transportation planning
   - Cost breakdown

4. **Itinerary Display**
   - Beautiful, organized layout
   - Day-by-day breakdown
   - Activity cards with details
   - Meal planning
   - Accommodation info
   - Transportation details
   - Total cost summary

5. **API Routes**
   - `/api/chat` - Conversational AI endpoint
   - `/api/plan-trip` - Trip planning endpoint
   - Error handling and validation

6. **Database Schema**
   - User model
   - Trip model
   - Itinerary model
   - Chat session model
   - SQLAlchemy ORM setup

## Usage

### Planning a Trip

1. Navigate to http://localhost:3000
2. Click "Start Planning Free"
3. Choose between:
   - **Form Mode**: Fill out the trip planning form
   - **Chat Mode**: Have a conversation with the AI assistant

### Using the Form

1. Enter your destination
2. Select start and end dates
3. Set your budget
4. Choose your travel mood
5. Select interests
6. Click "Generate My Itinerary"

### Using the Chat

1. Start a conversation with the AI
2. Tell it about your travel preferences
3. Ask questions and refine your plan
4. The AI will generate and update your itinerary

### Viewing Your Itinerary

- Switch to "View Itinerary" to see your complete plan
- Review day-by-day activities
- Check accommodation and transportation
- See total costs
- Click "Refine with AI Chat" to make changes

## API Endpoints

### Next.js API Routes

- `POST /api/chat` - Send message to AI assistant
- `POST /api/plan-trip` - Generate trip itinerary

### Python FastAPI (Optional)

- `GET /` - API info
- `GET /health` - Health check
- `POST /api/plan-trip` - Plan trip
- `POST /api/chat` - Chat with AI
- `GET /api/trips/{trip_id}` - Get trip details
- `PUT /api/trips/{trip_id}` - Update trip
- `DELETE /api/trips/{trip_id}` - Delete trip

## Troubleshooting

### Gemini API Errors

If you see "Failed to generate itinerary":
1. Check your `GEMINI_API_KEY` in `.env.local`
2. Ensure your API key is active (get one at https://makersuite.google.com/app/apikey)
3. Check the console for detailed error messages

### Module Not Found Errors

Run:
```bash
npm install
```

### Database Connection Errors

If using PostgreSQL:
1. Ensure PostgreSQL is running
2. Check `DATABASE_URL` in `.env`
3. Verify database exists

## Next Steps (Phase 3)

- [ ] User authentication with NextAuth
- [ ] Database integration for saving trips
- [ ] Real-time weather integration
- [ ] External API integrations (Skyscanner, Booking.com)
- [ ] Booking automation
- [ ] Live travel mode
- [ ] Mobile app

## Support

For issues or questions, refer to:
- README.md
- PRD.md
- Project documentation

## License

MIT
