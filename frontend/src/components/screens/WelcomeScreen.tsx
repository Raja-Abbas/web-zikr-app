"use client";

import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Dua from "../../../public/dua.png";
import Pray from "../../../public/pray.png";
import SpritualReminder from "../../../public/spiritual-reminder.png";
import Leave from "../../../public/leave.png";

interface WelcomeScreenProps {
  // Props for state management
  setShowDiscussMenu: (value: boolean) => void;
  isAuthenticated: boolean;
  setShowWelcomeScreen: (value: boolean) => void;
  setShowAuthenticDuaSelection: (value: boolean) => void;
  setShowCustomDuaGeneration: (value: boolean) => void;
  setShowSpiritualReminder: (value: boolean) => void;
  chatInput: string;
  setChatInput: (value: string) => void;
  handleChatSubmit: () => void;
}

export default function WelcomeScreen({
  setShowDiscussMenu,
  isAuthenticated,
  setShowWelcomeScreen,
  setShowAuthenticDuaSelection,
  setShowCustomDuaGeneration,
  setShowSpiritualReminder,
  chatInput,
  setChatInput,
  handleChatSubmit,
}: WelcomeScreenProps) {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Green Leaf Icon in top-left corner - Menu/Back Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(
            "🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true"
          );
          console.log("🍃 Current showDiscussMenu state:", false);
          console.log("🍃 Current isAuthenticated state:", isAuthenticated);
          setShowDiscussMenu(true);
          console.log("🍃 showDiscussMenu state should now be true");
        }}
        className="absolute top-6 sm:top-8 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
      >
        <Image 
              width={200}
              height={200}
              src={Leave} alt="Leave" className="w-10 h-10" />
      </button>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-4 sm:px-6 py-8">
        {/* Header & Title Area */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Arabic Title - Stylized Green Font */}
          <div className="mb-3 sm:mb-4">
            <div className="text-5xl sm:text-6xl md:text-7xl text-green-400 font-arabic mb-2">
              <Image 
              src={Logo} alt="Logo-Image" width="100" height="100" />
            </div>
          </div>

          {/* English Title - Centered Below Arabic */}
          {/* <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wider">
          My.Zikr
        </h1> */}
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
              className="w-full bg-slate-900 text-white placeholder-purple-300 rounded-2xl py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
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

        {/* Continue Button - Navigate to Personalization */}
        {/* <div className="w-full max-w-lg mt-6 sm:mt-8">
          <button
            onClick={handleContinue}
            className="w-full bg-[#1B4332] text-white border-2 border-[#2D5A4F] px-6 py-4 rounded-[999px] flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-[#2D5A4F] shadow-lg"
          >
            <span className="text-base sm:text-lg font-medium">
              Continue to Personalization
            </span>
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}
