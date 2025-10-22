import Image from "next/image";
import Link from "next/link";

interface AuthScreenProps {
  // Props for state management
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  showEmailForm: boolean;
  setShowEmailForm: (value: boolean) => void;
  formData: {
    name: string;
    email: string;
    password: string;
  };
  loginData: {
    email: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailAuth: () => void;
  setIsAuthenticated: (value: boolean) => void;
  setShowWelcomeAdnanScreen: (value: boolean) => void;
}

export default function AuthScreen({
  isLogin,
  setIsLogin,
  showEmailForm,
  setShowEmailForm,
  formData,
  loginData,
  handleInputChange,
  handleLoginInputChange,
  handleEmailAuth,
  setIsAuthenticated,
  setShowWelcomeAdnanScreen,
}: AuthScreenProps) {
  return (
    <div className="flex flex-col w-full max-w-none justify-center items-center min-h-screen max-h-fit overflow-auto">
      {/* Main Content - Scrollable - Mobile Responsive */}
      <div className="flex flex-col items-center justify-center px-[65px] sm:px-[65px]">
        {/* Logo and Header Section */}
        <div className="text-center mb-[37px]">
          {/* Arabic Calligraphy Logo */}
          <div className="mb-4">
            <div className="text-cream font-arabic mb-2 flex justify-center">
              <Image 
              src="/logo-removebg-preview.png" alt="Logo-Image" width="116" height="116" />
            </div>
          </div>
          {/* App Name */}
          {/* <h1 className="text-2xl md:text-3xl text-cream font-light tracking-wider mb-4">
              My.Zikr
            </h1> */}
          {/* Welcome Message */}
          <p
            className={`text-cream text-sm md:text-base mb-4 font-bold max-sm:max-w-[200px] ${
              isLogin ? "opacity-0" : "opacity-100"
            }`}
          >
            Salam Alaykoum and welcome!
          </p>
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl text-cream font-bold mb-4">
            {showEmailForm
              ? isLogin
                ? "Login"
                : "Register"
              : isLogin
              ? "Log In"
              : "Register"}
          </h2>
          {/* Subtitle for Login Form or Toggle Link */}
          {showEmailForm && isLogin ? (
            <p className="text-cream text-[10px] md:text-lg mb-4">
              Sign in to continue.
            </p>
          ) : !showEmailForm ? (
            <p className="text-cream text-[10px] md:text-lg">
              {isLogin ? "Don't have an account? " : "Already Registered? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="italic cursor-pointer hover:underline hover:text-gray-300 transition-colors font-medium"
              >
                {isLogin ? "Register here" : "Log in here"}
              </button>
            </p>
          ) : null}
        </div>
        {/* Conditional Content: Show Email Form or Auth Options */}
        {showEmailForm ? (
          isLogin ? (
            /* Screen 3: Email Login Form */
            <div className="w-full max-w-sm space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-cream text-sm font-medium mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  placeholder="hello@reallygreatsite.com"
                  className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {/* Password Field */}
              <div>
                <label className="block text-cream text-sm font-medium mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                  placeholder="Enter your password"
                  className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {/* Login Button */}
              <button
                onClick={() => {
                  console.log("Login attempt:", loginData);
                  // Simulate successful login
                  setIsAuthenticated(true);
                  setShowEmailForm(false);
                  setShowWelcomeAdnanScreen(true);
                }}
                className="w-full py-3 px-4 text-white cursor-pointer hover:underline border rounded-2xl transition-colors font-medium"
              >
                Login
              </button>
              {/* Back Button */}
              {/* <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:!text-white hover:!font-semibold transition-colors"
            >
              Back to options
            </button> */}
            </div>
          ) : (
            /* Screen 2: Email Registration Form */
            <div className="w-full max-w-sm space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-cream text-sm font-medium mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-cream text-sm font-medium mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@reallygreatsite.com"
                  className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {/* Password Field */}
              <div>
                <label className="block text-cream text-sm font-medium mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <p className="text-cream text-sm md:text-base mb-4">
                By clicking below, you agree{" "}
                <Link href="/" className="underline">
                  terms and conditions{" "}
                </Link>
                of My.zikr.
              </p>
              {/* Register Button */}
              <button
                onClick={() => {
                  console.log("Registration attempt:", formData);
                  // Simulate successful registration
                  setIsAuthenticated(true);
                  setShowEmailForm(false);
                  setShowWelcomeAdnanScreen(true);
                }}
                className="w-full cursor-pointer py-3 px-4 text-white hover:underline border rounded-2xl transition-colors font-medium"
              >
                Sign up
              </button>
              {/* Back Button */}
              {/* <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:!text-white hover:!font-semibold transition-colors"
            >
              Back to options
            </button> */}
            </div>
          )
        ) : (
          /* Screen 1: Authentication Options */
          <div className="w-full max-w-sm space-y-4">
            {/* Email Authentication Button */}
            <button
              onClick={handleEmailAuth}
              className="w-full cursor-pointer mx-auto py-3 px-6 bg-transparent border border-cream text-cream rounded-[20px] hover:underline font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
            >
              {/* <svg className="w-5 h-5 fill-cream group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg> */}
              {isLogin ? "Login with an e-mail" : "Sign up with an e-mail"}
            </button>
            {/* Google Authentication Button */}
            <button
              onClick={() => {
                console.log("Google authentication");
                // Simulate successful Google auth
                setIsAuthenticated(true);
                setShowWelcomeAdnanScreen(true);
              }}
              className="w-full cursor-pointer mx-auto py-3 px-6 bg-transparent border border-cream text-cream rounded-[20px] hover:underline font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
            >
              <Image
                src="/google.png"
                alt="Google-Image"
                width="20"
                height="20"
              />
              <span className="pt-[2px]">
                {isLogin ? "Login with google" : "Sign up with google"}
              </span>
            </button>

            {/* Apple Authentication Button */}
            <button
              onClick={() => {
                console.log("Apple authentication");
                // Simulate successful Apple auth
                setIsAuthenticated(true);
                setShowWelcomeAdnanScreen(true);
              }}
              className="w-full cursor-pointer mx-auto py-3 px-6 bg-transparent border border-cream text-cream rounded-[20px] hover:underline font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
            >
              <svg className="w-5 h-5 fill-cream" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="pt-[2px]">
                {isLogin ? "Login with apple" : "Sign up with apple"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
