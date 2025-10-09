from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AI DreamTrip API",
    description="Backend API for AI-powered travel planning",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class TripPreferences(BaseModel):
    pace: Optional[str] = "moderate"
    interests: Optional[List[str]] = []
    dietaryRestrictions: Optional[List[str]] = []
    mobilityNeeds: Optional[List[str]] = []

class TripPlanRequest(BaseModel):
    destination: str
    startDate: str
    endDate: str
    budget: float
    mood: str
    travelers: int
    preferences: Optional[TripPreferences] = None

class ChatRequest(BaseModel):
    message: str
    sessionId: Optional[str] = None
    tripId: Optional[str] = None
    userId: str

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "AI DreamTrip API",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

# Trip planning endpoint
@app.post("/api/plan-trip")
async def plan_trip(request: TripPlanRequest):
    """
    Generate a complete trip itinerary using AI
    """
    try:
        # TODO: Implement AI trip planning logic
        # TODO: Call OpenAI API
        # TODO: Integrate with external APIs (Skyscanner, Booking.com)
        # TODO: Save to database
        
        return {
            "success": True,
            "message": "Trip planned successfully",
            "tripId": f"trip_{int(datetime.now().timestamp())}",
            "itinerary": {
                "days": [],
                "accommodation": [],
                "transportation": [],
                "totalCost": request.budget
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Chat endpoint
@app.post("/api/chat")
async def chat(request: ChatRequest):
    """
    Handle conversational AI interactions
    """
    try:
        # TODO: Implement chat logic with OpenAI
        # TODO: Maintain conversation context
        # TODO: Parse user intent
        # TODO: Update itinerary if needed
        
        return {
            "success": True,
            "message": "I'm here to help plan your trip! What would you like to know?",
            "suggestions": [],
            "updatedItinerary": None
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get trip details
@app.get("/api/trips/{trip_id}")
async def get_trip(trip_id: str):
    """
    Retrieve trip details by ID
    """
    # TODO: Fetch from database
    return {
        "success": True,
        "trip": {
            "id": trip_id,
            "destination": "Sample Destination",
            "status": "planning"
        }
    }

# Update trip
@app.put("/api/trips/{trip_id}")
async def update_trip(trip_id: str, updates: dict):
    """
    Update trip details
    """
    # TODO: Update in database
    return {
        "success": True,
        "message": "Trip updated successfully"
    }

# Delete trip
@app.delete("/api/trips/{trip_id}")
async def delete_trip(trip_id: str):
    """
    Delete a trip
    """
    # TODO: Delete from database
    return {
        "success": True,
        "message": "Trip deleted successfully"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
