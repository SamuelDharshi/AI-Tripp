import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { TripPlanningRequest, Itinerary, Trip } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function POST(request: NextRequest) {
  try {
    const data: TripPlanningRequest = await request.json();
    if (!data.destination || !data.startDate || !data.endDate || !data.budget) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate trip duration
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if (days < 1) {
      return NextResponse.json(
        { success: false, error: 'End date must be after start date' },
        { status: 400 }
      );
    }

    // Build AI prompt
    const prompt = `Create a detailed ${days}-day travel itinerary for ${data.destination}.

Trip Details:
- Dates: ${data.startDate} to ${data.endDate}
- Budget: ₹${data.budget} INR (Indian Rupees)
- Travelers: ${data.travelers}
- Mood: ${data.mood}
- Interests: ${data.preferences?.interests?.join(', ') || 'General sightseeing'}
- Pace: ${data.preferences?.pace || 'moderate'}

Please provide a comprehensive itinerary in JSON format with the following structure:
{
  "days": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "activities": [
        {
          "name": "Activity name",
          "description": "Brief description",
          "location": {
            "name": "Location name",
            "address": "Full address",
            "coordinates": { "lat": 0, "lng": 0 }
          },
          "startTime": "HH:MM",
          "endTime": "HH:MM",
          "duration": 120,
          "cost": 2000,
          "category": "attraction",
          "bookingRequired": false
        }
      ],
      "meals": [
        {
          "name": "Restaurant name",
          "type": "lunch",
          "location": { "name": "Location", "address": "Address", "coordinates": { "lat": 0, "lng": 0 } },
          "time": "HH:MM",
          "estimatedCost": 1500,
          "cuisine": "Local"
        }
      ],
      "notes": "Any important notes for the day"
    }
  ],
  "accommodation": [
    {
      "name": "Hotel name",
      "type": "hotel",
      "location": { "name": "Location", "address": "Address", "coordinates": { "lat": 0, "lng": 0 } },
      "checkIn": "YYYY-MM-DD",
      "checkOut": "YYYY-MM-DD",
      "costPerNight": 8000,
      "totalCost": 24000,
      "amenities": ["WiFi", "Breakfast"],
      "rating": 4.5
    }
  ],
  "transportation": [
    {
      "type": "flight",
      "from": { "name": "Origin", "address": "", "coordinates": { "lat": 0, "lng": 0 } },
      "to": { "name": "Destination", "address": "", "coordinates": { "lat": 0, "lng": 0 } },
      "departureTime": "YYYY-MM-DDTHH:MM:SS",
      "arrivalTime": "YYYY-MM-DDTHH:MM:SS",
      "cost": 25000
    }
  ],
  "totalCost": 100000
}

IMPORTANT: All costs must be in Indian Rupees (INR). Use realistic INR pricing for Indian destinations.

Ensure the itinerary:
1. Stays within the budget (in INR)
2. Matches the selected mood and interests
3. Includes realistic timing and logistics
4. Suggests local hidden gems
5. Provides variety in activities
6. Includes breakfast, lunch, and dinner recommendations`;

    // Call Gemini API
    const fullPrompt = `You are an expert travel planner. Create detailed, realistic itineraries in valid JSON format.\n\n${prompt}`;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const responseText = response.text() || '';
    
    // Extract JSON from response
    let itineraryData;
    try {
      // Try to find JSON in the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        itineraryData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      return NextResponse.json(
        { success: false, error: 'Failed to generate itinerary. Please try again.' },
        { status: 500 }
      );
    }

    // Generate IDs for the trip and itinerary
    const tripId = `trip_${Date.now()}`;
    const itineraryId = `itin_${Date.now()}`;

    // Add IDs to the data
    const itinerary: Itinerary = {
      id: itineraryId,
      tripId: tripId,
      ...itineraryData,
      days: itineraryData.days.map((day: any, index: number) => ({
        ...day,
        activities: day.activities?.map((act: any, actIndex: number) => ({
          id: `act_${index}_${actIndex}`,
          ...act,
        })) || [],
        meals: day.meals?.map((meal: any, mealIndex: number) => ({
          id: `meal_${index}_${mealIndex}`,
          ...meal,
        })) || [],
      })),
      accommodation: itineraryData.accommodation?.map((acc: any, index: number) => ({
        id: `acc_${index}`,
        ...acc,
      })) || [],
      transportation: itineraryData.transportation?.map((trans: any, index: number) => ({
        id: `trans_${index}`,
        ...trans,
      })) || [],
    };

    const trip: Trip = {
      id: tripId,
      userId: 'demo_user', // TODO: Get from auth session
      destination: data.destination,
      startDate: start,
      endDate: end,
      budget: data.budget,
      mood: data.mood,
      status: 'planning',
      itinerary: itinerary,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // TODO: Save to database
    // await saveTrip(trip);
    // await saveItinerary(itinerary);

    return NextResponse.json({
      success: true,
      trip: trip,
      itinerary: itinerary,
      message: 'Itinerary created successfully!',
    });

  } catch (error: any) {
    console.error('Plan trip API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create trip plan' 
      },
      { status: 500 }
    );
  }
}
