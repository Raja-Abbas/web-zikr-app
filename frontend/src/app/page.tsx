'use client';

import { useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  });

  const islamicFeatures = [
    {
      title: "Daily Prayers",
      description: "Get accurate prayer times for your location",
      icon: "🕌",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Quran Reading",
      description: "Read and listen to the Holy Quran",
      icon: "📖",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Duas & Azkar",
      description: "Daily supplications and remembrance",
      icon: "🤲",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Qibla Direction",
      description: "Find the direction to Mecca",
      icon: "🧭",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Islamic Calendar",
      description: "Hijri dates and Islamic events",
      icon: "📅",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Tasbih Counter",
      description: "Digital prayer beads counter",
      icon: "📿",
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🕌</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My.Zkir</h1>
                <p className="text-sm text-gray-600">Islamic Companion App</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">{currentTime}</div>
              <div className="text-sm text-gray-600">Current Time</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My.Zkir
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your comprehensive Islamic companion for daily prayers, Quran reading, and spiritual guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Islamic Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islamicFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Today&apos;s Prayer Times
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{prayer}</div>
                <div className="text-green-600 font-bold">--:--</div>
                <div className="text-xs text-gray-500">Loading...</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            Enable location access to get accurate prayer times for your area
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🕌</span>
              <span className="text-xl font-bold">My.Zkir</span>
            </div>
            <p className="text-gray-400 mb-4">
              &ldquo;And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.&rdquo;
            </p>
            <p className="text-gray-500 text-sm">
              Quran 65:3 | Built with ❤️ for the Muslim Ummah
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
