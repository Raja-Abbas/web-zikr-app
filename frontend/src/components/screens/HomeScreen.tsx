"use client";

import Image from "next/image";

interface HomeScreenProps {
  // Props for state management
  showDiscussMenu: boolean;
  setShowDiscussMenu: (value: boolean) => void;
  isAuthenticated: boolean;
  userName: string;
  dailyDua: {
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  };
  showFeelingSelector: boolean;
  setShowFeelingSelector: (value: boolean) => void;
  duaCategories: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  selectedDuaCategory: string;
  setSelectedDuaCategory: (value: string) => void;
  getRecommendedDuas: () => Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  navigateToScreen: (screen: string, options?: Record<string, string | boolean | number>) => void;
  handleWallOfDuasClick: () => void;
}

export default function HomeScreen({
  showDiscussMenu,
  setShowDiscussMenu,
  isAuthenticated,
  userName,
  dailyDua,
  showFeelingSelector,
  setShowFeelingSelector,
  duaCategories,
  selectedDuaCategory,
  setSelectedDuaCategory,
  getRecommendedDuas,
  navigateToScreen,
  handleWallOfDuasClick,
}: HomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Top Bar/Header - Mobile Responsive */}
      <div className="flex flex-col items-center justify-between px-4 sm:px-6 py-4 sm:py-6 pt-8 sm:pt-6">
        {/* Leaves Icon - Sidebar Menu - Mobile Responsive */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              // Handle back navigation
              console.log("Back button clicked");
            }}
            className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-6 left-16"
          >
            <Image
              src="/arrow.svg"
              alt="ArrowImage"
     height="200" width="200"         className="h-6 w-6 rotate-180"
            />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(
                "🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true"
              );
              console.log(
                "🍃 Current showDiscussMenu state:",
                showDiscussMenu
              );
              console.log(
                "🍃 Current isAuthenticated state:",
                isAuthenticated
              );
              setShowDiscussMenu(true);
              console.log("🍃 showDiscussMenu state should now be true");
            }}
            className="absolute top-4 sm:top-6 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
          >
            <Image src="/leave.png" alt="Leave"
width="200"
height="200" className="w-10 h-10" />
          </button>
        </div>

        {/* Logo/App Name - Mobile Responsive */}
        <div className="mb-4">
          <div className="text-6xl md:text-7xl text-cream font-arabic mb-2 flex justify-center">
            <Image src="/logo-removebg-preview.png" alt="Logo-Image" width="100" height="100" />
          </div>
        </div>

        {/* Notifications/Reminder - Mobile Responsive */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-white text-lg sm:text-xl">🔔</span>
          <span className="text-white text-xs sm:text-sm">
            Morning duas
          </span>
        </div>
      </div>

      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 pb-24">
          {/* Greeting - Mobile Responsive */}
          <h1 className="text-2xl sm:text-3xl text-white font-bold mb-6 sm:mb-8 text-center">
            Salam Aleykoum {userName || "Adnan"}!
          </h1>

          {/* Dua of the day Section - Mobile Responsive */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Dua of the day
            </h2>

            {/* Dua Card */}
            <div className="bg-cream rounded-2xl p-6 mb-6">
              {/* Arabic Calligraphy */}
              <div className="text-center mb-4">
                <div className="text-2xl text-gray-900 font-arabic leading-relaxed">
                  {dailyDua.arabic}
                </div>
              </div>

              {/* Transliteration */}
              <div className="text-center mb-2">
                <p className="text-gray-900 font-medium">
                  {dailyDua.transliteration}
                </p>
              </div>

              {/* Translation */}
              <div className="text-center mb-4">
                <p className="text-gray-700 text-sm">
                  {dailyDua.translation}
                </p>
              </div>

              {/* Source */}
              <div className="text-center mb-4">
                <p className="text-gray-500 text-xs">{dailyDua.source}</p>
              </div>

              {/* Action Icons */}
              <div className="flex justify-center space-x-6">
                <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                  🔊
                </button>
                <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                  ❤️
                </button>
              </div>
            </div>
          </div>

          {/* Recommendation Sections */}
          <div className="space-y-6">
            {/* Section 1: Customize your recommendations */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">
                Customize your recommendations
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() =>
                    setShowFeelingSelector(!showFeelingSelector)
                  }
                  className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-xl">😊</span>
                    <span className="text-white font-medium">
                      How do you feel today?
                    </span>
                  </div>
                  <span className="text-white">
                    {showFeelingSelector ? (
                      <Image 
                      width={200}
                      height={200}
                      src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
                    ) : (
                      <Image 
                      width={200}
                      height={200}
                      src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Feeling-based Dua Categories */}
                {showFeelingSelector && (
                  <div className="bg-slate-700 rounded-xl p-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      {duaCategories
                        .filter((cat) =>
                          [
                            "anxiety",
                            "sadness",
                            "gratitude",
                            "forgiveness",
                          ].includes(cat.id)
                        )
                        .map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSelectedDuaCategory(category.name);
                              navigateToScreen("dua-content-viewer", {
                                category: category.name,
                              });
                              setShowFeelingSelector(false);
                            }}
                            className="bg-slate-600 hover:bg-slate-500 rounded-lg p-3 text-left transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-white text-sm">
                                {category.icon}
                              </span>
                              <span className="text-white text-sm font-medium">
                                {category.name}
                              </span>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section 2: Recommendations for you */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">
                Recommendations for you
              </h3>
              <div className="space-y-3">
                {getRecommendedDuas().map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedDuaCategory(category.name);
                      navigateToScreen("dua-content-viewer", {
                        category: category.name,
                      });
                    }}
                    className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">
                        {category.icon}
                      </span>
                      <span className="text-white font-medium">
                        {category.name}
                      </span>
                    </div>
                    <Image 
              width={200}
              height={200}
                    src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
                  </button>
                ))}

                <button
                  onClick={handleWallOfDuasClick}
                  className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-xl">🕌</span>
                    <span className="text-white font-medium">
                      The wall of Duas
                    </span>
                  </div>
                  <Image 
              width={200}
              height={200}
                  src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
