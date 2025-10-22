"use client";

import Image from "next/image";
import Arrow from "../../../public/arrow.png";
import Leave from "../../../public/leave.png";
import Dua from "../../../public/dua.png";
import ZikrBot from "../../../public/zikr-bot.png";
import Discuss from "../../../public/discuss.png";

interface AuthenticDuaSelectionScreenProps {
  // Props for state management
  setShowAuthenticDuaSelection: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  selectedDuaCategory: string;
  setSelectedDuaCategory: (value: string) => void;
  showLocalDuaContent: boolean;
  duaContent: {
    [key: string]: {
      arabic: string;
      transliteration: string;
      translation: string;
      source: string;
    };
  };
  gridDuaContentRef: React.RefObject<HTMLDivElement>;
  handleDuaCategorySelect: (category: string) => void;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  handlePlayPause: () => void;
  handleDuaAction: (action: string) => void;
}

export default function AuthenticDuaSelectionScreen({
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  setShowDiscussMenu,
  selectedDuaCategory,
  setSelectedDuaCategory,
  showLocalDuaContent,
  duaContent,
  gridDuaContentRef,
  handleDuaCategorySelect,
  isPlaying,
  setIsPlaying,
  handlePlayPause,
  handleDuaAction,
}: AuthenticDuaSelectionScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar - Mobile Responsive */}
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon - Mobile Responsive */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowAuthenticDuaSelection(false);
              setShowHomeScreen(true);
            }}
            className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-10 left-16"
          >
            <Image
              src={Arrow}
              width={200}
              height={200}
              alt="ArrowImage"
              className="h-6 w-6 rotate-180"
            />
          </button>
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="hover:scale-110 transition-transform absolute top-5 left-5"
          >
            <Image
            width={200}
            height={200} 
            src={Leave} alt="Leave" className="w-10 h-10" />
          </button>
        </div>

        {/* Right: Current Mode Indicator - Mobile Responsive */}
        <div className="bg-[#112b1f] border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2">
          <Image 
          width={200}
          height={200}
          src={Dua} alt="Dua" className="w-5 h-5" />
          <span className="text-white text-xl sm:text-xl font-medium">
            Authentic dua
          </span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-10">
          {/* Chat Message (Bot's Response) - Mobile Responsive */}
          <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6">
            <div className="flex items-end space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {/* Zikr bot logo/icon - Mobile Responsive */}
              <div className="bg-teal-900 rounded-full flex-shrink-0 mt-5">
                <Image
              width={200}
              height={200}
                  src={ZikrBot}
                  alt="BotImage"
                  className="w-8 h-8 rounded-full"
                />
              </div>

              {/* Chat Bubble - Mobile Responsive */}
              <div className="bg-[#0a3a30] border border-[#216b34] bg-opacity-80 rounded-full rounded-bl-sm p-4 sm:p-6 max-w-full sm:max-w-2xl">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Welcome! Here I can help you with duas from Hisnul Muslim
                  and from the Holy Qur&apos;an. Please choose below with
                  dua you would like to read.
                </p>
              </div>
            </div>
          </div>

          {/* Dua Option Pills (Selection Choices) - Mobile Responsive */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2">
              {[
                "Anxiety",
                "Sadness",
                "To protect kids",
                "When entering home",
                "For forgiveness",
                "For guidance",
                "When entering Toilet",
                "Morning and evening duas",
                "For sickness",
                "When waking up at night",
                "Another one",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleDuaCategorySelect(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedDuaCategory === category
                      ? "bg-[#0f1944] border border-[#173b2a] font-bold text-white"
                      : "bg-cream text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dua Display Card (Content Area) - Mobile Responsive */}
          {showLocalDuaContent &&
            duaContent[selectedDuaCategory as keyof typeof duaContent] && (
              <div
                ref={gridDuaContentRef}
                className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8"
              >
                <div className="p-4 sm:p-8 shadow-lg">
                  {/* Title/Context - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-white text-right bg-[#0f1944] border border-[#173b2a] text-xs sm:text-sm mb-3 sm:mb-4 w-fit px-2 py-2 rounded-full ml-auto">
                      {selectedDuaCategory}
                    </p>
                  </div>

                  {/* Arabic Text - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-[#92c6aa] text-[12px] sm:text-2xl md:text-3xl font-arabic leading-relaxed mb-4 sm:mb-6">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].arabic
                      }
                    </p>
                  </div>

                  {/* Transliteration - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-white italic text-[12px] sm:text-lg leading-relaxed">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].transliteration
                      }
                    </p>
                  </div>

                  {/* English Translation - Mobile Responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-[#f9f6dc] italic text-[12px] sm:text-base leading-relaxed">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].translation
                      }
                    </p>
                  </div>

                  {/* Source Reference - Mobile Responsive */}
                  <div className="text-right mb-6 sm:mb-8">
                    <p className="text-gray-500 text-xs sm:text-sm max-w-[270px] ml-auto">
                      {
                        duaContent[
                          selectedDuaCategory as keyof typeof duaContent
                        ].source
                      }
                    </p>
                  </div>

                  {/* Media Controls - Mobile Responsive */}
                  <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" />
                      </svg>
                    </button>

                    <button
                      onClick={handlePlayPause}
                      className="bg-teal-800 text-white p-3 sm:p-4 rounded-full hover:bg-teal-900 transition-colors"
                    >
                      {isPlaying ? (
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                      )}
                    </button>

                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18,5.75L22.25,10H19V16H12.5L10.5,18H19A2,2 0 0,0 21,16V10H24.25L20,5.75M6,18.25L1.75,14H5V8H11.5L13.5,6H5A2,2 0 0,0 3,8V14H0.75L5,18.25Z" />
                      </svg>
                    </button>
                  </div>

                  {/* Action Buttons - Mobile Responsive */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Row 1 - Mobile Responsive */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {[
                        "Save it",
                        "Share it",
                        "Pounder it",
                        "Another one",
                      ].map((action) => (
                        <button
                          key={action}
                          onClick={() => handleDuaAction(action)}
                          className="bg-[#0a3a30] border border-[#173b2a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-700 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>

                    {/* Row 2 - Mobile Responsive */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      <button
                        onClick={() =>
                          handleDuaAction("The whole collection")
                        }
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                      >
                        The whole collection
                      </button>
                      <button
                        onClick={() => handleDuaAction("Main menu")}
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                      >
                        Main menu
                      </button>
                      <button
                        onClick={() => handleDuaAction("Discuss")}
                        className="bg-[#0a3a30] border border-[#173b2a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors flex items-center space-x-1 sm:space-x-2"
                      >
                        <Image
                          src={Discuss}
                          alt="Discuss"
              width={200}
              height={200}
                          className="w-5 h-5"
                        />
                        <span>Discuss</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Debug Back Button */}
      <button
        onClick={() => {
          setShowAuthenticDuaSelection(false);
          setShowHomeScreen(true);
        }}
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button>
    </div>
  );
}
