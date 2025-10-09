"use client";

import { useState } from 'react';
import { Sparkles, MessageCircle, FileText } from 'lucide-react';
import TripPlanningForm from '@/components/TripPlanningForm';
import ChatInterface from '@/components/ChatInterface';
import ItineraryDisplay from '@/components/ItineraryDisplay';
import { TripPlanningRequest, Itinerary } from '@/types';

type ViewMode = 'form' | 'chat' | 'itinerary';

export default function PlanPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('form');
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [tripId, setTripId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: TripPlanningRequest) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setItinerary(result.itinerary);
        setTripId(result.trip.id);
        setViewMode('itinerary');
      } else {
        alert(result.error || 'Failed to create itinerary');
      }
    } catch (error) {
      console.error('Error planning trip:', error);
      alert('An error occurred while planning your trip');
    } finally {
      setIsLoading(false);
    }
  };

  const handleItineraryUpdate = (updatedItinerary: Itinerary) => {
    setItinerary(updatedItinerary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI DreamTrip
            </span>
          </a>
          <div className="flex gap-4">
            <button
              onClick={() => setViewMode('form')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                viewMode === 'form'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Form
            </button>
            <button
              onClick={() => setViewMode('chat')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                viewMode === 'chat'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Chat
            </button>
            {itinerary && (
              <button
                onClick={() => setViewMode('itinerary')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  viewMode === 'itinerary'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                View Itinerary
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {viewMode === 'form' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Plan Your Dream Trip
              </h1>
              <p className="text-xl text-gray-600">
                Fill in the details and let AI create your perfect itinerary
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <TripPlanningForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            </div>
          </div>
        )}

        {viewMode === 'chat' && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chat with AI Travel Assistant
              </h1>
              <p className="text-xl text-gray-600">
                Have a conversation to plan your perfect trip
              </p>
            </div>
            <div className="h-[700px]">
              <ChatInterface tripId={tripId || undefined} onItineraryUpdate={handleItineraryUpdate} />
            </div>
          </div>
        )}

        {viewMode === 'itinerary' && itinerary && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Dream Itinerary
              </h1>
              <p className="text-xl text-gray-600">
                Review and customize your AI-generated travel plan
              </p>
              <button
                onClick={() => setViewMode('chat')}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Refine with AI Chat
              </button>
            </div>
            <ItineraryDisplay itinerary={itinerary} />
          </div>
        )}
      </main>
    </div>
  );
}
