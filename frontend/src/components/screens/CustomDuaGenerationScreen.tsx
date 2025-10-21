"use client";

import Image from "next/image";

interface CustomDuaGenerationScreenProps {
  // Props for state management
  setShowCustomDuaGeneration: (value: boolean) => void;
  setShowHomeScreen: (value: boolean) => void;
  setShowDiscussMenu: (value: boolean) => void;
  showGeneratedDua: boolean;
  customDuaRequest: string;
  setCustomDuaRequest: (value: string) => void;
  handleCustomDuaSubmit: () => void;
  handleCustomDuaAction: (action: string) => void;
}

export default function CustomDuaGenerationScreen({
  setShowCustomDuaGeneration,
  setShowHomeScreen,
  setShowDiscussMenu,
  showGeneratedDua,
  customDuaRequest,
  setCustomDuaRequest,
  handleCustomDuaSubmit,
  handleCustomDuaAction,
}: CustomDuaGenerationScreenProps) {
  return (
    <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
      {/* Header/Top Bar */}
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6 pt-8 sm:pt-4">
        {/* Left: Back arrow and green leaf icon */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowCustomDuaGeneration(false);
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
            onClick={() => setShowDiscussMenu(true)}
            className="hover:scale-110 transition-transform absolute top-5 left-5"
          >
            <Image src="/leave.png" alt="Leave" className="w-10 h-10" />
          </button>
        </div>

        {/* Right: Current Mode Indicator */}
        <div className="cursor-pointer bg-[#0f1944] text-white border-2 border-[#173b2a] px-4 sm:px-6 py-1 sm:py-1 rounded-[999px] flex flex-row items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-[#3B82F6] shadow-lg">
          <Image src="/Pray.svg" alt="Pray" className="w-4 h-4" />
          <span className="text-[13px] sm:text-[13px] font-medium mt-1">
            Custom dua for my situation
          </span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pb-24">
          {/* Conversation Flow */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8 space-y-6">
            {/* Bot Message 1 (Prompt) */}
            <div className="flex items-end space-x-3">
              <div className="bg-teal-700 rounded-full flex-shrink-0">
                <Image
                  src="/zikrBot.png"
                  alt="ZikrBot"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="bg-[#0a3a30] text-center border border-[#216b34] rounded-full rounded-bl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  Please write down what is going on so that i can help you
                  explain it to Allah. Always have trust in Him and never
                  forget He is the best of planners.
                </p>
              </div>
            </div>

            {/* User Message 1 (Request) - Only show if request is submitted */}
            {showGeneratedDua && (
              <div className="flex justify-end">
                <div className="bg-slate-800 rounded-full p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    {customDuaRequest}
                  </p>
                </div>
              </div>
            )}

            {/* Bot Message 2 (Generated Dua - Introductory Text) - Only show if dua is generated */}
            {showGeneratedDua && (
              <div className="flex items-end space-x-3">
                <div className="bg-teal-700 rounded-full flex-shrink-0">
                  <Image
                    src="/zikrBot.png"
                    alt="ZikrBot"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="bg-[#0a3a30] border border-[#216b34] rounded-3xl text-center rounded-bl-sm p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    Please find below your custom dua. I hope it reflects
                    what your heart feels: <br />
                    <br />
                    Ya Allah, In this moment of uncertainty and longing, I
                    turn to You, the Provider, Ar-Razzāq. I seek Your
                    guidance and support as I search for a job that will not
                    only fulfill my needs but also allow me to contribute
                    positively to the world around me. Grant me the strength
                    to persevere through this challenging time, and fill my
                    heart with hope and patience.
                    <br />
                    Please bless me with clarity in my path and surround me
                    with supportive people who can guide me. May I find a
                    job that brings me joy and fulfillment, and may it be a
                    means of sustenance for myself and my loved ones.
                    <br />
                    <br />
                    Ya Allah, You know what lies within hearts — please
                    accept this supplication. Ameen.
                  </p>
                </div>
              </div>
            )}

            {/* Bot Message 3 (Generated Dua - Content) - Only show if dua is generated */}
            {/* {showGeneratedDua && (
              <div className="flex items-end space-x-3">
                <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <div className="bg-teal-800 bg-opacity-80 rounded-full rounded-bl-sm p-6 max-w-3xl">
                  <div className="text-white text-base leading-relaxed space-y-4">
                    <p>
                      Ya Allah, In this moment of uncertainty and longing, I
                      come before You with a heart full of hope and trust in
                      Your divine wisdom.
                    </p>
                    <p>
                      You are Ar-Razzaq, the Provider, and I know that all
                      sustenance flows from Your generous hands. I seek Your
                      guidance in finding meaningful work that will not only
                      provide for my needs but also allow me to serve Your
                      creation with dignity and purpose.
                    </p>
                    <p>
                      Grant me strength during this time of searching,
                      patience when doors seem closed, and wisdom to
                      recognize the opportunities You place before me. Help
                      me to prepare myself with the skills and knowledge
                      needed, and open the hearts of those who might offer
                      me employment.
                    </p>
                    <p>
                      Ya Allah, surround me with supportive people who will
                      encourage me in this journey, and protect me from
                      despair and anxiety. Remind me that Your timing is
                      perfect, and that what is meant for me will never pass
                      me by.
                    </p>
                    <p>
                      Make this period of waiting a time of growth and
                      reflection, and when You bless me with work, help me
                      to be grateful and to use this opportunity to draw
                      closer to You.
                    </p>
                    <p className="font-medium">
                      Ya Allah, You know what lies within hearts — please
                      accept this supplication. Ameen.
                    </p>
                  </div>
                </div>
              </div>
            )} */}

            {/* Bot Message 4 (Closing Advice) - Only show if dua is generated */}
            {showGeneratedDua && (
              <div className="flex items-end space-x-3">
                <div className="bg-teal-700 rounded-full flex-shrink-0">
                  <Image
                    src="/zikrBot.png"
                    alt="ZikrBot"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="bg-[#0a3a30] border text-center border-[#216b34] rounded-full rounded-bl-sm p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    Always do your part and leave the rest to Allah. Do your
                    best and keep tawwākul
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input Area or Action Buttons */}
          {!showGeneratedDua ? (
            /* Text Input Area (Before Dua Generation) */
            <div className="w-full max-w-4xl mx-auto px-6">
              <div className="relative">
                <input
                  type="text"
                  value={customDuaRequest}
                  onChange={(e) => setCustomDuaRequest(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleCustomDuaSubmit()
                  }
                  placeholder="Write down what you need like I need help to ..."
                  className="w-full bg-slate-900 text-white placeholder-purple-300 rounded-2xl py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                />
                <button
                  onClick={handleCustomDuaSubmit}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            /* Action Buttons (After Dua Generation) */
            <div className="w-full max-w-4xl mx-auto px-3">
              <div className="flex flex-wrap justify-center gap-3">
                {["Save it", "Share it", "Another one", "Main menu"].map(
                  (action) => (
                    <button
                      key={action}
                      onClick={() => handleCustomDuaAction(action)}
                      className="bg-[#0a3a30] border border-[#173b2a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
                    >
                      {action}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Debug Back Button */}
      <button
        onClick={() => {
          setShowCustomDuaGeneration(false);
          setCustomDuaRequest("");
          setShowHomeScreen(true);
        }}
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
      >
        ← Back to Home
      </button>
    </div>
  );
}
