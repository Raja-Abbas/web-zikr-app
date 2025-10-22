"use client";

import Image from "next/image";
import Popup from "../../../public/Popup/8.png";
import Popup1 from "../../../public/Popup/8.png";

interface DiscussMenuOverlayProps {
  showDiscussMenu: boolean;
  setShowDiscussMenu: (show: boolean) => void;
  handleCloseDiscussMenu: () => void;
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
  handleMenuItemSelect: (item: string) => void;
  menuItems: Array<{ id: string; icon: string; text: string }>;
}

export default function DiscussMenuOverlay({
  showDiscussMenu,
  setShowDiscussMenu,
  handleCloseDiscussMenu,
  selectedMenuItem,
  setSelectedMenuItem,
  handleMenuItemSelect,
  menuItems,
}: DiscussMenuOverlayProps) {
  if (!showDiscussMenu) return null;

  return (
    <>
      {console.log(
        "🚀 SIDEBAR MENU IS RENDERING! showDiscussMenu:",
        showDiscussMenu
      )}
      <div className="fixed inset-0 z-50 flex">
        {/* Background overlay - transparent to show original app background */}
        <div
          className="absolute inset-0 bg-transparent"
          onClick={handleCloseDiscussMenu}
        />

        {/* Menu Container - Compact floating design */}
        <div className="absolute top-16 left-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-0 w-44 overflow-hidden">
            {/* Menu Items */}
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemSelect(item.text)}
                  className={`w-full flex items-center space-x-3 p-0 rounded-none transition-colors text-left ${
                    selectedMenuItem === item.text
                      ? "bg-[#0a3a30] text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-8 h-8">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={24}
                      height={24}
                      className={`${
                        selectedMenuItem === item.text
                          ? "invert brightness-0"
                          : "opacity-80"
                      }`}
                    />
                  </div>

                  {/* Text */}
                  <span
                    className={`font-medium text-sm ${
                      selectedMenuItem === item.text
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Premium Feature Callout */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <button
                onClick={() => handleMenuItemSelect("My.Zikr+")}
                className="w-full flex items-center space-x-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center space-x-1">
                  <Image 
              width={200}
              height={200}
                  src={Popup} alt="Diamond" className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-[#a29f9f]">
                  My.Zikr+
                </span>
                <div className="flex items-center space-x-1">
                  <Image 
              width={200}
              height={200}
                  src={Popup1} alt="Lock" className="w-3 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button positioned under sidebar */}
        {/* <div className="absolute top-[32rem] left-4 z-50">
          <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded-lg text-sm opacity-30 cursor-not-allowed">
            Continue
          </button>
        </div> */}

        {/* Ghosted background content (visible but dimmed) */}
        <div className="flex-1 relative">
          {/* Footer elements from underlying screen */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 opacity-50">
            <span className="text-white text-sm">📄</span>
            <span className="text-white text-sm">19</span>
          </div>

          {/* Thin blue line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-800 opacity-30" />
        </div>
      </div>
    </>
  );
}
