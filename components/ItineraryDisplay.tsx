"use client";

import { Itinerary, DayPlan } from '@/types';
import { Calendar, MapPin, Clock, DollarSign, Utensils, Navigation } from 'lucide-react';
import { format } from 'date-fns';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
}

export default function ItineraryDisplay({ itinerary }: ItineraryDisplayProps) {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">Your Personalized Itinerary</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm opacity-90">Total Days</div>
            <div className="text-2xl font-bold">{itinerary.days.length}</div>
          </div>
          <div>
            <div className="text-sm opacity-90">Activities</div>
            <div className="text-2xl font-bold">
              {itinerary.days.reduce((acc, day) => acc + day.activities.length, 0)}
            </div>
          </div>
          <div>
            <div className="text-sm opacity-90">Estimated Cost</div>
            <div className="text-2xl font-bold">${itinerary.totalCost.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Accommodation */}
      {itinerary.accommodation && itinerary.accommodation.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Accommodation
          </h3>
          <div className="space-y-4">
            {itinerary.accommodation.map((acc) => (
              <div key={acc.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg">{acc.name}</h4>
                    <p className="text-gray-600 text-sm">{acc.location.address}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total</div>
                    <div className="font-bold text-lg">${acc.totalCost}</div>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mt-3">
                  <div>
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Check-in: {format(new Date(acc.checkIn), 'MMM dd, yyyy')}
                  </div>
                  <div>
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Check-out: {format(new Date(acc.checkOut), 'MMM dd, yyyy')}
                  </div>
                </div>
                {acc.amenities && acc.amenities.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {acc.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Transportation */}
      {itinerary.transportation && itinerary.transportation.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Navigation className="w-6 h-6 text-purple-600" />
            Transportation
          </h3>
          <div className="space-y-4">
            {itinerary.transportation.map((trans) => (
              <div key={trans.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-lg capitalize">{trans.type}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {trans.from.name} → {trans.to.name}
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                      <div>
                        Depart: {format(new Date(trans.departureTime), 'MMM dd, HH:mm')}
                      </div>
                      <div>
                        Arrive: {format(new Date(trans.arrivalTime), 'MMM dd, HH:mm')}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">${trans.cost}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Plans */}
      <div className="space-y-6">
        {itinerary.days.map((day) => (
          <DayPlanCard key={day.day} day={day} />
        ))}
      </div>
    </div>
  );
}

function DayPlanCard({ day }: { day: DayPlan }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Day Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
        <h3 className="text-2xl font-bold">Day {day.day}</h3>
        <p className="text-sm opacity-90">{format(new Date(day.date), 'EEEE, MMMM dd, yyyy')}</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Activities */}
        {day.activities && day.activities.length > 0 && (
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Activities
            </h4>
            <div className="space-y-4">
              {day.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="border-l-4 border-blue-600 pl-4 py-2"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h5 className="font-bold text-lg">{activity.name}</h5>
                      <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {activity.startTime} - {activity.endTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {activity.location.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ${activity.cost}
                        </div>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {activity.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meals */}
        {day.meals && day.meals.length > 0 && (
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-purple-600" />
              Meals
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {day.meals.map((meal) => (
                <div
                  key={meal.id}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">{meal.type}</div>
                      <div className="font-bold">{meal.name}</div>
                    </div>
                    <div className="text-sm font-semibold">${meal.estimatedCost}</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {meal.time}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{meal.location.name}</div>
                  {meal.cuisine && (
                    <span className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs mt-2">
                      {meal.cuisine}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {day.notes && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">{day.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
