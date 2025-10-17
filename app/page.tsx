"use client";

import { MapPin, Clock, Sparkles, Navigation, Cloud, Heart, MessageCircle, CreditCard, Brain, Zap, TrendingUp, Users } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI DreamTrip
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">How It Works</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Pricing</a>
            <ThemeToggle />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Your 24/7 AI Travel Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent opacity-80">
            Plan, Book & Travel—<br />All Automated by AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto opacity-80">
          End-to-end trip planning optimized for your budget, mood, and time. Real-time guidance that adapts to weather, delays, and your preferences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/plan" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
              Start Planning Free
            </a>
            <a href="/demo" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition">
              Watch Demo
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>80% Faster Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>10K+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>4.8/5 Rating</span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="text-white text-center relative z-20">
                <MapPin className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-2xl font-semibold opacity-75">App Screenshot / Demo</p>
              </div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Next Stop</p>
                  <p className="font-semibold dark:text-white">Eiffel Tower</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hidden Gem</p>
                  <p className="font-semibold dark:text-white">Local Bakery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need for the perfect trip</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">From planning to booking to real-time guidance—all in one place</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">AI Trip Planning</h3>
              <p className="text-gray-600 dark:text-gray-200">
                End-to-end itinerary generation based on your mood, budget, and duration. Optimized for your unique travel style.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Conversational AI</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Chat naturally to plan, modify, or refine your trip. Your AI assistant understands context and preferences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Auto-Booking</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Seamless integration with flights, hotels, and cabs. Book everything with one click—no juggling multiple apps.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Real-Time Adaptation</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Weather changes? Flight delayed? AI instantly reshuffles your itinerary and suggests alternatives.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Navigation className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Live Travel Mode</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Turn-by-turn navigation, local recommendations, and instant updates—your AI guide throughout the journey.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Personalization Engine</h3>
              <p className="text-gray-600 dark:text-gray-200">
                AI learns from your trips to build your unique travel persona. Every journey gets smarter and more tailored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-gray-50/95 to-blue-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How AI DreamTrip works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Five steps from idea to unforgettable journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Share Your Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tell AI your destination, budget, mood, duration, and preferences via chat.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">AI Plans Everything</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get an optimized end-to-end itinerary with flights, hotels, attractions, and bookings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-600 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Review & Refine</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chat with AI to modify, swap activities, or adjust timing until it&apos;s perfect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Live Travel Mode</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Real-time guidance, weather updates, rerouting, and local tips throughout your trip.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-bold mb-3">AI Learns & Improves</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Post-trip feedback helps AI refine your travel persona for even better future trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
        <section className="py-20 px-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect for every traveler</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Whether you&apos;re solo, with family, or on business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-bold mb-2">Solo Travelers</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Simple, automated planning for independent explorers seeking adventure.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-2">Families</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Balanced itineraries with safety, fun activities, and stress-free logistics.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Business Travelers</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Time-efficient trips optimized for productivity and convenience.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Students</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Budget-conscious planning with maximum experiences at minimum cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50/95 to-blue-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven results, happy travelers</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                80%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Planning Time Saved</p>
            </div>

            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4.8/5
              </div>
              <p className="text-gray-600 dark:text-gray-300">User Satisfaction</p>
            </div>

            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                90%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Itinerary Accuracy</p>
            </div>

            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                70%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Return Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your next adventure starts here
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands who&apos;ve discovered stress-free travel with AI DreamTrip. Plan 80% faster, travel smarter.
          </p>
          <a href="/plan" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
            Start Planning Free
          </a>
        </div>
      </section>

      {/* Footer */}
        <footer className="bg-gray-900/95 backdrop-blur-sm text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">AI DreamTrip</span>
              </div>
              <p className="text-sm">Your 24/7 AI travel companion. Plan, book, and travel—all automated.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Sample Trips</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 AI DreamTrip. All rights reserved. Powered by AI to make travel effortless.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
