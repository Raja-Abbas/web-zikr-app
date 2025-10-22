"use client";

import Image from "next/image";
import Leave from "../../../public/leave.png";
import ZikrBot from "../../../public/zikr-bot.png";
import Discuss from "../../../public/discuss.png";

interface SpiritualReminderScreenProps {
  // Props for state management
  setShowSpiritualReminder: (value: boolean) => void;
  setShowReminderContent: (value: boolean) => void;
  setSelectedReminderCategory: (value: string) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  selectedReminderCategory: string;
  showReminderContent: boolean;
  reminderContent: {
    [key: string]: {
      title: string;
      description: string;
      downloadLink: string;
    };
  };
  handleReminderCategorySelect: (category: string) => void;
  handleReminderAction: (action: string) => void;
}

export default function SpiritualReminderScreen({
  setShowSpiritualReminder,
  setShowReminderContent,
  setSelectedReminderCategory,
  setShowHomeScreen,
  setShowDiscussMenu,
  selectedReminderCategory,
  showReminderContent,
  reminderContent,
  handleReminderCategorySelect,
  handleReminderAction,
}: SpiritualReminderScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar */}
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setShowSpiritualReminder(false);
              setShowReminderContent(false);
              setSelectedReminderCategory("Wudu steps");
              setShowHomeScreen(true);
            }}
            className="text-white text-2xl hover:text-gray-300 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="hover:scale-110 transition-transform"
          >
            <svg
              className="w-6 h-6 text-green-400 hover:text-green-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </button>
        </div>
        

        {/* Right: Current Mode Indicator */}
        <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
          <span className="text-white text-sm">≈</span>
          <span className="text-white text-sm font-medium">
            Spiritual reminder
          </span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-24">
          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-start space-x-3 mb-6">
              {/* Zikr bot logo/icon */}
              <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>

              {/* Chat Bubble */}
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  That&apos;s great! Please find below the Reminders I can
                  help you with. May Allah ease your journey and help you
                  memorise them. Amine
                </p>
              </div>
            </div>
          </div>

          {/* Reminder Option Pills (Selection Choices) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8">
            <div className="flex flex-wrap gap-3 justify-items-center">
              {[
                "Wudu steps",
                "Ghusl steps",
                "Prayer steps",
                "99 names of Allah",
                "Istikhara steps",
                "Tachahhoud",
                "Dhikr & Tasbih",
                "Another one",
                "40 Rabbana",
                "Something else",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleReminderCategorySelect(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedReminderCategory === category
                      ? "bg-slate-800 text-white"
                      : "bg-cream text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display Card (New Content Area) */}
          {showReminderContent &&
            reminderContent[
              selectedReminderCategory as keyof typeof reminderContent
            ] && (
              <div className="w-full max-w-4xl mx-auto px-6 mb-8">
                <div className="bg-cream rounded-2xl p-8 shadow-lg">
                  {/* Title/Context */}
                  <div className="flex items-center space-x-2 mb-6">
                    <h3 className="text-slate-800 text-xl font-semibold">
                      {
                        reminderContent[
                          selectedReminderCategory as keyof typeof reminderContent
                        ].title
                      }
                    </h3>
                    <span className="text-slate-800">→</span>
                  </div>

                  {/* Instructional Text */}
                  <div className="mb-6">
                    <p className="text-gray-800 text-base leading-relaxed">
                      {
                        reminderContent[
                          selectedReminderCategory as keyof typeof reminderContent
                        ].description
                      }
                    </p>
                  </div>

                  {/* Download Link */}
                  <div className="mb-8">
                    <a
                      href="#"
                      className="text-blue-800 text-base font-medium hover:text-blue-600 transition-colors underline"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(
                          "Download PDF:",
                          selectedReminderCategory
                        );
                      }}
                    >
                      {
                        reminderContent[
                          selectedReminderCategory as keyof typeof reminderContent
                        ].downloadLink
                      }
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() =>
                        handleReminderAction("Another reminder")
                      }
                      className="bg-cream border border-gray-400 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Another reminder
                    </button>

                    <button
                      onClick={() => handleReminderAction("Discuss")}
                      className="bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex items-center space-x-2"
                    >
                      <span>≈</span>
                      <span>Discuss</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Debug Back Button */}
      <button
        onClick={() => {
          setShowSpiritualReminder(false);
          setShowReminderContent(false);
          setSelectedReminderCategory("Wudu steps");
          setShowHomeScreen(true);
        }}
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button>
    </div>
  );
}
