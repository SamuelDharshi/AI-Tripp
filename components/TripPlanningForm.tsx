"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, DollarSign, Users, Heart, Sparkles } from 'lucide-react';
import { TripPlanningRequest } from '@/types';

interface TripPlanningFormProps {
  onSubmit: (data: TripPlanningRequest) => void;
  isLoading?: boolean;
}

export default function TripPlanningForm({ onSubmit, isLoading }: TripPlanningFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<TripPlanningRequest>();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Food & Dining',
    'Adventure',
    'Culture & History',
    'Nature & Wildlife',
    'Shopping',
    'Nightlife',
    'Relaxation',
    'Photography',
    'Art & Museums',
    'Sports',
  ];

  const moods = [
    { value: 'adventure', label: 'Adventure', emoji: '🏔️' },
    { value: 'relaxation', label: 'Relaxation', emoji: '🏖️' },
    { value: 'cultural', label: 'Cultural', emoji: '🏛️' },
    { value: 'romantic', label: 'Romantic', emoji: '💑' },
    { value: 'family', label: 'Family Fun', emoji: '👨‍👩‍👧‍👦' },
    { value: 'party', label: 'Party', emoji: '🎉' },
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const onFormSubmit = (data: any) => {
    const formData: TripPlanningRequest = {
      ...data,
      preferences: {
        ...data.preferences,
        interests: selectedInterests,
      },
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
      {/* Destination */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Where do you want to go? *
        </label>
        <input
          {...register('destination', { required: 'Destination is required' })}
          type="text"
          placeholder="e.g., Paris, Tokyo, Bali"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
        />
        {errors.destination && (
          <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
        )}
      </div>

      {/* Dates */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Start Date *
          </label>
          <input
            {...register('startDate', { required: 'Start date is required' })}
            type="date"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            End Date *
          </label>
          <input
            {...register('endDate', { required: 'End date is required' })}
            type="date"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          {errors.endDate && (
            <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      {/* Budget & Travelers */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Budget (USD) *
          </label>
          <input
            {...register('budget', { 
              required: 'Budget is required',
              min: { value: 100, message: 'Budget must be at least $100' }
            })}
            type="number"
            placeholder="e.g., 2000"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
          />
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Number of Travelers *
          </label>
          <input
            {...register('travelers', { 
              required: 'Number of travelers is required',
              min: { value: 1, message: 'At least 1 traveler required' }
            })}
            type="number"
            placeholder="e.g., 2"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
          />
          {errors.travelers && (
            <p className="text-red-500 text-sm mt-1">{errors.travelers.message}</p>
          )}
        </div>
      </div>

      {/* Mood */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
          <Heart className="w-4 h-4 inline mr-1" />
          What's your travel mood? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {moods.map((mood) => (
            <label
              key={mood.value}
              className="relative cursor-pointer"
            >
              <input
                {...register('mood', { required: 'Please select a mood' })}
                type="radio"
                value={mood.value}
                className="peer sr-only"
              />
              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-4 text-center hover:border-blue-600 transition peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/30 bg-white dark:bg-gray-700/50">
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">{mood.label}</div>
              </div>
            </label>
          ))}
        </div>
        {errors.mood && (
          <p className="text-red-500 text-sm mt-1">{errors.mood.message}</p>
        )}
      </div>

      {/* Interests */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
          <Sparkles className="w-4 h-4 inline mr-1" />
          What interests you? (Select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedInterests.includes(interest)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Pace */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
          Travel Pace
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['relaxed', 'moderate', 'packed'].map((pace) => (
            <label key={pace} className="relative cursor-pointer">
              <input
                {...register('preferences.pace')}
                type="radio"
                value={pace}
                className="peer sr-only"
                defaultChecked={pace === 'moderate'}
              />
              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-4 text-center hover:border-blue-600 transition peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/30 bg-white dark:bg-gray-700/50">
                <div className="font-semibold capitalize text-gray-900 dark:text-white">{pace}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Creating Your Dream Trip...
          </span>
        ) : (
          'Generate My Itinerary'
        )}
      </button>
    </form>
  );
}
