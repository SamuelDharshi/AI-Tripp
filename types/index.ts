// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  travelPersona?: TravelPersona;
}

export interface TravelPersona {
  preferences: string[];
  budgetRange: 'budget' | 'moderate' | 'luxury';
  pace: 'relaxed' | 'moderate' | 'packed';
  interests: string[];
  dietaryRestrictions?: string[];
  mobilityNeeds?: string[];
}

// Trip Types
export interface Trip {
  id: string;
  userId: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  mood: string;
  status: 'planning' | 'confirmed' | 'ongoing' | 'completed';
  itinerary?: Itinerary;
  createdAt: Date;
  updatedAt: Date;
}

export interface Itinerary {
  id: string;
  tripId: string;
  days: DayPlan[];
  transportation: Transportation[];
  accommodation: Accommodation[];
  totalCost: number;
}

export interface DayPlan {
  day: number;
  date: Date;
  activities: Activity[];
  meals: Meal[];
  notes?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  location: Location;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  cost: number;
  category: 'attraction' | 'experience' | 'leisure' | 'shopping' | 'other';
  bookingRequired: boolean;
  bookingUrl?: string;
}

export interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  location: Location;
  time: string;
  estimatedCost: number;
  cuisine?: string;
  dietaryInfo?: string[];
}

export interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  placeId?: string;
}

export interface Transportation {
  id: string;
  type: 'flight' | 'train' | 'bus' | 'car' | 'taxi' | 'walk';
  from: Location;
  to: Location;
  departureTime: Date;
  arrivalTime: Date;
  cost: number;
  bookingUrl?: string;
  confirmationNumber?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'hostel' | 'airbnb' | 'resort' | 'other';
  location: Location;
  checkIn: Date;
  checkOut: Date;
  costPerNight: number;
  totalCost: number;
  amenities: string[];
  rating?: number;
  bookingUrl?: string;
  confirmationNumber?: string;
}

// Chat Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  tripId?: string;
}

export interface ChatSession {
  id: string;
  userId: string;
  tripId?: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// API Request/Response Types
export interface TripPlanningRequest {
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  mood: string;
  travelers: number;
  preferences?: {
    pace?: 'relaxed' | 'moderate' | 'packed';
    interests?: string[];
    dietaryRestrictions?: string[];
    mobilityNeeds?: string[];
  };
}

export interface TripPlanningResponse {
  success: boolean;
  trip?: Trip;
  itinerary?: Itinerary;
  message?: string;
  error?: string;
}

export interface ChatRequest {
  message: string;
  sessionId?: string;
  tripId?: string;
  userId: string;
}

export interface ChatResponse {
  success: boolean;
  message: ChatMessage;
  suggestions?: string[];
  updatedItinerary?: Itinerary;
  error?: string;
}

// Weather & Real-time Updates
export interface WeatherUpdate {
  location: string;
  temperature: number;
  condition: string;
  forecast: string;
  alerts?: string[];
}

export interface RealTimeUpdate {
  type: 'weather' | 'traffic' | 'event' | 'delay';
  severity: 'low' | 'medium' | 'high';
  message: string;
  affectedActivities?: string[];
  suggestions?: string[];
  timestamp: Date;
}
