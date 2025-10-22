"use client";

import React from 'react';
import Image from "next/image";

interface WriteDuaScreenProps {
  writeDuaText: string;
  setWriteDuaText: (text: string) => void;
  setShowWriteDuaScreen: (show: boolean) => void;
  setShowHomeScreen: (show: boolean) => void;
  handlePublishDua: () => void;
}

const WriteDuaScreen: React.FC<WriteDuaScreenProps> = ({
  writeDuaText,
  setWriteDuaText,
  setShowWriteDuaScreen,
  setShowHomeScreen,
  handlePublishDua,
}) => {
  return (
    <div className="flex-1 h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center px-6 py-6">
        {/* Left: Back arrow */}
        <button
          onClick={() => {
            setShowWriteDuaScreen(false);
            setShowHomeScreen(true);
          }}
          className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors absolute top-10 left-16"
        >
          <Image
            src="/arrow.svg"
            alt="ArrowImage"
              width={200}
              height={200}
            className="h-6 w-6 rotate-180"
          />
        </button>

        {/* Center: Title */}
        <h1 className="text-xl text-white font-semibold mt-2">
          Write a dua
        </h1>

        {/* Right: Empty space for balance */}
        <div className="w-8"></div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4 pb-24">
          {/* Description */}
          <div className="mb-8">
            <p className="text-white text-base leading-relaxed text-left">
              Write a doua and share it with the community and allow people
              to say Amine. Your doua will randomly be displayed after
              review.
            </p>
          </div>

          {/* Dua Input Box */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <textarea
                value={writeDuaText}
                onChange={(e) => setWriteDuaText(e.target.value)}
                placeholder="Yā Allah, I pray for every muslim in the world, for their well-beign, their sustenance, their Akhira and their whole family."
                className="w-full h-20 text-center bg-transparent text-black placeholder-black border-none focus:outline-none resize-none text-base leading-relaxed"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-8">
            <p className="text-white text-sm leading-relaxed text-center opacity-90">
              &ldquo;By publishing a dua, you agree not to include personal
              data, illicit or prohibited content, or material/financial
              requests. Shared duas are for spiritual support only and may
              be displayed anonymously to the community.&rdquo;
            </p>
          </div>

          {/* Publish Button */}
          <div className="flex justify-center">
            <button
              onClick={handlePublishDua}
              className="bg-[#F5F0E6] text-[#000] font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                fontFamily: "Inter, Poppins, sans-serif",
                boxShadow:
                  "0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteDuaScreen;
