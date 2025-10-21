"use client";

import Image from "next/image";
import Diamond from "../../../public/Popup/8.png";
import Lock from "../../../public/Popup/9.png";

interface LeavesMenuOverlayProps {
  showLeavesMenu: boolean;
  setShowLeavesMenu: (show: boolean) => void;
  handleLeavesMenuToggle: () => void;
  handleMenuItemSelect: (item: string) => void;
}

export default function LeavesMenuOverlay({
  showLeavesMenu,
  setShowLeavesMenu,
  handleLeavesMenuToggle,
  handleMenuItemSelect,
}: LeavesMenuOverlayProps) {
  if (!showLeavesMenu) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleLeavesMenuToggle}
      />

      {/* Menu Container - Mobile Responsive */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 mx-4 sm:mx-6 max-w-xs sm:max-w-sm w-full transform transition-all duration-500 scale-100 opacity-100">
        {/* Floating leaves decoration */}
        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
          🍃
        </div>
        <div className="absolute -bottom-2 -left-2 text-xl animate-pulse">
          🍃
        </div>
        <div className="absolute top-4 left-4 text-lg animate-bounce delay-300">
          🍃
        </div>

        {/* Close button */}
        <button
          onClick={handleLeavesMenuToggle}
          className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
        >
          <span className="text-gray-600 text-lg">×</span>
        </button>

        {/* Menu Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            My.Zikr Menu
          </h2>
          <div className="flex justify-center space-x-1">
            <span className="text-lg">🍃</span>
            <span className="text-lg">🍃</span>
            <span className="text-lg">🍃</span>
          </div>
        </div>

        {/* Menu Items - Side Menu Style */}
        <div className="space-y-2">
          {[
            {
              id: "discuss",
              text: "Discuss ✅",
              color: "from-blue-500 to-blue-600",
              icon: (
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 150 150">
                    {/* Outer Circle */}
                    <circle
                      cx="75"
                      cy="75"
                      r="70"
                      fill="none"
                      stroke="#0A7A33"
                      strokeWidth="8"
                    />
                    {/* Dark Green Message Bubble */}
                    <path
                      d="M50 60a20 18 0 1 1 0 36c-3 0-6 0-9 1l-10 6 3-9c-3-3-5-7-5-11a18 18 0 0 1 21-23z"
                      fill="#0A7A33"
                    />
                    {/* White Message Bubble */}
                    <path
                      d="M100 45a20 18 0 1 1 0 36c-3 0-6 0-9 1l-10 6 3-9c-3-3-5-7-5-11a18 18 0 0 1 21-23z"
                      fill="#FFFFFF"
                      stroke="#0A7A33"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              ),
            },
            {
              id: "duas",
              text: "Duas",
              color: "from-purple-500 to-purple-600",
              icon: "🤲",
            },
            {
              id: "reminders",
              text: "Reminders",
              color: "from-orange-500 to-orange-600",
              icon: "🧠⚙️",
            },
            {
              id: "notes",
              text: "My notes",
              color: "from-green-500 to-green-600",
              icon: "📝✏️",
            },
            {
              id: "wall",
              text: "The wall of duas",
              color: "from-emerald-500 to-emerald-600",
              icon: "🚶‍♂️🧱",
            },
            {
              id: "profile",
              text: "My profile",
              color: "from-pink-500 to-pink-600",
              icon: "👤⭕",
            },
            {
              id: "interior",
              text: "Interior design",
              color: "from-indigo-500 to-indigo-600",
              icon: "💎⚙️",
            },
            {
              id: "premium",
              text: "My.Zikr+",
              color: "from-yellow-500 to-yellow-600",
              icon: "💎🔒",
            },
            {
              id: "back",
              text: "Back",
              color: "from-red-500 to-red-600",
              icon: "←",
            },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemSelect(item.text)}
              className={`w-full bg-gradient-to-r ${item.color} text-white py-3 px-4 rounded-xl flex items-center space-x-3 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-white flex items-center justify-center">
                {typeof item.icon === "string" ? (
                  <span className="text-xl">{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>
              <span className="text-base font-medium">{item.text}</span>
              <div className="flex-1" />
              <span className="text-lg opacity-70">→</span>
            </button>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-2 opacity-50">
            <span className="text-sm">🍃</span>
            <span className="text-xs">My.Zikr</span>
            <span className="text-sm">🍃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
