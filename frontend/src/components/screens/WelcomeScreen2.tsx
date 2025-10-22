"use client";

import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Leave from "../../../public/leave.png";
import Dua from "../../../public/Dua.png";
import Pray from "../../../public/Pray.svg";
import SpritualReminder from "../../../public/spritual-reminder.png";

interface WelcomeScreenProps {
  showWelcomeScreen: boolean;
  setShowWelcomeScreen: (show: boolean) => void;
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowCustomDuaGeneration: (show: boolean) => void;
  setShowSpiritualReminder: (show: boolean) => void;
  setShowDiscussMenu: (show: boolean) => void;
  isAuthenticated: boolean;
  chatInput: string;
  setChatInput: (input: string) => void;
  handleChatSubmit: () => void;
}

export default function WelcomeScreen({
  showWelcomeScreen,
  setShowWelcomeScreen,
  setShowAuthenticDuaSelection,
  setShowCustomDuaGeneration,
  setShowSpiritualReminder,
  setShowDiscussMenu,
  isAuthenticated,
  chatInput,
  setChatInput,
  handleChatSubmit,
}: WelcomeScreenProps) {
  if (!showWelcomeScreen) return null;

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Green Leaf Icon in top-left corner - Menu/Back Button */}
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(
            "🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true"
          );
          console.log("🍃 Current isAuthenticated state:", isAuthenticated);
          setShowDiscussMenu(true);
          console.log("🍃 showDiscussMenu state should now be true");
        }}
        className="absolute top-6 sm:top-8 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
      >
        <Image src={Leave} alt="Leave" className="w-10 h-10" />
      </button> */}

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-4 sm:px-6 py-8">
        {/* Header & Title Area */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Arabic Title - Stylized Green Font */}
          <div className="mb-3 sm:mb-4">
            <div className="text-5xl sm:text-6xl md:text-7xl text-green-400 font-arabic mb-2">
              <Image src={Logo} alt="Logo-Image" width="100" height="100" />
            </div>
          </div>
        </div>

        {/* Welcome Message Box - Dark Green Background */}
        <div className="w-full max-w-lg mb-8 sm:mb-10">
          <div className="flex justify-center">
            <div className="bg-[#173b2a] rounded-2xl rounded-tl-sm p-5 sm:p-6 max-w-md shadow-lg">
              <p className="text-white text-base sm:text-lg font-bold mb-3 text-center">
                Salam aleykoum dear
              </p>
              <p className="text-white text-sm sm:text-base leading-relaxed text-center">
                I am Zikr – your spiritual companion, here to support your
                spiritual journey with duas and reminders. Please tell me
                how I can be helpful to you today. Select a section below or
                tell me directly what you may need and I will do my best to
                assist you In Sha Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Button Section - New Layout */}
        <div className="w-full max-w-lg mb-8 sm:mb-10">
          {/* Line 1 - Horizontal Pair */}
          <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
            {/* Authentic dua - Stadium Shape Dark Green */}
            <button
              onClick={() => {
                setShowWelcomeScreen(false);
                setShowAuthenticDuaSelection(true);
              }}
              className="gap-2 cursor-pointer bg-[#173b2a] text-white border-2 border-[#0a3a30] px-4 sm:px-6 py-1 sm:py-1 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-[#2D5A4F] shadow-lg"
            >
              <Image 
              width={200}
              height={200}
              src={Dua} alt="Dua" className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium mt-1">
                Authentic dua
              </span>
            </button>

            {/* Custom dua - Stadium Shape Dark Blue */}
            <button
              onClick={() => {
                setShowWelcomeScreen(false);
                setShowCustomDuaGeneration(true);
              }}
              className="flex-1 cursor-pointer bg-[#0f1944] text-white border-2 border-[#173b2a] px-4 sm:px-6 py-1 sm:py-1 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-[#3B82F6] shadow-lg"
            >
              <Image 
              width={200}
              height={200}
              src={Pray} alt="Pray" className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium mt-1">
                Custom dua for my situation
              </span>
            </button>
          </div>

          {/* Line 2 - Centered Single Button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowWelcomeScreen(false);
                setShowSpiritualReminder(true);
              }}
              className="bg-white cursor-pointer text-gray-800 border-2 border-gray-300 px-4 sm:px-4 py-1 sm:py-1 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-lg"
            >
              <Image
                src={SpritualReminder}
                alt="SpritualReminder"
                className="w-4 h-4"
              width={200}
              height={200}
              />
              <span className="text-xs sm:text-sm font-medium mt-1">
                Spiritual reminder
              </span>
            </button>
          </div>
        </div>

        {/* Input Bar - New Main Feature */}
        <div className="w-full max-w-lg">
          <div className="relative flex gap-[20px] items-center">
            <div className="relative w-full">
              {/* Custom multi-colored placeholder */}
              {!chatInput && (
                <div className="absolute inset-x-0 top-4 font-medium text-center pointer-events-none text-sm sm:text-base">
                  <span className="text-[#35458a]">
                    Write down what you need like{" "}
                  </span>
                  <span className="text-[#c7eeff]">I need help to ...</span>
                </div>
              )}

              {/* Actual textarea */}
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                className="w-full bg-[#0f1944] text-white rounded-full
           py-4 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border border-[#173b2a]
           focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
           focus:border-transparent text-xl sm:text-xl shadow-inner
           resize-none text-center h-[62px]"
              />
            </div>
            <button
              onClick={handleChatSubmit}
              className="relative right-3 cursor-pointer sm:right-4 top-1/2 transform rotate-[90deg] text-white hover:text-gray-300 transition-colors duration-300 p-1"
            >
              <svg
                className="w-10 h-10 sm:w-6 sm:h-6"
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
