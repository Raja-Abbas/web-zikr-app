"use client";

import React from 'react';
import Image from 'next/image';

interface DuaContentViewerScreenProps {
  profileDuaContent: Record<string, {
    title: string;
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  }>;
  selectedDuaCategory: string;
  setShowDiscussMenu: (show: boolean) => void;
  setShowAuthenticDuaSelection: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  handleDiscussClick: () => void;
}

const DuaContentViewerScreen: React.FC<DuaContentViewerScreenProps> = ({
  profileDuaContent,
  selectedDuaCategory,
  setShowDiscussMenu,
  setShowAuthenticDuaSelection,
  setShowHomeScreen,
  handleDiscussClick,
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-screen w-full max-w-none bg-gradient-to-b from-[#0D4A42] to-[#0B1E3A] overflow-hidden">
      {/* Header/Top Bar - Like in image */}
      <div className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4">
        {/* Left: Back arrow and green leaf icon - Mobile Responsive */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => {
              setShowAuthenticDuaSelection(false);
              setShowHomeScreen(true);
            }}
            className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-16 left-2"
          >
            <Image
              src="/arrow.svg"
              alt="ArrowImage"
     height="200" width="200"         className="h-6 w-6 rotate-180"
            />
          </button>
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="hover:scale-110 transition-transform absolute top-2 left-2"
          >
            <Image src="/leave.png" alt="Leave"
width="200"
height="200" className="w-10 h-10" />
          </button>
        </div>

        {/* Title - Mobile Responsive */}
        <h1 className="text-white absolute top-16 left-10 text-lg sm:text-lg md:text-lg font-medium text-center flex-1 px-2">
          {profileDuaContent[
            selectedDuaCategory as keyof typeof profileDuaContent
          ]?.title || selectedDuaCategory}
        </h1>

        {/* Right Icons - Like in image - Mobile Responsive */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="text-white text-xs sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <span className="font-bold">Aa</span>
          </button>
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
          <button className="text-white text-sm sm:text-lg md:text-lg hover:text-gray-300 transition-colors">
            <span>⋯</span>
          </button>
        </div>
      </div>

      {/* Dua Content Display - Scrollable - Like in image - Mobile Responsive */}
      <div className="flex-1 overflow-y-auto mt-20">
        <div className="px-3 sm:px-4 pb-0">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            {profileDuaContent[
              selectedDuaCategory as keyof typeof profileDuaContent
            ] && (
              <>
                {/* Arabic Text - Large and centered - Mobile Responsive */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-[#92c6aa] text-[15.8px] font-arabic leading-relaxed text-center">
                    {
                      profileDuaContent[
                        selectedDuaCategory as keyof typeof profileDuaContent
                      ].arabic
                    }
                  </p>
                </div>

                {/* Transliteration - Italic - Mobile Responsive */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-white text-[15.8px] italic leading-relaxed text-center">
                    {
                      profileDuaContent[
                        selectedDuaCategory as keyof typeof profileDuaContent
                      ].transliteration
                    }
                  </p>
                </div>

                {/* English Translation - Mobile Responsive */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-[#f9f6dc] text-[15.8px] leading-relaxed text-center">
                    {
                      profileDuaContent[
                        selectedDuaCategory as keyof typeof profileDuaContent
                      ].translation
                    }
                  </p>
                </div>

                {/* Source Reference - Mobile Responsive */}
                <div className="text-left mb-6 sm:mb-8">
                  <p className="text-gray-500 text-xs sm:text-sm max-w-[270px] ml-auto">
                    {
                      profileDuaContent[
                        selectedDuaCategory as keyof typeof profileDuaContent
                      ].source
                    }
                  </p>
                </div>
              </>
            )}

            {/* Audio Controls - Like in image - Mobile Responsive */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-12 sm:mb-16">
              {/* Previous Button - Mobile Responsive */}
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play/Pause Button - Large circular - Mobile Responsive */}
              <button className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-black text-2xl sm:text-3xl hover:bg-gray-100 transition-colors shadow-lg">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Next Button - Mobile Responsive */}
              <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Progress Indicator - Small teal circle */}
            <div className="flex justify-center mb-8">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            </div>

            {/* Shuffle/Repeat Icon */}
            <div className="flex justify-center mb-12">
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Discuss Button - Like in image - Mobile Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 right-8 transform">
        <button
          onClick={() => {
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
  );
};

export default DuaContentViewerScreen;
