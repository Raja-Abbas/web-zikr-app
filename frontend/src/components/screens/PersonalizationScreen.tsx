"use client";

interface PersonalizationScreenProps {
  showPersonalizationScreen: boolean;
  setShowPersonalizationScreen: (show: boolean) => void;
  setShowWelcomeAdnanScreen: (show: boolean) => void;
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
  handleOptionSelect: (option: string) => void;
  customMessage: string;
  setCustomMessage: (message: string) => void;
  handleCustomMessageSubmit: () => void;
}

export default function PersonalizationScreen({
  showPersonalizationScreen,
  setShowPersonalizationScreen,
  setShowWelcomeAdnanScreen,
  selectedInterests,
  setSelectedInterests,
  handleOptionSelect,
  customMessage,
  setCustomMessage,
  handleCustomMessageSubmit,
}: PersonalizationScreenProps) {
  if (!showPersonalizationScreen) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b from-[#0D3B2E] to-[#0B1E3A] flex flex-col overflow-hidden">
      {/* Back Arrow */}
      <button
        onClick={() => {
          setShowPersonalizationScreen(false);
          setShowWelcomeAdnanScreen(true);
        }}
        className="absolute top-8 left-8 text-white text-2xl hover:text-green-400 transition-colors"
      >
        ←
      </button>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6 py-8">
        {/* Logo Section - Mobile Responsive */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Floating Leaf Icon - Mobile Responsive */}
          <div className="relative">
            <div className="absolute -top-1 sm:-top-2 -left-6 sm:-left-8 text-green-400 text-base sm:text-lg animate-pulse">
              🍃
            </div>

            {/* Arabic Calligraphy Logo - Mobile Responsive */}
            <div className="mb-3 sm:mb-4">
              <div className="text-4xl sm:text-5xl md:text-6xl text-white font-arabic mb-2 sm:mb-3">
                ذِكْر
              </div>
            </div>

            {/* App Name - Mobile Responsive */}
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-wider mb-6 sm:mb-8">
              My.Zikr
            </h1>
          </div>
        </div>

        {/* Main Chat Bubble with Tail - Mobile Responsive */}
        <div className="w-full max-w-xs sm:max-w-lg mb-6 sm:mb-8">
          <div className="relative">
            {/* Chat Bubble - Mobile Responsive */}
            <div className="bg-[#1A5A4F] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 text-white shadow-xl animate-fadeIn relative">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-normal">
                <span className="font-medium">Salam aleykoum dear</span>
                <br />
                <br />
                I am Zikr – your spiritual companion, here to support your
                spiritual journey with duas and reminders.
                <br />
                <br />
                Please tell me how I can be helpful to you today. Select a
                section below or tell me directly what you may need and I
                will do my best to assist you In Sha Allah.
              </p>

              {/* Chat Bubble Tail - Mobile Responsive */}
              <div className="absolute bottom-[-6px] sm:bottom-[-8px] left-6 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#1A5A4F] transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Option Buttons - Mobile Responsive */}
        <div className="w-full max-w-xs sm:max-w-lg space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {/* Authentic dua - Dark green with gold styling and glow - Mobile Responsive */}
          <button
            onClick={() => handleOptionSelect("authentic-dua")}
            className="w-full bg-[#0F3D34] text-[#FFD700] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
          >
            <span className="text-base sm:text-lg text-[#FFD700]">🤲</span>
            <span className="flex-1 text-left font-medium text-sm sm:text-base">
              Authentic dua
            </span>
          </button>

          {/* Custom dua for my situation - Darker purple/blue with light blue styling - Mobile Responsive */}
          <button
            onClick={() => handleOptionSelect("custom-dua")}
            className="w-full bg-[#1A1A4A] text-[#87CEEB] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="text-base sm:text-lg text-[#87CEEB]">✨</span>
            <span className="flex-1 text-left font-medium text-sm sm:text-base">
              Custom dua for my situation
            </span>
          </button>

          {/* Spiritual reminder - Off-white raised with brown styling - Mobile Responsive */}
          <button
            onClick={() => handleOptionSelect("spiritual-reminder")}
            className="w-full bg-[#F5F0E6] text-[#8B4513] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium border border-[#E5DDD3]"
          >
            <span className="text-base sm:text-lg text-[#8B4513]">🕋</span>
            <span className="flex-1 text-left font-medium text-sm sm:text-base">
              Spiritual reminder
            </span>
          </button>
        </div>

        {/* Input Section - Dark Rectangular Design - Mobile Responsive */}
        <div className="w-full max-w-xs sm:max-w-lg">
          <div className="relative">
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCustomMessageSubmit()
              }
              placeholder="Write down what you need like I need help to ..."
              className="w-full bg-[#1A1A2E] text-white placeholder-[#9CA3AF] rounded-[10px] sm:rounded-[12px] py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[13px] sm:text-[14px] md:text-[15px] shadow-inner"
            />
            <button
              onClick={handleCustomMessageSubmit}
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-white transition-colors duration-300 p-1"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
