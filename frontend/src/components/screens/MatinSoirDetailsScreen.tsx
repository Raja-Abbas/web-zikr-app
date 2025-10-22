"use client";

import Image from "next/image";

interface MatinSoirDetailsScreenProps {
  // Props for state management
  setShowMatinSoirDetails: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  matinSoirDuas: Array<{
    id: number;
    title: string;
    count: string;
  }>;
  handleDiscussClick: () => void;
}

export default function MatinSoirDetailsScreen({
  setShowMatinSoirDetails,
  setShowHomeScreen,
  setShowDiscussMenu,
  matinSoirDuas,
  handleDiscussClick,
}: MatinSoirDetailsScreenProps) {
  return (
    <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-b from-[#0D4A42] to-[#0B1E3A] overflow-hidden">
      {/* Header - Mobile Responsive */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
        {/* Left: Green leaf icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(
              "🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true"
            );
            console.log(
              "🍃 Current showDiscussMenu state:",
              setShowDiscussMenu
            );
            console.log(
              "🍃 Current isAuthenticated state:",
              true
            );
            setShowDiscussMenu(true);
            console.log("🍃 showDiscussMenu state should now be true");
          }}
          className="absolute top-6 sm:top-8 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
        >
          <Image src="/leave.png" alt="Leave"
width="200"
height="200" className="w-10 h-10" />
        </button>
        {/* Center: Title - Mobile Responsive */}
        <h1
          className="text-white text-base sm:text-lg font-medium w-full text-center"
          style={{ fontFamily: "Inter, Poppins, sans-serif" }}
        >
          From morning & night
        </h1>

        {/* Right: Search icon */}
        <button className="hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Scrollable Dua List - Mobile Responsive */}
      <div className="flex-1 px-4 sm:px-6 pb-32 overflow-y-auto">
        <div className="space-y-1">
          {matinSoirDuas.map((dua, index) => (
            <div
              key={dua.id}
              className="flex items-center justify-between text-gray-300 hover:text-gray-600 py-3 sm:py-4 px-2 sm:px-3 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors cursor-pointer"
            >
              {/* Left: Number - Mobile Responsive */}
              <span className="text-xs sm:text-sm font-medium w-6 sm:w-8 flex-shrink-0">
                {dua.id}.
              </span>

              {/* Center: Dua title - Mobile Responsive */}
              <div className="flex-1 mx-2 sm:mx-4">
                <span className="text-sm sm:text-base leading-tight">
                  {dua.title}
                </span>
              </div>

              {/* Right: Count and arrow - Mobile Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <span className="text-gray-400 text-xs sm:text-sm">
                  ({dua.count})
                </span>
                {index === 0 && ( // Show arrow only on first item as active
                  <span className="text-teal-400 text-base sm:text-lg">
                    ➜
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Card - "Discover the wall of douas" - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A] to-transparent z-40">
        <div className="bg-[#0A1A2E] bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 shadow-2xl border-t border-[#374e1d]">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between space-y-3 sm:space-y-0">
            {/* Left: Text content - Mobile Responsive */}
            <div className="flex-1 pr-0 sm:pr-4">
              <h3 className="text-white font-bold text-base text-center sm:text-lg mb-1 sm:mb-2">
                Discover the wall of douas
              </h3>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                Find out douas that people made and support them by saying
                &apos;Amine&apos;.
              </p>
            </div>

            {/* Right: Discuss button - Mobile Responsive */}
            <button
              onClick={() => {
                setShowMatinSoirDetails(false);
                handleDiscussClick();
              }}
              className="bg-[#35458a] w-fit ml-auto justify-end border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2"
            >
              <Image 
              width={200}
              height={200}
              src="/Discuss.svg" alt="Dua" className="w-5 h-5" />
              <span className="text-white text-sm sm:text-sm font-medium">
                Discuss
              </span>
              <Image 
              width={200}
              height={200}
              src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Back button for debugging - Mobile Responsive - Positioned near leaf icon */}
      {/* <button
        onClick={() => {
          setShowMatinSoirDetails(false);
        }}
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button> */}
    </div>
  );
}
