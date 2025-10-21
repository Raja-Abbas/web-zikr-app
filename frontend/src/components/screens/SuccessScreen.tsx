"use client";

import Image from "next/image";
import Logo from "../../../public/logo-removebg-preview.png";
import Leave from "../../../public/leave.png";

interface SuccessScreenProps {
  showSuccessScreen: boolean;
  setShowSuccessScreen: (show: boolean) => void;
  setShowWelcomeScreen: (show: boolean) => void;
  setShowDiscussMenu: (show: boolean) => void;
  isAuthenticated: boolean;
  navigateToScreen: (screen: string) => void;
}

export default function SuccessScreen({
  showSuccessScreen,
  setShowSuccessScreen,
  setShowWelcomeScreen,
  setShowDiscussMenu,
  isAuthenticated,
  navigateToScreen,
}: SuccessScreenProps) {
  if (!showSuccessScreen) return null;

  return (
    <>
      <style jsx>{`
        @keyframes gentle-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gentle-bounce {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
          }
        }
        .animate-gentle-float {
          animation: gentle-float 3s ease-in-out infinite;
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 py-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(
              "🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true"
            );
            console.log(
              "🍃 Current showDiscussMenu state:",
              showDiscussMenu
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
          <Image src={Leave} alt="Leave" className="w-10 h-10" />
        </button>
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-start max-w-md mx-auto text-center">
          {/* Logo Section with Arabic Calligraphy */}
          <div className="mb-12 sm:mb-16">
            {/* Arabic Calligraphy */}
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl md:text-7xl text-cream font-arabic mb-2 flex justify-center">
                <Image
                  src={Logo}
                  alt="Logo-Image"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>

          {/* Rounded Beige Dialog Box with 3D Shadows - Animated */}
          <div className="mb-8 sm:mb-10 animate-gentle-float">
            <div
              className="bg-[#F5F0E6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8 shadow-2xl"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                className="text-base sm:text-lg font-semibold text-center leading-relaxed"
                style={{ fontFamily: "Inter, Poppins, sans-serif" }}
              >
                Thank you for your confirmation and for being here.
                Let&apos;s start discussing.
              </p>
            </div>
          </div>

          {/* Continue Button - Beige with Dark Navy Text - Animated */}
          <button
            onClick={() => navigateToScreen("welcome")}
            className="bg-[#F5F0E6] cursor-pointer font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full hover:underline text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-gentle-bounce"
            style={{
              fontFamily: "Inter, Poppins, sans-serif",
              boxShadow:
                "0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
