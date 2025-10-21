"use client";

import React from 'react';
import Image from 'next/image';

interface InteriorDesignSettingsScreenProps {
  userSettings: {
    name: string;
    language: string;
    gender: string;
    reminderTime: string;
    duaOfTheDay: boolean;
    kindNotifications: boolean;
    wallNotifications: boolean;
    amineNotifications: boolean;
    updates: boolean;
    newsletter: boolean;
    textSize: number;
    sounds: boolean;
    cloudSave: boolean;
  };
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  setShowDiscussMenu: (show: boolean) => void;
  isAuthenticated: boolean;
  handleSettingChange: (setting: string, value: string | number | boolean) => void;
  handleSettingToggle: (setting: string) => void;
  handleDiscussClick: () => void;
  handleBackFromInteriorDesignSettings: () => void;
}

const InteriorDesignSettingsScreen: React.FC<InteriorDesignSettingsScreenProps> = ({
  userSettings,
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  setShowDiscussMenu,
  isAuthenticated,
  handleSettingChange,
  handleSettingToggle,
  handleDiscussClick,
  handleBackFromInteriorDesignSettings,
}) => {
  return (
    <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar */}
      <div className="flex items-center justify-center w-full px-6 py-4 mb-6 pt-8 sm:pt-4">
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
              className="h-6 w-6 rotate-180"
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
            <Image src="/leave.png" alt="Leave" className="w-10 h-10" />
          </button>
        </div>

        {/* Title */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
          </svg>
          <span className="text-white text-lg font-semibold">
            My interior design
          </span>
        </div>
      </div>

      {/* Instructional Text */}
      <div className="px-6 mb-8">
        <p className="text-white text-sm text-center font-bold">
          Customize your space so that you navigate according to what you
          love.
        </p>
      </div>

      {/* Settings Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Card 1: Name and Language */}
          <div className="">
            <div className="space-y-6">
              {/* Name Section */}
              <div className="bg-cream rounded-2xl px-4 py-2">
                <h3 className="text-gray-900 text-lg font-semibold mb-3">
                  How should you be called?
                </h3>
                <input
                  type="text"
                  className="w-full bg-none border-none border-gray-300 rounded-lg px-0 py-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your name here"
                />
              </div>

              {/* Language Section */}
              <div className="bg-cream rounded-2xl px-4 py-2">
                <h3 className="text-gray-900 text-lg font-semibold mb-3">
                  What is your preferred language?
                </h3>
                <div className="flex space-x-3 justify-between">
                  <button
                    onClick={() =>
                      handleSettingChange("language", "English")
                    }
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      userSettings.language === "English"
                        ? "bg-green-900 text-white"
                        : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() =>
                      handleSettingChange("language", "French")
                    }
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      userSettings.language === "French"
                        ? "bg-green-900 text-white"
                        : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    French
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Notifications */}
          <div className="bg-cream rounded-2xl px-4 py-2">
            <h3 className="text-gray-900 text-lg font-semibold">
              Notifications
            </h3>
            <h3 className="text-gray-900 border-b border-[#0a3a30] text-lg font-semibold mb-4">
              How do you preferred to be notified?
            </h3>

            {/* For duas section */}
            <div className="mb-6">
              <h4 className="text-gray-900 text-base font-medium mb-3">
                For duas:
              </h4>
              <div className="flex max-sm:w-full max-sm:justify-between flex-wrap gap-3 mb-4">
                <button className="bg-green-900 text-white px-4 py-2 rounded-full text-sm">
                  Morning Duas
                </button>
                <button className="bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-gray-50">
                  Evening Duas
                </button>
              </div>
              <button className="bg-white max-sm:w-full border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-gray-50">
                Dua of the day according to my mood
              </button>
            </div>

            {/* Toggles section */}
            <div className="space-y-2">
              {[
                { key: "wallNotifications", label: "For the wall of duas" },
                {
                  key: "amineNotifications",
                  label: "When someone says Amine",
                },
                { key: "updates", label: "To receive updates" },
                { key: "newsletter", label: "To receive heart newsletter" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-900 text-sm">
                    {item.label}
                  </span>
                  <button
                    onClick={() => handleSettingToggle(item.key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      userSettings[item.key as keyof typeof userSettings]
                        ? "bg-green-800"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        userSettings[item.key as keyof typeof userSettings]
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Screen 23 Content - Spiritual Profile */}
          <div className="">
            <h3 className="text-white text-lg font-semibold mb-2">
              Profil spirituel
            </h3>
            <div className="space-y-4 bg-cream rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-lg">
                  {userSettings.name}
                </span>
                <span className="text-gray-800 text-lg flex items-center gap-2">
                  {userSettings.gender}{" "}
                  <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-md">Langue</span>
                <span className="text-gray-600 text-lg flex items-center gap-2">
                  {userSettings.language}{" "}
                  <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Reminders & Notifications */}
          <div className="">
            <h3 className="text-white text-lg font-semibold mb-2">
              Rappels & notifications
            </h3>
            <div className="space-y-4 bg-cream rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-lg">
                  Time to receive your reminder
                </span>
                <span className="text-gray-600 text-lg flex items-center gap-2">
                  {userSettings.reminderTime}{" "}
                  <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-md">Doua du jour</span>
                <button
                  onClick={() => handleSettingToggle("duaOfTheDay")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userSettings.duaOfTheDay
                      ? "bg-green-800"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userSettings.duaOfTheDay
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-md">
                  Notifications bienveillantes
                </span>
                <button
                  onClick={() => handleSettingToggle("kindNotifications")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userSettings.kindNotifications
                      ? "bg-green-800"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userSettings.kindNotifications
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Display Preferences */}
          <div className="">
            <h3 className="text-white text-lg font-semibold mb-2">
              Préférences d&apos;affichage
            </h3>
            <div className="space-y-4 bg-cream rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-lg">Size of text</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={userSettings.textSize}
                    onChange={(e) =>
                      handleSettingChange(
                        "textSize",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-md">
                  Activate sounds
                </span>
                <button
                  onClick={() => handleSettingToggle("sounds")}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userSettings.sounds ? "bg-green-800" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userSettings.sounds
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Connection & Confidentiality */}
          <div className="">
            <h3 className="text-white text-lg font-semibold mb-2">
              Connexion & confidentialité
            </h3>
            <div className="">
              <div className="flex items-center justify-between p-6 bg-cream mb-2 rounded-2xl">
                <span className="text-gray-900 text-lg">
                  Save your notes on the cloud
                </span>
                <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
              </div>
              <button className="w-full py-3 bg-cream p-6 rounded-2xl rounded-lg text-xl font-medium hover:bg-opacity-50 transition-colors flex justify-between items-center">
                Delete my data{" "}
                <Image src="/arrowBlack.svg" alt="Arrow" className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-none p-6">
        <div className="flex justify-end">
          <button
            onClick={() => {
              handleDiscussClick();
            }}
            className="bg-[#35458a] border border-[#173b2a] rounded-full px-4 sm:px-4 py-2 sm:py-2 flex gap-2 items-center justify-center space-x-1 sm:space-x-2"
          >
            <Image src="/Discuss.svg" alt="Dua" className="w-5 h-5" />
            <span className="text-white text-sm sm:text-sm font-medium">
              Discuss
            </span>
            <Image src="/arrow.svg" alt="Arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Debug Back Button - Sticky positioned to avoid hiding content */}
      <div className="sticky top-4 left-4 z-50 pointer-events-none">
        <button
          onClick={handleBackFromInteriorDesignSettings}
          className="bg-gray-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm opacity-75 hover:opacity-100 transition-opacity pointer-events-auto"
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
};

export default InteriorDesignSettingsScreen;
