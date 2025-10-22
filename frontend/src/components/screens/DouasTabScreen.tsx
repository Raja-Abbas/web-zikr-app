"use client";

interface DouasTabScreenProps {
  // Props for state management
  selectedDouaCategory: string;
  setSelectedDouaCategory: (value: string) => void;
  customDouaText: string;
  setCustomDouaText: (value: string) => void;
  setActiveTab: (tab: string) => void;
  setShowAuthenticDuasGrid: (value: boolean) => void;
  handleWallOfDuasClick: () => void;
}

export default function DouasTabScreen({
  selectedDouaCategory,
  setSelectedDouaCategory,
  customDouaText,
  setCustomDouaText,
  setActiveTab,
  setShowAuthenticDuasGrid,
  handleWallOfDuasClick,
}: DouasTabScreenProps) {
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
        <h1 className="text-xl sm:text-2xl text-white font-bold">Douas</h1>
        <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 py-2 pb-24">
          {/* Subtitle - Mobile Responsive */}
          <div className="mb-6 sm:mb-8 text-center">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Douas to connect to Allah and to find comfort with heartfelt
              words
            </p>
          </div>

          {/* Doua Categories (Pills/Tabs) */}
          <div className="mb-8">
            <div className="flex space-x-3 overflow-x-auto pb-2 justify-center">
              {["Authentic douas", "All", "For kids", "For Haj"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedDouaCategory(category);
                      if (category === "Authentic douas") {
                        setShowAuthenticDuasGrid(true);
                      }
                    }}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedDouaCategory === category
                        ? "bg-cream text-gray-900"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Custom douas Section */}
          <div className="mb-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-2">
              Custom douas
            </h2>
            <p className="text-white text-sm mb-4 leading-relaxed">
              What do you have in mind, let&apos;s us help you explain it to
              Allah
            </p>

            {/* Text Input Area */}
            <textarea
              value={customDouaText}
              onChange={(e) => setCustomDouaText(e.target.value)}
              placeholder="Write down you feeling like I need help to get a job..."
              className="w-full h-24 bg-slate-800 text-white placeholder-purple-300 rounded-lg p-4 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
          </div>

          {/* Most popular Douas asked Section */}
          <div className="mb-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-4">
              Most popular Douas asked
            </h2>

            {/* Suggestion Pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "I have an exam",
                "I want to marry",
                "I want a baby",
                "I need money for rent",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  className="bg-slate-800 text-white px-4 py-3 rounded-lg text-sm hover:bg-slate-700 transition-colors text-center"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Discover the wall of douas Section */}
          <div className="mb-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-2">
              Discover the wall of douas
            </h2>
            <p className="text-white text-sm mb-4 leading-relaxed">
              Find out douas that people made and support them by saying
              &apos;Amine&apos;.
            </p>

            {/* Navigation Button */}
            <button
              onClick={handleWallOfDuasClick}
              className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-white text-xl">🤲</span>
                <span className="text-white font-medium">
                  The wall of Duas
                </span>
              </div>
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
