"use client";

import { useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Image1 from "../../../public/image1.png";
import Image2 from "../../../public/image2.png";
import Image3 from "../../../public/image3.png";
import Image4 from "../../../public/image4.png";
import Image5 from "../../../public/image5.png";
import SelectedImage1 from "../../../public/image-light1.png";
import SelectedImage2 from "../../../public/image-light2.png";
import SelectedImage3 from "../../../public/image3.png";
import SelectedImage4 from "../../../public/image4.png";
import SelectedImage5 from "../../../public/image5.png";

interface WelcomeAdnanScreenProps {
  showWelcomeAdnanScreen: boolean;
  setShowWelcomeAdnanScreen: (show: boolean) => void;
  setShowSuccessScreen: (show: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
  handleWelcomeAdnanContinue: () => void;
  welcomeAdnanContinueRef: React.RefObject<HTMLDivElement>;
  options: Array<{
    text: string;
    id: string;
  }>;
}

export default function WelcomeAdnanScreen({
  showWelcomeAdnanScreen,
  setShowWelcomeAdnanScreen,
  setShowSuccessScreen,
  userName,
  setUserName,
  selectedInterests,
  setSelectedInterests,
  handleWelcomeAdnanContinue,
  welcomeAdnanContinueRef,
  options,
}: WelcomeAdnanScreenProps) {
  if (!showWelcomeAdnanScreen) return null;

  const images = [Image1, Image2, Image3, Image4, Image5];
  const selectedImages = [
    SelectedImage1,
    SelectedImage2,
    SelectedImage3,
    SelectedImage4,
    SelectedImage5,
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 animate-fadeIn">
      {/* Logo Section */}
      <div className="text-center mb-4" style={{ paddingTop: "80px" }}>
        {/* Arabic Calligraphy Logo */}
        <div className="mb-4">
          <div className="text-6xl md:text-7xl text-cream font-arabic mb-2 flex justify-center">
            <Image 
              width={200}
              height={200}
              src={Logo} alt="Logo-Image" width="100" height="100" />
          </div>
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 font-sans">
          Welcome {userName || "Adnan"}!
        </h2>

        {/* Instructional Text */}
        <p className="text-[#E2E2E2] text-sm md:text-base max-w-sm mx-auto leading-relaxed font-normal mb-2">
          I am zikr, you spiritual compagnon, please tell me what you are
          here for so I can customize your journey with me. You can select
          up to 3.
        </p>
      </div>

      {/* Option Buttons */}
      <div className="w-full max-w-sm space-y-5 mb-12">
        {options.map((option, index) => {
          const isSelected = selectedInterests.includes(option.id);
          const currentImage = isSelected
            ? selectedImages[index]
            : images[index];

          return (
            <button
              key={option.id}
              onClick={() => {
                if (isSelected) {
                  setSelectedInterests(
                    selectedInterests.filter((id) => id !== option.id)
                  );
                } else if (selectedInterests.length < 3) {
                  setSelectedInterests([...selectedInterests, option.id]);
                  setTimeout(() => {
                    welcomeAdnanContinueRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }
              }}
              className={`w-full cursor-pointer rounded-full py-3 px-6 flex items-center space-x-4 text-left transition-all duration-300 transform hover:scale-105 ${
                isSelected
                  ? "bg-[#F5F0E6] border-2 border-[#F5F0E6] text-[#0B1E3A] shadow-lg"
                  : selectedInterests.length >= 3
                  ? "bg-[#173b2a] text-gray-400 opacity-60 cursor-not-allowed"
                  : "bg-[#173b2a] text-white hover:bg-[#1A675E]"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Dynamic icon (changes on selection) */}
              <Image
                src={currentImage}
                alt={option.text}
                width={26}
                height={26}
                className="object-contain"
              />

              {/* Option text */}
              <span className="flex-1 font-semibold text-base md:text-base">
                {option.text}
              </span>

              {/* Checkmark when selected */}
              {isSelected && (
                <span className="font-black text-lg text-[#0B1E3A]">✔</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Continue Button - Mobile Responsive */}
      <div ref={welcomeAdnanContinueRef}>
        <button
          onClick={handleWelcomeAdnanContinue}
          disabled={selectedInterests.length === 0}
          className={`rounded-full py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            selectedInterests.length > 0
              ? "bg-[#F5F0E6] text-[#0B1E3A] hover:bg-[#EDE7DB] shadow-lg cursor-pointer hover:underline"
              : "bg-[#F5F0E6] text-[#0B1E3A] opacity-50 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
