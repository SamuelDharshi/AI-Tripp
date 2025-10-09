import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function POST(request: NextRequest) {
  try {
    const { message, tripId, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation context
    const systemPrompt = `You are an expert AI travel assistant for AI DreamTrip. Your role is to help users plan amazing trips by:
1. Understanding their preferences, budget, and travel style
2. Suggesting destinations, activities, and experiences
3. Creating detailed itineraries with timing and logistics
4. Adapting plans based on weather, delays, or user feedback
5. Providing local insights and hidden gems

Be conversational, enthusiastic, and helpful. Ask clarifying questions when needed. Provide specific recommendations with details like timing, costs, and locations.`;

    // Build conversation history
    let conversationContext = systemPrompt + '\n\n';
    if (history && history.length > 0) {
      conversationContext += history.map((msg: any) => 
        `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
      ).join('\n') + '\n';
    }
    conversationContext += `User: ${message}\nAssistant:`;

    // Call Gemini API
    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    const assistantMessage = response.text() || 'I apologize, but I encountered an error. Please try again.';

    // TODO: Parse response for itinerary updates
    // TODO: Save conversation to database
    // TODO: Update trip in database if itinerary changes

    return NextResponse.json({
      success: true,
      message: assistantMessage,
      suggestions: [], // TODO: Extract suggestions from AI response
      updatedItinerary: null, // TODO: Parse and return updated itinerary if applicable
    });

  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to process chat message' 
      },
      { status: 500 }
    );
  }
}
