"use client";

interface ReminderScreenProps {
  // Props for state management
  setActiveTab: (tab: string) => void;
  setSelectedReminderCategory: (value: string) => void;
  setShowSpiritualReminder: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
  showLeavesMenu: boolean;
  handleLeavesMenuToggle: () => void;
}

export default function ReminderScreen({
  setActiveTab,
  setSelectedReminderCategory,
  setShowSpiritualReminder,
  setShowHomeScreen,
  showLeavesMenu,
  handleLeavesMenuToggle,
}: ReminderScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header with Back Arrow - Mobile Responsive */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
        <button
          onClick={() => setActiveTab("Home")}
          className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
        >
          ←
        </button>
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
          Spiritual Reminders
        </h1>
        <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 py-2 pb-24">
          {/* Subtitle - Mobile Responsive */}
          <div className="mb-6 sm:mb-8 text-center">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Daily reminders to strengthen your connection with Allah
            </p>
          </div>

          {/* Reminder Categories */}
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Prayer Times",
                icon: "🕌",
                description: "Never miss your daily prayers",
              },
              {
                title: "Dhikr Sessions",
                icon: "📿",
                description: "Remember Allah throughout the day",
              },
              {
                title: "Quran Reading",
                icon: "📖",
                description: "Daily Quran recitation reminders",
              },
              {
                title: "Wudu Steps",
                icon: "💧",
                description: "Proper ablution guidance",
              },
              {
                title: "Islamic Calendar",
                icon: "📅",
                description: "Important Islamic dates and events",
              },
              {
                title: "Charity Reminders",
                icon: "💝",
                description: "Remember to give Zakat and Sadaqah",
              },
            ].map((reminder, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedReminderCategory(reminder.title);
                  setShowSpiritualReminder(true);
                  setShowHomeScreen(false);
                }}
                className="w-full bg-slate-800 rounded-xl p-6 flex items-center space-x-4 hover:bg-slate-700 transition-colors text-left"
              >
                <span className="text-3xl">{reminder.icon}</span>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {reminder.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {reminder.description}
                  </p>
                </div>
                <span className="text-white text-xl">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Leaves Menu Button - Mobile Responsive */}
      <button
        onClick={handleLeavesMenuToggle}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      >
        <div className="relative">
          {/* Animated leaves */}
          <div
            className={`transition-transform duration-500 ${
              showLeavesMenu ? "rotate-180" : "rotate-0"
            }`}
          >
            <span className="text-2xl">🍃</span>
          </div>
          {/* Additional floating leaves animation */}
          <div
            className={`absolute -top-1 -left-1 transition-all duration-700 ${
              showLeavesMenu
                ? "opacity-100 scale-125"
                : "opacity-0 scale-75"
            }`}
          >
            <span className="text-lg">🍃</span>
          </div>
          <div
            className={`absolute -bottom-1 -right-1 transition-all duration-500 delay-100 ${
              showLeavesMenu
                ? "opacity-100 scale-110"
                : "opacity-0 scale-50"
            }`}
          >
            <span className="text-sm">🍃</span>
          </div>
        </div>
      </button>
    </div>
  );
}
