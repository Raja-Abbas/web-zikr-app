"use client";

import Image from "next/image";

interface AuthenticDuasGridScreenProps {
  // Props for state management
  setShowAuthenticDuasGrid: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  authenticDuaCategories: Array<{
    id: number;
    name: string;
    chapters: string;
    icon: string;
  }>;
  handleDuaCategoryGridSelect: (category: string) => void;
  handleDiscussClick: () => void;
}

export default function AuthenticDuasGridScreen({
  setShowAuthenticDuasGrid,
  setShowHomeScreen,
  setShowDiscussMenu,
  authenticDuaCategories,
  handleDuaCategoryGridSelect,
  handleDiscussClick,
}: AuthenticDuasGridScreenProps) {
  return (
    <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar */}
      <div className="flex items-center justify-between w-full px-6 py-4 mb-6 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowAuthenticDuasGrid(false);
              setShowHomeScreen(true);
            }}
            className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-10 left-16"
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
        </div>

        {/* Center Title */}
        <h1 className="text-white text-xl font-semibold">
          Authentic douas
        </h1>

        {/* Right: Search icon */}
        <button className="text-white text-xl hover:text-gray-300 transition-colors">
          <svg
            className="w-6 h-6"
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

      {/* Subtitle */}
      <div className="flex items-center justify-between w-full px-6 mb-8">
        <p className="text-white text-sm text-center flex-1">
          Douas to connect to Allah and to find comfort with heartfelt words
        </p>
        <button className="text-white text-lg hover:text-gray-300 transition-colors ml-4">
          <Image 
          width={200}
          height={200}
          src="/AuthenticDuas/settings.png" alt="Settings" className="w-5 h-5" />
        </button>
      </div>

      {/* Category Grid (Main Content) - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 pb-24">
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {authenticDuaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleDuaCategoryGridSelect(category.name)}
                className="flex flex-col items-center space-y-3 p-4 text-white hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-colors"
              >
                {/* Circular Icon */}
                <div className="w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={36}
                    height={36}
                    className="opacity-90"
                  />
                </div>

                {/* Category Name */}
                <span className=" text-sm font-medium text-center">
                  {category.name}
                </span>

                {/* Chapter Count */}
                <span className="text-xs opacity-50 text-center">
                  {category.chapters}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-6 pb-8">
          <div className="text-center mb-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              Discover the wall of douas
            </h3>
            <p className="text-white text-sm opacity-90">
              Find out douas that people made and support them by saying
              &apos;Amine&apos;.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                handleDiscussClick();
              }}
              className="bg-[#35458a] border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2"
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

      {/* Debug Back Button */}
      <button
        onClick={() => {
          setShowAuthenticDuasGrid(false);
          setShowHomeScreen(true);
        }}
        className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button>
    </div>
  );
}
