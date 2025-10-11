'use client';

import { useState } from 'react';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  const [showPersonalizationScreen, setShowPersonalizationScreen] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['douas', 'community']);
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedDouaCategory, setSelectedDouaCategory] = useState('Authentic douas');
  const [customDouaText, setCustomDouaText] = useState('');
  const [showWallOfDuas, setShowWallOfDuas] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showAuthenticDuaSelection, setShowAuthenticDuaSelection] = useState(false);
  const [showDuaContent, setShowDuaContent] = useState(false);
  const [showDiscussMenu, setShowDiscussMenu] = useState(false);
  const [showCustomDuaGeneration, setShowCustomDuaGeneration] = useState(false);
  const [showSpiritualReminder, setShowSpiritualReminder] = useState(false);
  const [showAuthenticDuasGrid, setShowAuthenticDuasGrid] = useState(false);
  const [showChatbotDiscussionHub, setShowChatbotDiscussionHub] = useState(false);
  const [showDuaContentViewer, setShowDuaContentViewer] = useState(false);
  const [showInteriorDesignSettings, setShowInteriorDesignSettings] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [discussionInput, setDiscussionInput] = useState('');
  const [selectedDuaCategory, setSelectedDuaCategory] = useState('To protect kids');
  const [selectedGridCategory, setSelectedGridCategory] = useState('Protection');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Interior design');
  const [selectedReminderCategory, setSelectedReminderCategory] = useState('Wudu steps');
  const [showReminderContent, setShowReminderContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customDuaRequest, setCustomDuaRequest] = useState('');
  const [showGeneratedDua, setShowGeneratedDua] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [userSettings, setUserSettings] = useState({
    name: 'Adnan Fida',
    language: 'English',
    gender: 'Man',
    reminderTime: '07:00',
    duaOfTheDay: true,
    kindNotifications: true,
    wallNotifications: true,
    amineNotifications: true,
    updates: true,
    newsletter: true,
    textSize: 50,
    sounds: true,
    cloudSave: true
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleEmailAuth = () => {
    setShowEmailForm(true);
  };

  const handleGoogleAuth = () => {
    // TODO: Implement Google authentication
    console.log('Google authentication');
  };

  const handleAppleAuth = () => {
    // TODO: Implement Apple authentication
    console.log('Apple authentication');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log('Sign up with:', formData);
    // Store user name and redirect to welcome screen after successful registration
    setUserName(formData.name);
    setShowWelcomeScreen(true);
  };

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login with:', loginData);
    // For login, use a default name or stored name
    setUserName('Adnan'); // Default name for login users
    setShowWelcomeScreen(true);
  };

  const handleBackToOptions = () => {
    setShowEmailForm(false);
  };

  const handleContinue = () => {
    // Navigate from welcome screen to chatbot screen
    setShowWelcomeScreen(false);
    setShowChatbot(true);
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      } else if (prev.length < 3) {
        return [...prev, interest];
      }
      return prev; // Don't add if already 3 selected
    });
  };

  const handlePersonalizationContinue = () => {
    // Save user preferences and navigate to main app home screen
    console.log('User preferences:', selectedInterests);
    setShowPersonalizationScreen(false);
    setShowHomeScreen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setShowWallOfDuas(false); // Reset wall of duas when switching tabs
  };

  const handleWallOfDuasClick = () => {
    setShowWallOfDuas(true);
  };

  const handleChatbotContinue = () => {
    // Navigate from chatbot to personalization screen
    setShowChatbot(false);
    setShowPersonalizationScreen(true);
  };

  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      console.log('Chat message:', chatInput);
      // Here you would typically send the message to your AI backend
      setChatInput('');
    }
  };

  const handleSuggestedAction = (action: string) => {
    console.log('Selected action:', action);
    // Handle the suggested action
    if (action === 'Authentic dua') {
      // Navigate to Authentic Duas Category Grid screen
      setShowChatbot(false);
      setShowAuthenticDuasGrid(true);
    } else if (action === 'Custom dua for my situation') {
      // Navigate to Custom Dua Generation screen
      setShowChatbot(false);
      setShowCustomDuaGeneration(true);
    } else if (action === 'Spiritual reminder') {
      // Navigate to Spiritual Reminder screen
      setShowChatbot(false);
      setShowSpiritualReminder(true);
    }
  };

  const handleBackFromAuthenticDua = () => {
    // Navigate back to chatbot screen
    setShowAuthenticDuaSelection(false);
    setShowChatbot(true);
  };

  const handleDuaCategorySelect = (category: string) => {
    setSelectedDuaCategory(category);
    setShowDuaContent(true);
    console.log('Selected dua category:', category);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log('Audio playback:', !isPlaying ? 'playing' : 'paused');
  };

  const handleDuaAction = (action: string) => {
    console.log('Dua action:', action);
    if (action === 'Discuss') {
      setShowChatbotDiscussionHub(true);
    }
    // Handle different actions like save, share, etc.
  };

  const handleMenuItemSelect = (item: string) => {
    setSelectedMenuItem(item);
    console.log('Selected menu item:', item);
    // Handle navigation to different sections
    if (item === 'My.Zikr+') {
      console.log('Navigate to premium subscription');
    } else if (item === 'The wall of duas') {
      setShowDiscussMenu(false);
      setActiveTab('Douas');
      setShowWallOfDuas(true);
    } else if (item === 'Interior design') {
      setShowDiscussMenu(false);
      setShowInteriorDesignSettings(true);
    }
    // Close menu after selection (optional)
    // setShowDiscussMenu(false);
  };

  const handleCloseDiscussMenu = () => {
    setShowDiscussMenu(false);
  };

  const handleBackFromCustomDua = () => {
    // Navigate back to chatbot screen
    setShowCustomDuaGeneration(false);
    setShowGeneratedDua(false);
    setCustomDuaRequest('');
    setShowChatbot(true);
  };

  const handleCustomDuaSubmit = () => {
    if (customDuaRequest.trim()) {
      console.log('Custom dua request:', customDuaRequest);
      setShowGeneratedDua(true);
      // Here you would typically send the request to your AI backend
    }
  };

  const handleCustomDuaAction = (action: string) => {
    console.log('Custom dua action:', action);
    if (action === 'Another one') {
      setShowGeneratedDua(false);
      setCustomDuaRequest('');
    } else if (action === 'Main menu') {
      handleBackFromCustomDua();
    }
    // Handle other actions like save, share, etc.
  };

  const handleBackFromSpiritualReminder = () => {
    // Navigate back to chatbot screen
    setShowSpiritualReminder(false);
    setShowReminderContent(false);
    setSelectedReminderCategory('Wudu steps');
    setShowChatbot(true);
  };

  const handleReminderCategorySelect = (category: string) => {
    setSelectedReminderCategory(category);
    setShowReminderContent(true);
    console.log('Selected reminder category:', category);
  };

  const handleReminderAction = (action: string) => {
    console.log('Reminder action:', action);
    if (action === 'Another reminder') {
      setShowReminderContent(false);
    } else if (action === 'Discuss') {
      setShowChatbotDiscussionHub(true);
    }
    // Handle other actions
  };

  const handleBackFromAuthenticDuasGrid = () => {
    // Navigate back to chatbot screen
    setShowAuthenticDuasGrid(false);
    setShowChatbot(true);
  };

  const handleDuaCategoryGridSelect = (category: string) => {
    console.log('Selected dua category from grid:', category);
    setSelectedGridCategory(category);
    setShowAuthenticDuasGrid(false);
    setShowDuaContentViewer(true);
  };

  const handleWallOfDuasFromGrid = () => {
    console.log('Navigate to Wall of Duas from grid');
    setShowAuthenticDuasGrid(false);
    setActiveTab('Douas');
    setShowWallOfDuas(true);
  };

  const handleBackFromDiscussionHub = () => {
    // Navigate back to previous screen (could be from various sources)
    setShowChatbotDiscussionHub(false);
    setDiscussionInput('');
    // Return to chatbot or previous screen
    setShowChatbot(true);
  };

  const handleDiscussionSubmit = () => {
    if (discussionInput.trim()) {
      console.log('Discussion message:', discussionInput);
      // Here you would typically send the message to your AI backend
      setDiscussionInput('');
    }
  };

  const handleQuickAction = (action: string) => {
    console.log('Quick action:', action);
    // Handle different quick actions
    switch (action) {
      case 'See my saved duas':
        console.log('Navigate to saved duas');
        break;
      case 'Talk to support':
        console.log('Navigate to support');
        break;
      case 'Check my notes':
        console.log('Navigate to notes');
        break;
      case 'See the whole duas collection':
        setShowAuthenticDuasGrid(true);
        setShowChatbotDiscussionHub(false);
        break;
      case 'See the whole reminders collection':
        setShowSpiritualReminder(true);
        setShowChatbotDiscussionHub(false);
        break;
      case 'See the wall of duas':
        setShowChatbotDiscussionHub(false);
        setActiveTab('Douas');
        setShowWallOfDuas(true);
        break;
      default:
        break;
    }
  };

  const handleResetToAuth = () => {
    // Reset to initial authentication state
    setShowHomeScreen(false);
    setShowPersonalizationScreen(false);
    setShowWelcomeScreen(false);
    setShowEmailForm(false);
    setShowChatbot(false);
    setShowAuthenticDuaSelection(false);
    setShowDuaContent(false);
    setShowDiscussMenu(false);
    setShowCustomDuaGeneration(false);
    setShowSpiritualReminder(false);
    setShowAuthenticDuasGrid(false);
    setShowChatbotDiscussionHub(false);
    setShowDuaContentViewer(false);
    setShowInteriorDesignSettings(false);
    setIsLogin(false);
    setUserName('');
    setSelectedInterests(['douas', 'community']);
    setActiveTab('Home');
    setChatInput('');
    setDiscussionInput('');
    setSelectedDuaCategory('To protect kids');
    setSelectedGridCategory('Protection');
    setSelectedMenuItem('Interior design');
    setSelectedReminderCategory('Wudu steps');
    setShowReminderContent(false);
    setIsPlaying(false);
    setCustomDuaRequest('');
    setShowGeneratedDua(false);
    setAudioProgress(0);
    setFormData({ name: '', email: '', password: '' });
    setLoginData({ email: '', password: '' });
  };

  const handleBackFromDuaContentViewer = () => {
    setShowDuaContentViewer(false);
    setShowAuthenticDuasGrid(true);
  };

  const handleBackFromInteriorDesignSettings = () => {
    setShowInteriorDesignSettings(false);
    setShowDiscussMenu(true);
  };

  const handleAudioPlay = () => {
    setIsPlaying(!isPlaying);
    // Here you would integrate with actual audio playback
  };

  const handleSettingToggle = (setting: string) => {
    setUserSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handleSettingChange = (setting: string, value: string | number | boolean) => {
    setUserSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const interests = [
    {
      id: 'douas',
      icon: '📖',
      text: 'To learn how to make douas'
    },
    {
      id: 'community',
      icon: '🤲',
      text: 'To join the douas community'
    },
    {
      id: 'curiosity',
      icon: '🔍',
      text: 'By curiosity'
    },
    {
      id: 'reminders',
      icon: '📅',
      text: 'To find islamic reminders'
    },
    {
      id: 'other',
      icon: '🌍',
      text: 'For something else'
    }
  ];

  // Dua content data
  const duaContent = {
    'To protect kids': {
      arabic: 'أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      transliteration: 'U\'eedhukumaa bi-kalimaati l-laahi t-taammaati min kulli shaytaanin wa haammatin wa min kulli \'aynin laammatin',
      translation: 'I seek protection for you from the perfect words of Allah against every devil and poisonous creature, and against every evil eye.',
      source: '[1] al-Bukhari N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).'
    },
    'Anxiety': {
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      transliteration: 'Allaahumma innee a\'oodhu bika minal-hammi wal-hazan',
      translation: 'O Allah, I seek refuge in You from anxiety and grief.',
      source: '[1] al-Bukhari N°6369, Muslim N°2706.'
    },
    'For forgiveness': {
      arabic: 'رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي',
      transliteration: 'Rabbi ghfir lee dhanbee wa khata\'ee wa jahlee',
      translation: 'My Lord, forgive my sins, my mistakes, and my ignorance.',
      source: '[1] al-Bukhari N°6398, Muslim N°2719.'
    }
    // Add more duas as needed
  };

  // Menu items data
  const menuItems = [
    { id: 'discuss', icon: '💬', text: 'Discuss' },
    { id: 'duas', icon: '🤲', text: 'Duas' },
    { id: 'reminders', icon: '⏰', text: 'Reminders' },
    { id: 'notes', icon: '📝', text: 'My notes' },
    { id: 'wall', icon: '🕌', text: 'The wall of duas' },
    { id: 'profile', icon: '👤', text: 'My profile' },
    { id: 'interior', icon: '🏠', text: 'Interior design' },
  ];

  // Reminder content data
  const reminderContent = {
    'Wudu steps': {
      title: 'Wudu steps',
      description: 'Purity is the gateway to prayer. Here\'s a simple guide to help you perform Wudu step-by-step with presence and mindfulness. May Allah accept your prayer. Prophet Muhammad ﷺ said: "Purity is half of faith." (Sahih Muslim 223)',
      downloadLink: 'Download wudu step pdf'
    },
    'Ghusl steps': {
      title: 'Ghusl steps',
      description: 'Complete purification guide for major ritual cleansing. Follow these steps with intention and mindfulness.',
      downloadLink: 'Download ghusl step pdf'
    },
    'Prayer steps': {
      title: 'Prayer steps',
      description: 'Step-by-step guide to performing Salah with proper movements and recitations.',
      downloadLink: 'Download prayer step pdf'
    }
    // Add more reminders as needed
  };

  // Authentic Duas Categories (French as in screenshot)
  const duaCategories = [
    { id: 'tout', icon: '🤲', name: 'Tout', chapters: '132 chapitres' },
    { id: 'matin-soir', icon: '🌅', name: 'Matin & Soir', chapters: '15 chapitres' },
    { id: 'maison-famille', icon: '🏠', name: 'Maison & Famille', chapters: '12 chapitres' },
    { id: 'nourriture', icon: '🍽️', name: 'Nourriture', chapters: '8 chapitres' },
    { id: 'voyage', icon: '✈️', name: 'Voyage', chapters: '6 chapitres' },
    { id: 'mosquee', icon: '🕌', name: 'Mosquée', chapters: '10 chapitres' },
    { id: 'nature', icon: '🌿', name: 'Nature', chapters: '7 chapitres' },
    { id: 'sante', icon: '💊', name: 'Santé', chapters: '14 chapitres' },
    { id: 'protection', icon: '🛡️', name: 'Protection', chapters: '18 chapitres' },
    { id: 'emotions', icon: '💭', name: 'Émotions', chapters: '11 chapitres' },
    { id: 'adoration', icon: '🙏', name: 'Adoration', chapters: '20 chapitres' },
    { id: 'autres', icon: '📚', name: 'Autres', chapters: '11 chapitres' }
  ];

  // Extended dua content data for different categories
  const duaContentGrid = {
    'Protection': {
      title: 'To protect kids',
      arabic: 'أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      transliteration: 'U\'eedhukumā bi-kalimāti l-lāhi t-tāmmāti min kulli shaytānin wa hāmmatin wa min kulli \'aynin lāmmatin',
      translation: 'I seek refuge for you both in the perfect words of Allah from every devil and poisonous pest and from every evil, harmful, envious eye.',
      source: 'Sahih al-Bukhari 3371'
    },
    'Matin & Soir': {
      title: 'Morning & Evening',
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ',
      transliteration: 'Aṣbaḥnā wa aṣbaḥa l-mulku lillāhi wa l-ḥamdu lillāhi',
      translation: 'We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah.',
      source: 'Sahih Muslim 2723'
    },
    'Maison & Famille': {
      title: 'Home & Family',
      arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      transliteration: 'Bismi llāhi walajna wa bismi llāhi kharajna wa \'alā llāhi rabbinā tawakkalnā',
      translation: 'In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.',
      source: 'Abu Dawud 5096'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center px-6 py-8">
      {showHomeScreen ? (
        /* Screen 7: Home Screen */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Top Bar/Header */}
          <div className="flex items-center justify-between px-6 py-6">
            {/* Logo/App Name */}
            <div className="flex-1 text-center">
              <div className="text-4xl text-white font-arabic mb-1">ذِكْر</div>
              <div className="text-lg text-white font-light">My.Zikr</div>
            </div>

            {/* Notifications/Reminder */}
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl">🔔</span>
              <span className="text-white text-sm">Morning duas</span>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 pb-24">
            {/* Greeting */}
            <h1 className="text-3xl text-white font-bold mb-8 text-center">
              Salam Aleykoum {userName || 'Adnan'}!
            </h1>

            {/* Dua of the day Section */}
            <div className="mb-8">
              <h2 className="text-white text-xl font-semibold mb-4">Dua of the day</h2>

              {/* Dua Card */}
              <div className="bg-cream rounded-2xl p-6 mb-6">
                {/* Arabic Calligraphy */}
                <div className="text-center mb-4">
                  <div className="text-2xl text-gray-900 font-arabic leading-relaxed">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </div>
                </div>

                {/* Transliteration */}
                <div className="text-center mb-2">
                  <p className="text-gray-900 font-medium">
                    Allahuma innaka affuwun tuħibbun afwa fafu anni
                  </p>
                </div>

                {/* Translation */}
                <div className="text-center mb-4">
                  <p className="text-gray-700 text-sm">
                    Yā Allāh, You are the forgiver, you love to forgive, so forgive me
                  </p>
                </div>

                {/* Action Icons */}
                <div className="flex justify-center space-x-6">
                  <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                    🔊
                  </button>
                  <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendation Sections */}
            <div className="space-y-6">
              {/* Section 1: Customize your recommendations */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Customize your recommendations</h3>
                <button className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-xl">😊</span>
                    <span className="text-white font-medium">How do you feel today?</span>
                  </div>
                  <span className="text-white">→</span>
                </button>
              </div>

              {/* Section 2: Recommendations for you */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Recommendations for you</h3>
                <div className="space-y-3">
                  <button className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">🤲</span>
                      <span className="text-white font-medium">Dua for anxiety</span>
                    </div>
                    <span className="text-white">→</span>
                  </button>

                  <button className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">🙏</span>
                      <span className="text-white font-medium">Dua for gratitude</span>
                    </div>
                    <span className="text-white">→</span>
                  </button>

                  <button className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">🕌</span>
                      <span className="text-white font-medium">The wall of Duas</span>
                    </div>
                    <span className="text-white">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Bottom Navigation Bar - Fixed Position */}
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm border-t border-slate-700 z-50">
            <div className="flex justify-around py-3">
              {['Home', 'Duas', 'Reminder', 'Profile'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 ${
                    activeTab === tab ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  <span className="text-xl">
                    {tab === 'Home' && '🏠'}
                    {tab === 'Duas' && '🤲'}
                    {tab === 'Reminder' && '⏰'}
                    {tab === 'Profile' && '👤'}
                  </span>
                  <span className="text-xs font-medium">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Debug Reset Button */}
          <button
            onClick={handleResetToAuth}
            className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs opacity-50 hover:opacity-100"
          >
            Reset to Auth
          </button>
        </div>
      ) : activeTab === 'Douas' && showHomeScreen && !showWallOfDuas ? (
        /* Screen 8: Douas Tab */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6 pb-24">
              {/* Header/Title */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl text-white font-bold mb-3">Douas</h1>
                <p className="text-white text-base leading-relaxed">
                  Douas to connect to Allah and to find comfort with heartfelt words
                </p>
              </div>

              {/* Doua Categories (Pills/Tabs) */}
              <div className="mb-8">
                <div className="flex space-x-3 overflow-x-auto pb-2 justify-center">
                  {['Authentic douas', 'All', 'For kids', 'For Haj'].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedDouaCategory(category);
                        if (category === 'Authentic douas') {
                          setShowAuthenticDuasGrid(true);
                        }
                      }}
                      className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                        selectedDouaCategory === category
                          ? 'bg-cream text-gray-900'
                          : 'bg-slate-800 text-white hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom douas Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-2">Custom douas</h2>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  What do you have in mind, let&apos;s us help you explain it to Allah
                </p>

                {/* Text Input Area */}
                <textarea
                  value={customDouaText}
                  onChange={(e) => setCustomDouaText(e.target.value)}
                  placeholder="Write down you feeling like I need help to get a job..."
                  className="w-full h-24 bg-slate-800 text-white placeholder-purple-300 rounded-lg p-4 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              {/* Most popular Douas asked Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-4">Most popular Douas asked</h2>

                {/* Suggestion Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'I have an exam',
                    'I want to marry',
                    'I want a baby',
                    'I need money for rent'
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="bg-slate-800 text-white px-4 py-3 rounded-lg text-sm hover:bg-slate-700 transition-colors text-center"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover the wall of douas Section */}
              <div className="mb-8 text-center">
                <h2 className="text-white text-xl font-semibold mb-2">Discover the wall of douas</h2>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Find out douas that people made and support them by saying &apos;Amine&apos;.
                </p>

                {/* Navigation Button */}
                <button
                  onClick={handleWallOfDuasClick}
                  className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-xl">🤲</span>
                    <span className="text-white font-medium">The wall of Duas</span>
                  </div>
                  <span className="text-white">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar - Fixed Position */}
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm border-t border-slate-700 z-50">
            <div className="flex justify-around py-3">
              {['Home', 'Douas', 'Reminder', 'Profile'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 ${
                    activeTab === tab ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  <span className="text-xl">
                    {tab === 'Home' && '🏠'}
                    {tab === 'Douas' && '🤲'}
                    {tab === 'Reminder' && '⏰'}
                    {tab === 'Profile' && '👤'}
                  </span>
                  <span className="text-xs font-medium">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : showWallOfDuas && activeTab === 'Douas' && showHomeScreen ? (
        /* Wall of Duas Screen */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6 pb-24">
              {/* Header with Back Button */}
              <div className="mb-8">
                <div className="flex items-center justify-center relative">
                  <button
                    onClick={() => setShowWallOfDuas(false)}
                    className="absolute left-0 text-white text-2xl hover:text-gray-300"
                  >
                    ←
                  </button>
                  <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-2">The Wall of Duas</h1>
                    <p className="text-white text-base">
                      Community duas where you can support others by saying &apos;Amine&apos;
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample Community Duas */}
              <div className="space-y-4">
                {[
                  {
                    user: "Sarah M.",
                    dua: "Please pray for my mother's health recovery. She's been in the hospital for weeks.",
                    amines: 127,
                    time: "2 hours ago"
                  },
                  {
                    user: "Ahmed K.",
                    dua: "I have an important job interview tomorrow. Please make dua that Allah guides me.",
                    amines: 89,
                    time: "5 hours ago"
                  },
                  {
                    user: "Fatima A.",
                    dua: "My family is going through financial difficulties. Please pray for Allah's help.",
                    amines: 203,
                    time: "1 day ago"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-white font-medium">{item.user}</span>
                      <span className="text-gray-400 text-sm">{item.time}</span>
                    </div>
                    <p className="text-white mb-4 leading-relaxed">{item.dua}</p>
                    <div className="flex items-center justify-between">
                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                        Say Amine 🤲
                      </button>
                      <span className="text-gray-400 text-sm">{item.amines} Amines</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar - Fixed Position */}
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm border-t border-slate-700 z-50">
            <div className="flex justify-around py-3">
              {['Home', 'Douas', 'Reminder', 'Profile'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 ${
                    activeTab === tab ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  <span className="text-xl">
                    {tab === 'Home' && '🏠'}
                    {tab === 'Douas' && '🤲'}
                    {tab === 'Reminder' && '⏰'}
                    {tab === 'Profile' && '👤'}
                  </span>
                  <span className="text-xs font-medium">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : showPersonalizationScreen ? (
        /* Screen 5: Welcome and Personalization Survey */
        <>
          {/* Logo and Header Section */}
          <div className="text-center mb-12">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-white font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-2xl md:text-3xl text-white font-light mb-8">
              My.Zikr
            </h1>

            {/* Welcome Message */}
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Welcome {userName || 'Adnan'}!
            </h2>

            {/* Instructional Text */}
            <p className="text-white text-base md:text-lg max-w-md mx-auto leading-relaxed">
              What brings you to My.Zikr? Choose up to 3 so we can customize your navigation.
            </p>
          </div>

          {/* Interest Selection Buttons */}
          <div className="w-full max-w-md space-y-4 mb-8">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => handleInterestToggle(interest.id)}
                className={`w-full py-4 px-6 rounded-xl flex items-center space-x-4 transition-all duration-300 ${
                  selectedInterests.includes(interest.id)
                    ? 'hover:bg-gray-100'
                    : 'hover:bg-slate-700'
                }`}
                style={{
                  backgroundColor: selectedInterests.includes(interest.id) ? '#F7F7E8' : '#1A3A3F'
                }}
              >
                <span
                  className={`text-xl ${
                    selectedInterests.includes(interest.id) ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {interest.icon}
                </span>
                <span
                  className={`text-left flex-1 font-medium ${
                    selectedInterests.includes(interest.id) ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {interest.text}
                </span>
                {selectedInterests.includes(interest.id) && (
                  <span className="text-gray-900 font-bold">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Selection Counter - Show when selections are made */}
          {selectedInterests.length > 0 && (
            <p className="text-white text-sm mb-6 font-medium">
              {selectedInterests.length}/3 selected
            </p>
          )}

          {/* Continue Button */}
          <button
            onClick={handlePersonalizationContinue}
            disabled={selectedInterests.length === 0}
            className={`px-12 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
              selectedInterests.length > 0
                ? 'bg-cream text-gray-900 hover:bg-gray-100 hover:shadow-lg'
                : 'bg-cream text-gray-900 opacity-50 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </>
      ) : showWelcomeScreen ? (
        /* Screen 4: Confirmation and Welcome Screen */
        <>
          {/* Green Leaf Icon in upper-left corner */}
          <div className="absolute top-8 left-8">
            <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Logo and Header Section */}
          <div className="text-center mb-12">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-cream font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-2xl md:text-3xl text-cream font-light mb-6">
              My.Zikr
            </h1>
          </div>

          {/* Message Card */}
          <div className="w-full max-w-md mx-auto mb-8">
            <div className="bg-cream rounded-2xl p-8 shadow-lg">
              <p className="text-gray-900 text-center text-lg leading-relaxed">
                Thank you for your confirmation and for being here. Let&apos;s start discussing.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="bg-cream text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:shadow-md transition-all duration-300"
          >
            Continue
          </button>
        </>
      ) : showChatbot ? (
        /* Chatbot Initial Greeting Screen */
        <>
          {/* Green Leaf Icon in upper-left corner */}
          <div className="absolute top-8 left-8">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Logo and Header Section */}
          <div className="text-center mb-8">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-white font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-2xl md:text-3xl text-white font-light mb-8">
              My.Zikr
            </h1>
          </div>

          {/* Chat Message (Bot's Greeting) */}
          <div className="w-full max-w-2xl mx-auto mb-8">
            {/* Chat Bubble */}
            <div className="flex justify-start mb-6">
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-lg">
                <p className="text-white text-lg font-medium mb-3">
                  Salam aleykoum dear
                </p>
                <p className="text-white text-base leading-relaxed">
                  I am Zikr → your spiritual companion, here to support your spiritual journey with duas and reminders. Please tell me how i can be helpful to you today. Select a section below or tell me directly what you may need and i will do my best to assist you In Sha Allah.
                </p>
              </div>
            </div>

            {/* Action Pills (Suggested Topics) */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <button
                onClick={() => handleSuggestedAction('Authentic dua')}
                className="bg-slate-800 text-white px-4 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-700 transition-colors"
              >
                <span className="text-lg">🤲</span>
                <span className="text-sm font-medium">Authentic dua</span>
              </button>

              <button
                onClick={() => handleSuggestedAction('Custom dua for my situation')}
                className="bg-slate-800 text-white px-4 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-700 transition-colors"
              >
                <span className="text-lg">✍️</span>
                <span className="text-sm font-medium">Custom dua for my situation</span>
              </button>

              <button
                onClick={() => handleSuggestedAction('Spiritual reminder')}
                className="bg-slate-800 text-white px-4 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-700 transition-colors"
              >
                <span className="text-lg">📿</span>
                <span className="text-sm font-medium">Spiritual reminder</span>
              </button>
            </div>
          </div>

          {/* Text Input Area (User Prompt) */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                placeholder="Write down what you need like I need help to ..."
                className="w-full bg-slate-900 text-white placeholder-purple-300 rounded-2xl py-4 px-6 pr-14 border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={handleChatSubmit}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Debug Continue Button */}
          <button
            onClick={handleChatbotContinue}
            className="mt-8 bg-teal-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            Continue to Personalization →
          </button>
        </>
      ) : showAuthenticDuaSelection ? (
        /* Screen 14: Authentic Dua Selection */
        <>
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromAuthenticDua}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Right: Current Mode Indicator */}
            <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Authentic dua</span>
            </div>
          </div>

          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-start space-x-3 mb-6">
              {/* Zikr bot logo/icon */}
              <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>

              {/* Chat Bubble */}
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  That&apos;s great! I can help you with duas from Hisnul Muslim and from the Holy Qur&apos;an. Please choose below with dua you would like to read.
                </p>
              </div>
            </div>
          </div>

          {/* Dua Option Pills (Selection Choices) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
              {[
                'Anxiety',
                'Sadness',
                'To protect kids',
                'When entering home',
                'For forgiveness',
                'For guidance',
                'When entering Toilet',
                'Morning and evening duas',
                'For sickness',
                'When waking up at night',
                'Another one'
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleDuaCategorySelect(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedDuaCategory === category
                      ? 'bg-slate-800 text-white'
                      : 'bg-cream text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Dua Display Card (Content Area) */}
          {showDuaContent && duaContent[selectedDuaCategory as keyof typeof duaContent] && (
            <div className="w-full max-w-4xl mx-auto px-6 mb-8">
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                {/* Title/Context */}
                <div className="text-center mb-6">
                  <p className="text-gray-500 text-sm mb-4">{selectedDuaCategory}</p>
                </div>

                {/* Arabic Text */}
                <div className="text-center mb-6">
                  <p className="text-gray-900 text-2xl md:text-3xl font-arabic leading-relaxed mb-6">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].arabic}
                  </p>
                </div>

                {/* Transliteration */}
                <div className="text-center mb-6">
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].transliteration}
                  </p>
                </div>

                {/* English Translation */}
                <div className="text-center mb-6">
                  <p className="text-gray-800 text-base leading-relaxed">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].translation}
                  </p>
                </div>

                {/* Source Reference */}
                <div className="text-center mb-8">
                  <p className="text-gray-500 text-sm">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].source}
                  </p>
                </div>

                {/* Media Controls */}
                <div className="flex justify-center items-center space-x-6 mb-8">
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z"/>
                    </svg>
                  </button>

                  <button
                    onClick={handlePlayPause}
                    className="bg-teal-600 text-white p-4 rounded-full hover:bg-teal-700 transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,19H18V5H14M6,19H10V5H6V19Z"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                      </svg>
                    )}
                  </button>

                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,5.75L22.25,10H19V16H12.5L10.5,18H19A2,2 0 0,0 21,16V10H24.25L20,5.75M6,18.25L1.75,14H5V8H11.5L13.5,6H5A2,2 0 0,0 3,8V14H0.75L5,18.25Z"/>
                    </svg>
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Save it', 'Share it', 'Pounder it', 'Another one'].map((action) => (
                      <button
                        key={action}
                        onClick={() => handleDuaAction(action)}
                        className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm hover:bg-slate-700 transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => handleDuaAction('The whole collection')}
                      className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm hover:bg-slate-600 transition-colors"
                    >
                      The whole collection
                    </button>
                    <button
                      onClick={() => handleDuaAction('Main menu')}
                      className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm hover:bg-slate-600 transition-colors"
                    >
                      Main menu
                    </button>
                    <button
                      onClick={() => handleDuaAction('Discuss')}
                      className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm hover:bg-slate-600 transition-colors flex items-center space-x-2"
                    >
                      <span>≈</span>
                      <span>Discuss</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromAuthenticDua}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Chatbot
          </button>
        </>
      ) : showCustomDuaGeneration ? (
        /* Screen 17: Custom Dua Generation */
        <>
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromCustomDua}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Right: Current Mode Indicator */}
            <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Custom dua for my situation</span>
            </div>
          </div>

          {/* Conversation Flow */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8 space-y-6">
            {/* Bot Message 1 (Prompt) */}
            <div className="flex items-start space-x-3">
              <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  Please write down what is going on so that i can help you explain it to Allah. Always have trust in Him and never forget He is the best of planners.
                </p>
              </div>
            </div>

            {/* User Message 1 (Request) - Only show if request is submitted */}
            {showGeneratedDua && (
              <div className="flex justify-end">
                <div className="bg-slate-800 rounded-2xl rounded-tr-sm p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    {customDuaRequest}
                  </p>
                </div>
              </div>
            )}

            {/* Bot Message 2 (Generated Dua - Introductory Text) - Only show if dua is generated */}
            {showGeneratedDua && (
              <div className="flex items-start space-x-3">
                <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    Please find below your custom dua. I hope it reflects what your heart feels:
                  </p>
                </div>
              </div>
            )}

            {/* Bot Message 3 (Generated Dua - Content) - Only show if dua is generated */}
            {showGeneratedDua && (
              <div className="flex items-start space-x-3">
                <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-3xl">
                  <div className="text-white text-base leading-relaxed space-y-4">
                    <p>
                      Ya Allah, In this moment of uncertainty and longing, I come before You with a heart full of hope and trust in Your divine wisdom.
                    </p>
                    <p>
                      You are Ar-Razzaq, the Provider, and I know that all sustenance flows from Your generous hands. I seek Your guidance in finding meaningful work that will not only provide for my needs but also allow me to serve Your creation with dignity and purpose.
                    </p>
                    <p>
                      Grant me strength during this time of searching, patience when doors seem closed, and wisdom to recognize the opportunities You place before me. Help me to prepare myself with the skills and knowledge needed, and open the hearts of those who might offer me employment.
                    </p>
                    <p>
                      Ya Allah, surround me with supportive people who will encourage me in this journey, and protect me from despair and anxiety. Remind me that Your timing is perfect, and that what is meant for me will never pass me by.
                    </p>
                    <p>
                      Make this period of waiting a time of growth and reflection, and when You bless me with work, help me to be grateful and to use this opportunity to draw closer to You.
                    </p>
                    <p className="font-medium">
                      Ya Allah, You know what lies within hearts — please accept this supplication. Ameen.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bot Message 4 (Closing Advice) - Only show if dua is generated */}
            {showGeneratedDua && (
              <div className="flex items-start space-x-3">
                <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                  <p className="text-white text-base leading-relaxed">
                    Always do your part and leave the rest to Allah. Do your best and keep tawwākul
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
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomDuaSubmit()}
                  placeholder="Write down what you need like I need help to ..."
                  className="w-full bg-slate-900 text-white placeholder-purple-300 rounded-2xl py-4 px-6 pr-14 border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  onClick={handleCustomDuaSubmit}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-teal-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            /* Action Buttons (After Dua Generation) */
            <div className="w-full max-w-4xl mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-3">
                {['Save it', 'Share it', 'Another one', 'Main menu'].map((action) => (
                  <button
                    key={action}
                    onClick={() => handleCustomDuaAction(action)}
                    className="bg-teal-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromCustomDua}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Chatbot
          </button>
        </>
      ) : showSpiritualReminder ? (
        /* Screen 18: Spiritual Reminder - Wudu Steps */
        <>
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromSpiritualReminder}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Right: Current Mode Indicator */}
            <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Spiritual reminder</span>
            </div>
          </div>

          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-start space-x-3 mb-6">
              {/* Zikr bot logo/icon */}
              <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>

              {/* Chat Bubble */}
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  That&apos;s great! Please find below the Reminders I can help you with. May Allah ease your journey and help you memorise them. Amine
                </p>
              </div>
            </div>
          </div>

          {/* Reminder Option Pills (Selection Choices) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
              {[
                'Wudu steps',
                'Ghusl steps',
                'Prayer steps',
                '99 names of Allah',
                'Istikhara steps',
                'Tachahhoud',
                'Dhikr & Tasbih',
                'Another one',
                '40 Rabbana',
                'Something else'
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleReminderCategorySelect(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedReminderCategory === category
                      ? 'bg-slate-800 text-white'
                      : 'bg-cream text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display Card (New Content Area) */}
          {showReminderContent && reminderContent[selectedReminderCategory as keyof typeof reminderContent] && (
            <div className="w-full max-w-4xl mx-auto px-6 mb-8">
              <div className="bg-cream rounded-2xl p-8 shadow-lg">
                {/* Title/Context */}
                <div className="flex items-center space-x-2 mb-6">
                  <h3 className="text-slate-800 text-xl font-semibold">
                    {reminderContent[selectedReminderCategory as keyof typeof reminderContent].title}
                  </h3>
                  <span className="text-slate-800">→</span>
                </div>

                {/* Instructional Text */}
                <div className="mb-6">
                  <p className="text-gray-800 text-base leading-relaxed">
                    {reminderContent[selectedReminderCategory as keyof typeof reminderContent].description}
                  </p>
                </div>

                {/* Download Link */}
                <div className="mb-8">
                  <a
                    href="#"
                    className="text-blue-800 text-base font-medium hover:text-blue-600 transition-colors underline"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Download PDF:', selectedReminderCategory);
                    }}
                  >
                    {reminderContent[selectedReminderCategory as keyof typeof reminderContent].downloadLink}
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleReminderAction('Another reminder')}
                    className="bg-cream border border-gray-400 text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Another reminder
                  </button>

                  <button
                    onClick={() => handleReminderAction('Discuss')}
                    className="bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex items-center space-x-2"
                  >
                    <span>≈</span>
                    <span>Discuss</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromSpiritualReminder}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Chatbot
          </button>
        </>
      ) : showAuthenticDuasGrid ? (
        /* Screen 19: Authentic Duas Category Grid */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-6">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromAuthenticDuasGrid}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Center Title */}
            <h1 className="text-white text-xl font-semibold">Authentic douas</h1>

            {/* Right: Search icon */}
            <button className="text-white text-xl hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-between w-full px-6 mb-8">
            <p className="text-white text-sm text-center flex-1">
              Douas to connect to Allah and to find comfort with heartfelt words
            </p>
            <button className="text-white text-lg hover:text-gray-300 transition-colors ml-4">
              <span>≈</span>
            </button>
          </div>

          {/* Category Grid (Main Content) */}
          <div className="flex-1 px-6 mb-8">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {duaCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleDuaCategoryGridSelect(category.name)}
                  className="flex flex-col items-center space-y-3 p-4 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors"
                >
                  {/* Circular Icon */}
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">{category.icon}</span>
                  </div>

                  {/* Category Name */}
                  <span className="text-white text-sm font-medium text-center">
                    {category.name}
                  </span>

                  {/* Chapter Count */}
                  <span className="text-white text-xs opacity-75 text-center">
                    {category.chapters}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* "Discover the wall of douas" Section (Footer) */}
          <div className="px-6 pb-8">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                Discover the wall of douas
              </h3>
              <p className="text-white text-sm opacity-90">
                Find out douas that people made and support them by saying &apos;Amine&apos;.
              </p>
            </div>

            {/* Navigation Button */}
            <div className="flex justify-center">
              <button
                onClick={handleWallOfDuasFromGrid}
                className="bg-slate-800 text-white px-6 py-3 rounded-full flex items-center space-x-3 hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm">≈</span>
                <span className="text-sm font-medium">Discuss</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromAuthenticDuasGrid}
            className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Chatbot
          </button>
        </div>
      ) : showChatbotDiscussionHub ? (
        /* Screen 20: Chatbot Discussion Hub */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-8">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromDiscussionHub}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Center Title Pill */}
            <div className="bg-slate-800 rounded-full px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Discuss</span>
            </div>

            {/* Right: Empty space for balance */}
            <div className="w-6"></div>
          </div>

          {/* Chat Message (Bot's Response) */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-6">
            <div className="flex items-start space-x-3">
              <div className="bg-teal-700 rounded-full p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
              <div className="bg-teal-800 bg-opacity-80 rounded-2xl rounded-tl-sm p-6 max-w-2xl">
                <p className="text-white text-base leading-relaxed">
                  I am always here dear, how can i help you now? Please select a topic below or tell me what you need.
                </p>
              </div>
            </div>
          </div>

          {/* Action Pills (Quick Links) */}
          <div className="w-full max-w-4xl mx-auto px-6 mb-8">
            <div className="space-y-4">
              {/* Row 1 (2 pills) */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleQuickAction('See my saved duas')}
                  className="bg-cream text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  See my saved duas
                </button>
                <button
                  onClick={() => handleQuickAction('Talk to support')}
                  className="bg-cream text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Talk to support
                </button>
              </div>

              {/* Row 2 (2 pills) */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleQuickAction('See the wall of duas')}
                  className="bg-cream text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  See the wall of duas
                </button>
                <button
                  onClick={() => handleQuickAction('See the whole duas collection')}
                  className="bg-cream text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  See the whole duas collection
                </button>
              </div>

              {/* Row 3 (1 pill) */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleQuickAction('See the whole reminders collection')}
                  className="bg-cream text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center max-w-xs w-full"
                >
                  See the whole reminders collection
                </button>
              </div>
            </div>
          </div>

          {/* Text Input Area (User Prompt) */}
          <div className="w-full max-w-4xl mx-auto px-6 pb-8 mt-auto">
            <div className="relative">
              <textarea
                value={discussionInput}
                onChange={(e) => setDiscussionInput(e.target.value)}
                placeholder="Write down what you need like I need help to ..."
                className="w-full h-32 bg-slate-800 text-white placeholder-purple-300 rounded-2xl p-6 pr-16 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleDiscussionSubmit();
                  }
                }}
              />

              {/* Send Icon */}
              <button
                onClick={handleDiscussionSubmit}
                className="absolute bottom-4 right-4 text-white text-2xl hover:text-teal-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromDiscussionHub}
            className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Previous Screen
          </button>
        </div>
      ) : showDuaContentViewer ? (
        /* Screen 21: Dua Content Viewer */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-8">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromDuaContentViewer}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-white text-xl font-semibold">
              {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid]?.title || selectedGridCategory}
            </h1>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <span className="font-bold">Aa</span>
              </button>
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
              <button className="text-white text-lg hover:text-gray-300 transition-colors">
                <span>⋯</span>
              </button>
            </div>
          </div>

          {/* Dua Content Display */}
          <div className="flex-1 px-6 mb-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid] && (
                <>
                  {/* Arabic Text */}
                  <div className="mb-8">
                    <p className="text-white text-3xl md:text-4xl font-arabic leading-relaxed">
                      {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid].arabic}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div className="mb-8">
                    <p className="text-white text-lg md:text-xl italic leading-relaxed">
                      {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid].transliteration}
                    </p>
                  </div>

                  {/* English Translation */}
                  <div className="mb-8">
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid].translation}
                    </p>
                  </div>

                  {/* Source Reference */}
                  <div className="mb-12">
                    <p className="text-gray-400 text-sm">
                      {duaContentGrid[selectedGridCategory as keyof typeof duaContentGrid].source}
                    </p>
                  </div>
                </>
              )}

              {/* Audio Controls */}
              <div className="flex items-center justify-center space-x-6 mb-12">
                <button className="relative text-white text-2xl hover:text-gray-300 transition-colors">
                  <span className="absolute -top-1 -right-1 text-xs">🔒</span>
                  <span>⏮</span>
                </button>

                <button
                  onClick={handleAudioPlay}
                  className="relative w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-opacity-30 transition-colors"
                >
                  {isPlaying ? '⏸' : '▶'}
                  <div className="absolute inset-0 rounded-full border-4 border-teal-500" style={{
                    background: `conic-gradient(#14b8a6 ${audioProgress * 3.6}deg, transparent 0deg)`
                  }}></div>
                </button>

                <button className="text-white text-2xl hover:text-gray-300 transition-colors">
                  <span>⏭</span>
                </button>
              </div>
            </div>
          </div>

          {/* Action Button (Bottom) */}
          <div className="px-6 pb-8">
            <div className="flex justify-center">
              <button
                onClick={() => setShowChatbotDiscussionHub(true)}
                className="bg-slate-800 text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm">≈</span>
                <span className="text-sm font-medium">Discuss</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromDuaContentViewer}
            className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Grid
          </button>
        </div>
      ) : showInteriorDesignSettings ? (
        /* Screen 22 & 23: My Interior Design - Settings */
        <div className="flex-1 flex flex-col min-h-screen w-full max-w-none">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-6">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromInteriorDesignSettings}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Title */}
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
              </svg>
              <span className="text-white text-lg font-semibold">My interior design</span>
            </div>

            {/* Right: Close icon (for Screen 23) */}
            <button className="text-white text-xl hover:text-gray-300 transition-colors">
              <span>×</span>
            </button>
          </div>

          {/* Instructional Text */}
          <div className="px-6 mb-8">
            <p className="text-white text-sm text-center">
              Customize your space so that you navigate according to what you love.
            </p>
            <p className="text-white text-sm text-center mt-2 opacity-75">
              Chaque âme est unique ≈ Personnalise ton expérience
            </p>
          </div>

          {/* Settings Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-24">
            <div className="space-y-6 max-w-2xl mx-auto">

              {/* Card 1: Name and Language */}
              <div className="bg-cream rounded-2xl p-6">
                <div className="space-y-6">
                  {/* Name Section */}
                  <div>
                    <h3 className="text-gray-900 text-lg font-semibold mb-3">
                      How should you be called?
                    </h3>
                    <input
                      type="text"
                      value={userSettings.name}
                      onChange={(e) => handleSettingChange('name', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Language Section */}
                  <div>
                    <h3 className="text-gray-900 text-lg font-semibold mb-3">
                      What is your preferred language?
                    </h3>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleSettingChange('language', 'English')}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                          userSettings.language === 'English'
                            ? 'bg-green-800 text-white'
                            : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleSettingChange('language', 'French')}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                          userSettings.language === 'French'
                            ? 'bg-green-800 text-white'
                            : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        French
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Notifications */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="text-gray-900 text-lg font-semibold mb-4">
                  How do you preferred to be notified?
                </h3>

                {/* For duas section */}
                <div className="mb-6">
                  <h4 className="text-gray-900 text-base font-medium mb-3">For duas:</h4>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm">
                      Morning Duas
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-gray-50">
                      Evening Duas
                    </button>
                  </div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={userSettings.duaOfTheDay}
                      onChange={() => handleSettingToggle('duaOfTheDay')}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-900 text-sm">Dua of the day according to my mood</span>
                  </label>
                </div>

                {/* Toggles section */}
                <div className="space-y-4">
                  {[
                    { key: 'wallNotifications', label: 'For the wall of duas' },
                    { key: 'amineNotifications', label: 'When someone says Amine' },
                    { key: 'updates', label: 'To receive updates' },
                    { key: 'newsletter', label: 'To receive heart newsletter' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <span className="text-gray-900 text-sm">{item.label}</span>
                      <button
                        onClick={() => handleSettingToggle(item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          userSettings[item.key as keyof typeof userSettings]
                            ? 'bg-green-600'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            userSettings[item.key as keyof typeof userSettings]
                              ? 'translate-x-6'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screen 23 Content - Spiritual Profile */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="text-gray-900 text-lg font-semibold mb-4">
                  Profil spirituel
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">{userSettings.name}</span>
                    <span className="text-gray-600 text-sm">{userSettings.gender} →</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Langue</span>
                    <span className="text-gray-600 text-sm">{userSettings.language} →</span>
                  </div>
                </div>
              </div>

              {/* Reminders & Notifications */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="text-gray-900 text-lg font-semibold mb-4">
                  Rappels & notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Time to receive your reminder</span>
                    <span className="text-gray-600 text-sm">{userSettings.reminderTime} →</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Doua du jour</span>
                    <button
                      onClick={() => handleSettingToggle('duaOfTheDay')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userSettings.duaOfTheDay ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          userSettings.duaOfTheDay ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Notifications bienveillantes</span>
                    <button
                      onClick={() => handleSettingToggle('kindNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userSettings.kindNotifications ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          userSettings.kindNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Display Preferences */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="text-gray-900 text-lg font-semibold mb-4">
                  Préférences d&apos;affichage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Size of text</span>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={userSettings.textSize}
                        onChange={(e) => handleSettingChange('textSize', parseInt(e.target.value))}
                        className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-gray-600 text-sm">→</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Activate sounds</span>
                    <button
                      onClick={() => handleSettingToggle('sounds')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userSettings.sounds ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          userSettings.sounds ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Connection & Confidentiality */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="text-gray-900 text-lg font-semibold mb-4">
                  Connexion & confidentialité
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-sm">Save your notes on the cloud</span>
                    <button
                      onClick={() => handleSettingToggle('cloudSave')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        userSettings.cloudSave ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          userSettings.cloudSave ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                    Delete my data
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button (Bottom) */}
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm p-6">
            <div className="flex justify-center">
              <button
                onClick={() => setShowChatbotDiscussionHub(true)}
                className="bg-slate-800 text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm">≈</span>
                <span className="text-sm font-medium">Discuss</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={handleBackFromInteriorDesignSettings}
            className="fixed top-20 left-4 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity z-50"
          >
            ← Back to Menu
          </button>
        </div>
      ) : (
        <>
          {/* Logo and Header Section */}
          <div className="text-center mb-12">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-cream font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-2xl md:text-3xl text-cream font-light mb-6">
              My.Zikr
            </h1>

            {/* Greeting */}
            <p className="text-cream text-lg md:text-xl mb-8 font-light">
              Salam Alaykoum and welcome!
            </p>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl text-cream font-bold mb-4">
              {showEmailForm ? (isLogin ? 'Login' : 'Register') : (isLogin ? 'Log In' : 'Register')}
            </h2>

            {/* Subtitle for Login Form or Toggle Link */}
            {showEmailForm && isLogin ? (
              <p className="text-cream text-base md:text-lg mb-4">
                Sign in to continue.
              </p>
            ) : !showEmailForm ? (
              <p className="text-cream text-base md:text-lg">
                {isLogin ? "Don't have an account? " : "Already Registered? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="underline hover:text-gray-300 transition-colors font-medium"
                >
                  {isLogin ? 'Register here' : 'Log in here'}
                </button>
              </p>
            ) : null}
          </div>

          {/* Conditional Content: Show Email Form or Auth Options */}
          {showEmailForm ? (
        isLogin ? (
          /* Screen 3: Email Login Form */
          <div className="w-full max-w-sm space-y-6">
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
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                placeholder="******"
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:text-gray-900 transition-all duration-300 text-base md:text-lg font-medium"
            >
              Login
            </button>

            {/* Back Button */}
            <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:text-gray-300 transition-colors"
            >
              Back to options
            </button>
          </div>
        ) : (
          /* Screen 2: Email Registration Form */
          <div className="w-full max-w-sm space-y-6">
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
                placeholder="Jiara Martins"
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                placeholder="******"
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="text-center">
              <p className="text-cream text-sm">
                By clicking below, you agree{' '}
                <button className="text-blue-400 underline hover:text-blue-300 transition-colors">
                  terms and conditions
                </button>
                {' '}of My zikr.
              </p>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:text-gray-900 transition-all duration-300 text-base md:text-lg font-medium"
            >
              Sign up
            </button>

            {/* Back Button */}
            <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:text-gray-300 transition-colors"
            >
              Back to options
            </button>
          </div>
        )
      ) : (
        /* Screen 1: Authentication Options */
        <div className="w-full max-w-sm space-y-4">
          {/* Email Authentication Button */}
          <button
            onClick={handleEmailAuth}
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{isLogin ? 'Sign in with an e-mail' : 'Sign up with an e-mail'}</span>
          </button>

          {/* Google Authentication Button */}
          <button
            onClick={handleGoogleAuth}
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>{isLogin ? 'Sign in with Google' : 'Sign up with Google'}</span>
          </button>

          {/* Apple Authentication Button */}
          <button
            onClick={handleAppleAuth}
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>{isLogin ? 'Sign in with Apple' : 'Sign up with Apple'}</span>
          </button>
        </div>
          )}
        </>
      )}

      {/* Screen 16: Discuss Section / Side Menu Overlay */}
      {showDiscussMenu && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay with dimmed effect */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={handleCloseDiscussMenu}
          />

          {/* Green leaf icon in upper-left corner */}
          <div className="absolute top-8 left-8 z-60">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Menu Container */}
          <div className="relative w-80 h-full">
            <div className="bg-cream rounded-r-2xl shadow-2xl h-full p-6 overflow-y-auto">
              {/* Menu Items */}
              <div className="space-y-2 mb-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemSelect(item.text)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-colors text-left ${
                      selectedMenuItem === item.text
                        ? 'bg-teal-800 text-white'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-xl ${
                      selectedMenuItem === item.text ? 'text-white' : 'text-gray-700'
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`font-medium ${
                      selectedMenuItem === item.text ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Premium Feature Callout */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => handleMenuItemSelect('My.Zikr+')}
                  className="w-full flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-gray-400">💎</span>
                    <span className="text-xl text-gray-400">🔒</span>
                  </div>
                  <span className="font-medium text-gray-900">My.Zikr+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Ghosted background content (visible but dimmed) */}
          <div className="flex-1 relative">
            {/* Ghosted "Continue" Button */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded-lg text-sm opacity-30 cursor-not-allowed">
                Continue
              </button>
            </div>

            {/* Footer elements from underlying screen */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2 opacity-50">
              <span className="text-white text-sm">📄</span>
              <span className="text-white text-sm">19</span>
            </div>

            {/* Thin blue line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 opacity-30" />
          </div>
        </div>
      )}
    </div>
  );
}
