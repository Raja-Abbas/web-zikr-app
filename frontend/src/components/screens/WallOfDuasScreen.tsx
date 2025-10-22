"use client";

import Image from "next/image";
import Arrow from '/arrow.svg';
import Discuss from '/Discuss.svg';
import Leave from '/leave.png';
import Settings from '/AuthenticDuas/settings.png';

interface WallOfDuasScreenProps {
  // Props for state management
  showDiscussMenu: boolean;
  setShowDiscussMenu: (value: boolean) => void;
  isAuthenticated: boolean;
  displayDuas: Array<{
    id: string;
    dua: string;
    amines: number;
    author?: string;
    location?: string;
    timestamp?: string;
  }>;
  userLocation: {
    city: string;
  };
  settings: {
    theme: string;
  };
  showLocationSettings: boolean;
  showThemeSettings: boolean;
  toggleLocationSettings: () => void;
  toggleThemeSettings: () => void;
  sayAmine: (id: string) => void;
  formatAmineCount: (count: number) => string;
  navigateToScreen: (screen: string, options?: Record<string, string | boolean | number>) => void;
  handleDuaAction: (action: string) => void;
}

export default function WallOfDuasScreen({
  showDiscussMenu,
  setShowDiscussMenu,
  isAuthenticated,
  displayDuas,
  userLocation,
  settings,
  showLocationSettings,
  showThemeSettings,
  toggleLocationSettings,
  toggleThemeSettings,
  sayAmine,
  formatAmineCount,
  navigateToScreen,
  handleDuaAction,
}: WallOfDuasScreenProps) {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-br from-[#071d2d] to-[#0c2a40] overflow-hidden">
        {/* Fixed Header - Mobile Responsive */}
        <div className="px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-[#071d2d] to-transparent relative z-10">
          {/* Header with Back Arrow, Leaf Icon and Action Buttons - Mobile Responsive */}
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-col items-center justify-center">
              {/* Left: Back Arrow + Leaf Icon + Title - Mobile Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => {
                    // Handle back navigation - would need to be passed as prop
                    console.log("Back button clicked");
                  }}
                  className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-6 left-16"
                >
                  <Image
                    src={Arrow}
                    alt="ArrowImage"
                    className="h-6 w-6 rotate-180"
              width={200}
              height={200}
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
                    console.log(
                      "🍃 showDiscussMenu state should now be true"
                    );
                  }}
                  className="absolute top-4 sm:top-6 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
                >
                  <Image src={Leave} alt="Leave" className="w-10 h-10"
              width={200}
              height={200} />
                </button>
              </div>

              {/* Title */}
              <div className="flex items-center space-x-2">
                <span className="text-white text-xl font-semibold">
                  The wall of douas
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white text-opacity-60 text-sm mt-2 leading-relaxed mt-10">
              Douas of My.zikr community close to your location. Support
              them by saying Amine.
            </p>
          </div>

          {/* Right: Location and Theme Buttons - Mobile Responsive */}
          <div className="flex items-center justify-end space-x-1 sm:space-x-2">
            <button
              onClick={toggleLocationSettings}
              className="p-2 rounded-lg flex opacity-50 hover:opacity-100 items-center justify-center hover:bg-opacity-10 transition-colors"
            >
              <span className="text-white text-sm sm:text-lg">
                Location
              </span>
            </button>
            <button
              onClick={toggleThemeSettings}
              className="p-2 rounded-lg flex opacity-50 hover:opacity-100 items-center justify-center hover:bg-opacity-10 transition-colors"
            >
              <span className="text-white text-sm sm:text-lg">Theme</span>
            </button>
            <button className="ml-10">
              <Image 
              width={200}
              height={200}
              src={Settings} alt="Settings" className="w-6 h-6" />
            </button>
          </div>
          {/* Settings Dropdowns */}
          {showLocationSettings && (
            <div className="mb-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-white font-medium mb-2">
                Location Settings
              </h3>
              <p className="text-white text-opacity-70 text-sm">
                Currently showing duas from: {userLocation.city}
              </p>
            </div>
          )}

          {showThemeSettings && (
            <div className="mb-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-white font-medium mb-2">
                Theme Settings
              </h3>
              <p className="text-white text-opacity-70 text-sm">
                Current theme: {settings.theme}
              </p>
            </div>
          )}
        </div>

        {/* Scrollable Content Area - Mobile Responsive */}
        <div
          className="flex-1 overflow-y-auto px-4 sm:px-6 pb-40"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Community Stats - Mobile Responsive */}
          <div className="mb-4 sm:mb-6 text-center">
            <p className="text-white text-opacity-50 text-xs sm:text-sm">
              {displayDuas.length} community duas • Live updates
            </p>
          </div>

          {/* Dua Cards */}
          <div className="space-y-10">
            {displayDuas.map((dua, index) => (
              <div
                key={dua.id}
                className="bg-[#f4f0e6] border border-[#173b2a] rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {/* Header with Author and Time */}
                {/* <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {dua.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-sm">
                        {dua.author}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {dua.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">
                      {getTimeAgo(dua.timestamp)}
                    </p>
                  </div>
                </div> */}

                {/* Dua Text */}
                <p className="text-gray-900 text-base leading-relaxed mb-5 text-justify">
                  {dua.dua}
                </p>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  {/* Amine Button */}
                  <button
                    onClick={() => sayAmine(dua.id)}
                    className="bg-[#0f1944] border border-[#fcf5eb] absolute -bottom-5 left-3 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e40af] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2"
                  >
                    <span>Amine</span>
                  </button>

                  {/* Amine Count Badge */}
                  <div className="bg-[#0f1944] border border-[#fcf5eb] absolute -bottom-5 right-3 text-white px-2.5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e40af] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2">
                    {formatAmineCount(dua.amines)}
                  </div>
                </div>
              </div>
            ))}

            {/* Load More Indicator */}
            <div className="text-center py-8">
              <div className="inline-flex items-center space-x-2 text-white text-opacity-50 text-sm">
                <div className="w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
                <span>More duas loading...</span>
                <div
                  className="w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons - Fixed Bottom */}
        <div className="fixed bottom-0 right-0 pt-6 pb-6 z-20">
          <div className="px-6 space-y-3 flex flex-col">
            {/* Write a doua */}
            <button
              onClick={() => navigateToScreen("write-dua", {})}
              className="w-fit border border-[#0f1944] bg-[#35458a] text-white p-2 px-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Write a doua
            </button>

            {/* Ask for doua */}
            <button className="w-fit bg-[#173b2a] border border-[#0f1944] text-white p-2 px-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Ask for doua
            </button>

            {/* Discuss */}
            <button
              onClick={() => handleDuaAction("Discuss")}
              className="bg-[#35458a] border border-[#173b2a] text-white p-2 px-4 rounded-full hover:bg-slate-600 transition-colors flex items-center space-x-1 sm:space-x-2"
            >
              <Image 
              width={200}
              height={200}
              src={Discuss} alt="Discuss" className="w-5 h-5" />
              <span>Discuss</span>
              <Image 
              width={200}
              height={200}
              src={Arrow} alt="Arrow" className="w-3 h-3" />
            </button>
          </div>

          {/* Teal Divider Line */}
          <div className="mt-4 mx-6 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60 shadow-lg"></div>
        </div>
      </div>
    </>
  );
}
