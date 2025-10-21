"use client";

interface AuthenticDuaCategoriesScreenProps {
  // Props for state management
  setShowDiscussMenu: (value: boolean) => void;
  handleBackFromAuthenticDuaCategories: () => void;
  selectedDuaCategory: string;
  setSelectedDuaCategory: (value: string) => void;
  handleToProtectKidsCategorySelect: (category: string) => void;
  duaContentRef: React.RefObject<HTMLDivElement>;
  duaContent: {
    [key: string]: {
      arabic: string;
      transliteration: string;
      translation: string;
      source: string;
    };
  };
  handleToProtectKidsDuaAction: (action: string) => void;
}

export default function AuthenticDuaCategoriesScreen({
  setShowDiscussMenu,
  handleBackFromAuthenticDuaCategories,
  selectedDuaCategory,
  setSelectedDuaCategory,
  handleToProtectKidsCategorySelect,
  duaContentRef,
  duaContent,
  handleToProtectKidsDuaAction,
}: AuthenticDuaCategoriesScreenProps) {
  return (
    <div className="h-screen bg-gradient-to-b from-[#0D3B2E] to-[#0B1E3A] flex flex-col animate-fadeIn overflow-hidden">
      {/* Header - Mobile Responsive */}
      <div className="bg-[#134E4A] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Left side - Back arrow and leaf icon - Mobile Responsive */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="text-green-400 text-base sm:text-lg hover:text-green-300 transition-colors"
          >
            🍃
          </button>
          <button
            onClick={handleBackFromAuthenticDuaCategories}
            className="text-white hover:text-green-400 transition-colors"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Right side - Authentic dua label - Mobile Responsive */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-white font-medium text-sm sm:text-base">
            Authentic dua
          </span>
          <span className="text-green-400 text-xs sm:text-sm">🤲</span>
        </div>
      </div>

      {/* Content - Mobile Responsive - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 sm:px-4 py-4 sm:py-6 pb-24">
          {/* Initial Chat Bubble - Mobile Responsive */}
          <div className="mb-4 sm:mb-6">
            <div className="bg-[#1A5A4F] rounded-[20px] p-3 sm:p-4 text-white max-w-xs sm:max-w-md">
              <p className="text-xs sm:text-sm leading-relaxed">
                That&apos;s great! I can help you with duas from Hisnul
                Muslim and from the Holy Qur&apos;an. Please choose below
                with dua you would like to read.
              </p>
            </div>
          </div>

          {/* Horizontal Scrollable Buttons - Mobile Responsive */}
          <div className="mb-4 sm:mb-6">
            <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2">
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
                  onClick={() =>
                    handleToProtectKidsCategorySelect(category)
                  }
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedDuaCategory === category
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#F5F0E6] text-[#0B1E3A] hover:bg-[#E5DDD3]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dua Content Display - Shows when category is selected */}
          {selectedDuaCategory && (
            <div ref={duaContentRef} className="mt-6">
              {selectedDuaCategory === "To protect kids" && (
                <div>
                  {/* Category Title - Mobile Responsive */}
                  <div className="mb-4 sm:mb-6 text-center">
                    <h2 className="text-white text-base sm:text-lg font-medium">
                      To Protect Kids
                    </h2>
                    <p className="text-[#87CEEB] text-xs sm:text-sm mt-1">
                      Dua for protection of children
                    </p>
                  </div>

                  {/* Dua Text Display - Mobile Responsive */}
                  <div className="bg-[#1A1A2E] rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    {/* Arabic Text - Mobile Responsive */}
                    <div className="text-right mb-3 sm:mb-4">
                      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-arabic">
                        أَعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ
                        كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ
                        لَامَّةٍ
                      </p>
                    </div>

                    {/* Transliteration - Mobile Responsive */}
                    <div className="mb-3 sm:mb-4">
                      <p className="text-[#87CEEB] text-xs sm:text-sm italic leading-relaxed">
                        U&apos;īdhukumā bi-kalimāti l-lāhi t-tāmmati min
                        kulli shayṭānin wa hāmmatin, wa min kulli ʿaynin
                        lāmmatin.
                      </p>
                    </div>

                    {/* English Translation - Mobile Responsive */}
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-xs sm:text-sm leading-relaxed">
                        I seek protection for you from the perfect words of
                        Allah against every devil, from every harmful animal
                        (or thing) and from every evil eye.
                      </p>
                    </div>

                    {/* Reference - Mobile Responsive */}
                    <div>
                      <p className="text-[#9CA3AF] text-xs leading-relaxed">
                        [1] al-Bukhāri N°6312, voir Fath al-Bari 11/113, et
                        Muslim (N°2711, 4/2083).
                      </p>
                    </div>
                  </div>

                  {/* Audio Controls - Mobile Responsive */}
                  <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <button className="text-white hover:text-green-400 transition-colors">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                      </svg>
                    </button>

                    <button className="bg-green-800 hover:bg-green-900 text-white rounded-full p-3 sm:p-4 transition-colors">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <button className="text-white hover:text-green-400 transition-colors">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Placeholder for other categories - Mobile Responsive */}
              {selectedDuaCategory !== "To protect kids" &&
                selectedDuaCategory !== "" && (
                  <div className="text-center py-6 sm:py-8">
                    <p className="text-white text-xs sm:text-sm opacity-75 px-4">
                      Dua content for &quot;{selectedDuaCategory}&quot; will
                      be available soon.
                    </p>
                  </div>
                )}
            </div>
          )}

          {/* Instruction Text - Only show when no category is selected - Mobile Responsive */}
          {!selectedDuaCategory && (
            <div className="text-center px-4">
              <p className="text-white text-xs sm:text-sm opacity-75">
                Select a category above to view the corresponding dua
              </p>
            </div>
          )}
        </div>

        {/* Bottom Navigation/Action Bar - Mobile Responsive - Only show when dua is displayed */}
        {selectedDuaCategory === "To protect kids" && (
          <div className="bg-[#134E4A] px-3 sm:px-4 py-2 sm:py-3">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {[
                "Save it",
                "Share it",
                "Pounder it",
                "Another one",
                "The whole collection",
                "Main menu",
              ].map((action) => (
                <button
                  key={action}
                  onClick={() => handleToProtectKidsDuaAction(action)}
                  className="bg-[#0F3D34] text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium hover:bg-[#1A5A4F] transition-colors"
                >
                  {action}
                </button>
              ))}

              {/* Discuss button with chat icon - Mobile Responsive */}
              <button
                onClick={() => handleToProtectKidsDuaAction("Discuss")}
                className="bg-[#0F3D34] text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium hover:bg-[#1A5A4F] transition-colors flex items-center space-x-1"
              >
                <span>Discuss</span>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
