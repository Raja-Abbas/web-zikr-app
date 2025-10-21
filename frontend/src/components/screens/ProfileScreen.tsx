"use client";

interface ProfileScreenProps {
  // Props for state management
  userName: string;
  setActiveTab: (tab: string) => void;
  setShowInteriorDesignSettings: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
}

export default function ProfileScreen({
  userName,
  setActiveTab,
  setShowInteriorDesignSettings,
  setShowHomeScreen,
}: ProfileScreenProps) {
  return (
    <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
      {/* Header with Back Arrow - Mobile Responsive */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
        <button
          onClick={() => setActiveTab("Home")}
          className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
        >
          ←
        </button>
        <h1 className="text-xl sm:text-2xl text-white font-bold">
          My Profile
        </h1>
        <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 py-2 pb-24">
          {/* Profile Header - Mobile Responsive */}
          <div className="mb-6 sm:mb-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl text-white">
                👤
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">
              {userName || "Adnan"}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Your spiritual journey with My.Zikr
            </p>
          </div>

          {/* Profile Options */}
          <div className="space-y-4 mb-8">
            {[
              {
                title: "My Saved Duas",
                icon: "🤲",
                description: "View your bookmarked prayers",
              },
              {
                title: "Prayer History",
                icon: "📊",
                description: "Track your spiritual progress",
              },
              {
                title: "Notification Settings",
                icon: "🔔",
                description: "Customize your reminders",
              },
              {
                title: "App Settings",
                icon: "⚙️",
                description: "Personalize your experience",
                action: "settings",
              },
              {
                title: "Help & Support",
                icon: "❓",
                description: "Get assistance and guidance",
              },
              {
                title: "About My.Zikr",
                icon: "ℹ️",
                description: "Learn more about the app",
              },
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (option.action === "settings") {
                    setShowInteriorDesignSettings(true);
                    setShowHomeScreen(false);
                  } else {
                    console.log("Navigate to:", option.title);
                  }
                }}
                className="w-full bg-slate-800 rounded-xl p-6 flex items-center space-x-4 hover:bg-slate-700 transition-colors text-left"
              >
                <span className="text-3xl">{option.icon}</span>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {option.description}
                  </p>
                </div>
                <span className="text-white text-xl">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
