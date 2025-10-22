"use client";

import React from 'react';
import Image from 'next/image';

interface ChatbotDiscussionHubScreenProps {
  chatInput: string;
  setChatInput: (input: string) => void;
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  setShowDiscussMenu: (show: boolean) => void;
  isAuthenticated: boolean;
  handleQuickAction: (action: string) => void;
  handleChatSubmit: () => void;
  handleBackFromDiscussionHub: () => void;
}

const ChatbotDiscussionHubScreen: React.FC<ChatbotDiscussionHubScreenProps> = ({
  chatInput,
  setChatInput,
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  setShowDiscussMenu,
  isAuthenticated,
  handleQuickAction,
  handleChatSubmit,
  handleBackFromDiscussionHub,
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar */}
      <div className="flex items-center justify-between w-full px-6 py-4 mb-8 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowAuthenticDuaSelection(false);
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
                isAuthenticated
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

        {/* Center Title Pill */}
        <div className="bg-[#35458a] border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2">
          <Image 
              width={200}
              height={200}
          src="/Discuss.svg" alt="Dua" className="w-5 h-5" />
          <span className="text-white text-xl sm:text-xl font-medium">
            Discuss
          </span>
        </div>

        {/* Right: Empty space for balance */}
        <div className="w-6"></div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-24">
          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-end space-x-3">
              <div className="bg-teal-700 rounded-full flex-shrink-0">
                <Image
                  src="/zikrBot.png"
                  width="200"
                  height="200"
                  alt="ZikrBot"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="bg-[#0a3a30] rounded-full border border-[#216b34] bg-opacity-80 rounded-bl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  I am always here dear, how can i help you now? Please
                  sélect a topic below or tell me what you need.
                </p>
              </div>
            </div>
          </div>

          {/* Action Pills (Quick Links) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8">
            <div className="space-y-4 flex flex-wrap gap-x-2">
              {/* Row 1 (2 pills) */}
              <button
                onClick={() => handleQuickAction("See my saved duas")}
                className="bg-cream text-gray-900 px-6 py-0 h-10 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
              >
                See my saved duas
              </button>
              <button
                onClick={() => handleQuickAction("Talk to support")}
                className="bg-cream text-gray-900 px-6 py-0 h-10 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Talk to support
              </button>

              {/* Row 2 (2 pills) */}
              <button
                onClick={() => handleQuickAction("See the wall of duas")}
                className="bg-cream text-gray-900 px-6 py-0 h-10 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
              >
                See the wall of duas
              </button>
              <button
                onClick={() =>
                  handleQuickAction("See the whole duas collection")
                }
                className="bg-cream text-gray-900 px-6 py-0 h-10 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
              >
                See the whole duas collection
              </button>

              {/* Row 3 (1 pill) */}
              <button
                onClick={() =>
                  handleQuickAction("See the whole reminders collection")
                }
                className="bg-cream text-gray-900 px-6 py-0 h-10 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center max-w-xs w-full"
              >
                See the whole reminders collection
              </button>
            </div>
          </div>

          {/* Text Input Area (User Prompt) */}
          <div className="w-full max-w-4xl mx-auto px-6 pb-8 mt-auto">
            <div className="relative flex gap-[20px] items-center">
              <div className="relative w-full">
                {/* Custom multi-colored placeholder */}
                {!chatInput && (
                  <div className="absolute inset-x-0 top-4 font-medium text-center pointer-events-none text-sm sm:text-base">
                    <span className="text-[#35458a]">
                      Write down what you need like{" "}
                    </span>
                    <span className="text-[#c7eeff]">
                      I need help to ...
                    </span>
                  </div>
                )}

                {/* Actual textarea */}
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleChatSubmit()
                  }
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

      {/* Debug Back Button */}
      <button
        onClick={handleBackFromDiscussionHub}
        className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Previous Screen
      </button>
    </div>
  );
};

export default ChatbotDiscussionHubScreen;
