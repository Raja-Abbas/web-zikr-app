'use client';

import { useState, useEffect, useRef } from 'react';
import { useDuas } from '../hooks/useDuas';
import { useWallOfDuas } from '../hooks/useWallOfDuas';

export default function Home() {
  // Dua data and state management
  const {
    categories: duaCategories,
    dailyDua,
    selectedCategory,
    selectedDua,
    showDuaContent,
    selectDuaCategory,
    clearSelection,
    getRecommendedDuas,
  } = useDuas();

  // Wall of Duas data and state management
  const {
    displayDuas,
    userLocation,
    settings,
    showLocationSettings,
    showThemeSettings,
    sayAmine,
    toggleLocationSettings,
    toggleThemeSettings,
    formatAmineCount,
    getTimeAgo,
  } = useWallOfDuas();

  const [isLogin, setIsLogin] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeAdnanScreen, setShowWelcomeAdnanScreen] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  const [showPersonalizationScreen, setShowPersonalizationScreen] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedDouaCategory, setSelectedDouaCategory] = useState('Authentic douas');
  const [customDouaText, setCustomDouaText] = useState('');
  const [showWallOfDuas, setShowWallOfDuas] = useState(false);
  const [showAuthenticDuaSelection, setShowAuthenticDuaSelection] = useState(false);

  const [showAuthenticDuaCategories, setShowAuthenticDuaCategories] = useState(false);
  const [selectedDuaCategory, setSelectedDuaCategory] = useState('');
  const [showDiscussMenu, setShowDiscussMenu] = useState(false);
  const [showCustomDuaGeneration, setShowCustomDuaGeneration] = useState(false);
  const [showSpiritualReminder, setShowSpiritualReminder] = useState(false);
  const [showAuthenticDuasGrid, setShowAuthenticDuasGrid] = useState(false);
  const [showChatbotDiscussionHub, setShowChatbotDiscussionHub] = useState(false);
  const [showDuaContentViewer, setShowDuaContentViewer] = useState(false);
  const [showInteriorDesignSettings, setShowInteriorDesignSettings] = useState(false);
  const [showLeavesMenu, setShowLeavesMenu] = useState(false);
  const [showLocalDuaContent, setShowLocalDuaContent] = useState(false);
  const [showMatinSoirDetails, setShowMatinSoirDetails] = useState(false);
  const [showWriteDuaScreen, setShowWriteDuaScreen] = useState(false);
  const [writeDuaText, setWriteDuaText] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [discussionInput, setDiscussionInput] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [selectedGridCategory, setSelectedGridCategory] = useState('Protection');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Interior design');
  const [selectedReminderCategory, setSelectedReminderCategory] = useState('Wudu steps');
  const [showReminderContent, setShowReminderContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customDuaRequest, setCustomDuaRequest] = useState('');
  const [showGeneratedDua, setShowGeneratedDua] = useState(false);
  const [showFeelingSelector, setShowFeelingSelector] = useState(false);
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

  // Refs for auto-scroll functionality
  const duaContentRef = useRef<HTMLDivElement>(null);
  const gridDuaContentRef = useRef<HTMLDivElement>(null);
  const welcomeAdnanContinueRef = useRef<HTMLDivElement>(null);

  // Navigation state manager
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['auth']);

  // Debug Wall of Duas state
  useEffect(() => {
    console.log('Wall of Duas Debug:', {
      showWallOfDuas,
      activeTab,
      showHomeScreen,
      currentScreen,
      condition: showWallOfDuas && activeTab === 'Douas' && showHomeScreen
    });
  }, [showWallOfDuas, activeTab, showHomeScreen, currentScreen]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Centralized navigation function
  const navigateToScreen = (screenName: string, options: Record<string, string | boolean | number> = {}) => {
    console.log('Navigating to:', screenName, options);

    // Reset all screen states (except showWallOfDuas for wall-of-duas navigation)
    setShowEmailForm(false);
    setShowWelcomeAdnanScreen(false);
    setShowSuccessScreen(false);
    setShowWelcomeScreen(false);
    setShowPersonalizationScreen(false);
    setShowHomeScreen(false);
    setShowAuthenticDuaSelection(false);
    setShowDiscussMenu(false);
    setShowCustomDuaGeneration(false);
    setShowSpiritualReminder(false);
    setShowAuthenticDuasGrid(false);
    setShowChatbotDiscussionHub(false);
    setShowDuaContentViewer(false);
    setShowInteriorDesignSettings(false);
    setShowMatinSoirDetails(false);
    setShowWriteDuaScreen(false);
    if (screenName !== 'wall-of-duas') {
      setShowWallOfDuas(false);
    }
    setShowReminderContent(false);
    setShowGeneratedDua(false);
    setShowLeavesMenu(false);
    setShowFeelingSelector(false);

    // Update navigation history
    setNavigationHistory(prev => [...prev, screenName]);
    setCurrentScreen(screenName);

    // Set the appropriate screen state
    switch (screenName) {
      case 'auth':
        // Default state - all screens are false
        break;
      case 'welcome-adnan':
        setShowWelcomeAdnanScreen(true);
        break;
      case 'success':
        setShowSuccessScreen(true);
        break;
      case 'welcome':
        setShowWelcomeScreen(true);
        break;
      case 'personalization':
        setShowPersonalizationScreen(true);
        break;
      case 'home':
        setShowHomeScreen(true);
        setActiveTab('Home');
        break;
      case 'douas':
        setShowHomeScreen(true);
        setActiveTab('Douas');
        break;
      case 'reminder':
        setShowHomeScreen(true);
        setActiveTab('Reminder');
        break;
      case 'profile':
        setShowHomeScreen(true);
        setActiveTab('Profile');
        break;
      case 'wall-of-duas':
        console.log('Setting Wall of Duas states...');
        setShowHomeScreen(true);
        setActiveTab('Douas');
        setShowWallOfDuas(true);
        console.log('Wall of Duas states set - showHomeScreen: true, activeTab: Douas, showWallOfDuas: true');
        break;
      case 'authentic-dua-selection':
        setShowAuthenticDuaSelection(true);
        break;
      case 'custom-dua-generation':
        setShowCustomDuaGeneration(true);
        break;
      case 'spiritual-reminder':
        setShowSpiritualReminder(true);
        if (options.category && typeof options.category === 'string') {
          setSelectedReminderCategory(options.category);
        }
        break;
      case 'authentic-duas-grid':
        setShowAuthenticDuasGrid(true);
        break;
      case 'chatbot-discussion-hub':
        setShowChatbotDiscussionHub(true);
        break;
      case 'dua-content-viewer':
        setShowDuaContentViewer(true);
        if (options.category && typeof options.category === 'string') {
          setSelectedGridCategory(options.category);
        }
        break;
      case 'interior-design-settings':
        setShowInteriorDesignSettings(true);
        break;
      case 'matin-soir-details':
        setShowMatinSoirDetails(true);
        break;
      case 'write-dua':
        setShowWriteDuaScreen(true);
        break;
      case 'email-form':
        setShowEmailForm(true);
        break;
      default:
        console.warn('Unknown screen:', screenName);
        // Fallback to auth screen
        setCurrentScreen('auth');
        break;
    }
  };

  // Navigation helper functions
  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      navigateToScreen(previousScreen);
    } else {
      // Fallback to auth if no history
      navigateToScreen('auth');
    }
  };

  const resetToAuth = () => {
    setNavigationHistory(['auth']);
    navigateToScreen('auth');
    setIsLogin(false);
    setUserName('');
    setSelectedInterests(['douas', 'community']);
    setActiveTab('Home');
    setChatInput('');
    setDiscussionInput('');
    setSelectedDuaCategory('To protect kids');
    setSelectedGridCategory('Protection');
  };

  const handleEmailAuth = () => {
    navigateToScreen('email-form');
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
    // Store user name and redirect to welcome adnan screen after successful registration
    setUserName(formData.name);
    navigateToScreen('welcome-adnan');
  };

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login with:', loginData);
    // For login, use a default name or stored name
    setUserName('Adnan'); // Default name for login users
    navigateToScreen('welcome');
  };

  const handleBackToOptions = () => {
    navigateToScreen('auth');
  };

  const handleWelcomeAdnanContinue = () => {
    // Navigate from welcome adnan screen to success screen
    navigateToScreen('success');
  };

  const handleContinue = () => {
    // Navigate from welcome screen to personalization screen
    navigateToScreen('personalization');
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
    navigateToScreen('home');
  };

  const handleWallOfDuasClick = () => {
    navigateToScreen('wall-of-duas');
  };

  const handleLeavesMenuToggle = () => {
    setShowLeavesMenu(!showLeavesMenu);
  };

  const handleLeavesMenuItemSelect = (item: string) => {
    console.log('Selected leaves menu item:', item);
    setShowLeavesMenu(false);

    // Handle navigation based on selected item using centralized navigation
    switch (item) {
      case 'Home':
        navigateToScreen('home');
        break;
      case 'Douas':
        navigateToScreen('douas');
        break;
      case 'Reminder':
        navigateToScreen('reminder');
        break;
      case 'Discuss':
        handleDiscussClick();
        break;
      case 'Profile':
        navigateToScreen('profile');
        break;
      case 'Settings':
        navigateToScreen('interior-design-settings');
        break;
      case 'Wall of Duas':
        navigateToScreen('wall-of-duas');
        break;
      case 'Chatbot':
        navigateToScreen('chatbot');
        break;
      case 'Back':
        goBack();
        break;
      default:
        console.warn('Unknown menu item:', item);
        break;
    }
  };



  const handleChatSubmit = () => {
    if (chatInput.trim()) {
      console.log('Chat message:', chatInput);
      // Here you would typically send the message to your AI backend
      setChatInput('');
    }
  };





  const handleDuaCategorySelect = (category: string) => {
    setSelectedDuaCategory(category);

    // Check if the category exists in our duaContent object and show content
    if (category in duaContent) {
      setShowLocalDuaContent(true);

      // Auto-scroll to dua content after selection
      setTimeout(() => {
        gridDuaContentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      setShowLocalDuaContent(false);
    }

    console.log('Selected dua category:', category);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log('Audio playback:', !isPlaying ? 'playing' : 'paused');
  };

  const handleDuaAction = (action: string) => {
    console.log('Dua action:', action);
    if (action === 'Discuss') {
      clearSelection(); // Clear dua selection using the hook
      handleDiscussClick();
    }
    // Handle different actions like save, share, etc.
  };

  const handleMenuItemSelect = (item: string) => {
    setSelectedMenuItem(item);
    console.log('Selected menu item:', item);
    setShowLeavesMenu(false); // Close leaves menu
    setShowDiscussMenu(false); // Close side menu if open

    // Handle navigation to different sections using centralized navigation
    switch (item) {
      case 'Discuss':
        handleDiscussClick();
        break;
      case 'Duas':
        navigateToScreen('authentic-duas-grid');
        break;
      case 'Reminders':
        navigateToScreen('reminder');
        break;
      case 'My notes':
        console.log('Navigate to notes section');
        // TODO: Implement notes navigation
        break;
      case 'The wall of duas':
        navigateToScreen('wall-of-duas');
        break;
      case 'My profile':
        navigateToScreen('profile');
        break;
      case 'Interior design':
        navigateToScreen('interior-design-settings');
        break;
      case 'My.Zikr+':
        console.log('Navigate to premium subscription');
        // TODO: Implement premium navigation
        break;
      case 'Back':
        goBack();
        break;
      default:
        console.warn('Unknown menu item:', item);
        break;
    }
  };

  const handleCloseDiscussMenu = () => {
    setShowDiscussMenu(false);
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
      setShowCustomDuaGeneration(false);
      setShowGeneratedDua(false);
      setCustomDuaRequest('');
      setShowHomeScreen(true);
    }
    // Handle other actions like save, share, etc.
  };

  const handlePublishDua = () => {
    if (writeDuaText.trim()) {
      console.log('Publishing dua:', writeDuaText);
      // TODO: Send dua to backend for review
      // For now, just show success message and navigate back
      alert('Your dua has been submitted for review. Thank you for sharing!');
      setWriteDuaText('');
      setShowWriteDuaScreen(false);
      setShowHomeScreen(true);
    }
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
      handleDiscussClick();
    }
    // Handle other actions
  };



  const handleDuaCategoryGridSelect = (category: string) => {
    console.log('Selected dua category from grid:', category);
    setSelectedGridCategory(category);

    // If it's "Matin & Soir", go to the detailed list screen
    if (category === 'Matin & Soir') {
      setShowAuthenticDuasGrid(false);
      setShowMatinSoirDetails(true);
    } else {
      setShowAuthenticDuasGrid(false);
      setShowDuaContentViewer(true);
    }
  };

  const handleWallOfDuasFromGrid = () => {
    console.log('Navigate to Wall of Duas from grid');
    navigateToScreen('wall-of-duas');
  };

  const handleBackFromDiscussionHub = () => {
    // Navigate back to previous screen (could be from various sources)
    setShowChatbotDiscussionHub(false);
    setDiscussionInput('');
    // Return to home screen by default
    setShowHomeScreen(true);
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
        navigateToScreen('wall-of-duas');
        break;
      default:
        break;
    }
  };

  const handleResetToAuth = () => {
    // Reset to initial authentication state using centralized navigation
    resetToAuth();
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

  const handleOptionSelect = (option: string) => {
    console.log('Selected option:', option);
    // Handle navigation based on selected option
    switch (option) {
      case 'authentic-dua':
        navigateToScreen('authentic-dua-selection');
        break;
      case 'custom-dua':
        navigateToScreen('custom-dua-generation');
        break;
      case 'spiritual-reminder':
        navigateToScreen('spiritual-reminder');
        break;
      default:
        console.warn('Unknown option:', option);
        break;
    }
  };

  const handleCustomMessageSubmit = () => {
    if (customMessage.trim()) {
      console.log('Custom message:', customMessage);
      // Navigate to chat with the custom message context
      navigateToScreen('chatbot');
      setCustomMessage('');
    }
  };



  const handleBackFromAuthenticDuaCategories = () => {
    setShowAuthenticDuaCategories(false);
    setShowPersonalizationScreen(true);
  };

  const handleToProtectKidsCategorySelect = (category: string) => {
    console.log('Selected dua category:', category);
    setSelectedDuaCategory(category);
    // Navigate to dedicated dua content viewer screen using centralized navigation
    navigateToScreen('dua-content-viewer', { category });
  };

  // Universal discussion handler - can be called from any screen
  const handleDiscussClick = () => {
    console.log('Navigating to discussion section...');
    // Clear all other screens
    setShowHomeScreen(false);
    setShowWelcomeScreen(false);
    setShowPersonalizationScreen(false);
    setShowAuthenticDuaCategories(false);
    setShowAuthenticDuaSelection(false);
    setShowDiscussMenu(false);
    setShowCustomDuaGeneration(false);
    setShowSpiritualReminder(false);
    setShowAuthenticDuasGrid(false);
    setShowDuaContentViewer(false);
    setShowInteriorDesignSettings(false);
    setShowWallOfDuas(false);
    setShowEmailForm(false);

    // Show discussion hub
    setShowChatbotDiscussionHub(true);
  };

  const handleToProtectKidsDuaAction = (action: string) => {
    console.log('Dua action:', action);
    switch (action) {
      case 'Save it':
        console.log('Saving dua...');
        break;
      case 'Share it':
        console.log('Sharing dua...');
        break;
      case 'Pounder it':
        console.log('Pondering dua...');
        break;
      case 'Another one':
        console.log('Loading another dua...');
        break;
      case 'The whole collection':
        console.log('Opening collection...');
        break;
      case 'Main menu':
        handleBackFromAuthenticDuaCategories();
        break;
      case 'Discuss':
        handleDiscussClick();
        break;
      default:
        console.warn('Unknown action:', action);
        break;
    }
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
    {
      id: 'discuss',
      icon: (
        <div className="flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            {/* First speech bubble - dark green */}
            <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-.55 0-1.08-.11-1.56-.31L8 17v-2.5c-1.25-.73-2-2.1-2-3.5z" fill="#0A7A33"/>
            {/* Second speech bubble - cream/beige */}
            <path d="M16 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.41 0-.8-.08-1.17-.23L16 12v-1.5c-.94-.55-1.5-1.58-1.5-2.5z" fill="#F5F5DC"/>
          </svg>
        </div>
      ),
      text: 'Discuss'
    },
    { id: 'duas', icon: '🤲', text: 'Duas' },
    { id: 'reminders', icon: '🧠', text: 'Reminders' },
    { id: 'notes', icon: '📝', text: 'My notes' },
    { id: 'wall', icon: '🚶‍♂️', text: 'The wall of duas' },
    { id: 'profile', icon: '👤', text: 'My profile' },
    { id: 'interior', icon: '⚙️', text: 'Interior design' },
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

  // Matin & Soir Duas List
  const matinSoirDuas = [
    { id: 1, title: "Lorsque l'on se réveille", count: 4 },
    { id: 27, title: "Invocation du matin", count: 2 },
    { id: 28, title: "Invocation du soir", count: 3 },
    { id: 29, title: "Avant de dormir", count: 5 },
    { id: 30, title: "Lorsque l'on se couche", count: 2 },
    { id: 31, title: "Invocation contre l'insomnie", count: 1 },
    { id: 32, title: "Lorsque l'on fait un rêve", count: 3 },
    { id: 33, title: "Invocation de protection nocturne", count: 2 },
    { id: 34, title: "Dhikr avant le sommeil", count: 4 },
    { id: 35, title: "Invocation au réveil nocturne", count: 1 },
    { id: 36, title: "Tasbih du matin", count: 3 },
    { id: 37, title: "Tasbih du soir", count: 3 },
    { id: 38, title: "Istighfar matinal", count: 2 },
    { id: 39, title: "Protection divine quotidienne", count: 1 },
    { id: 40, title: "Bénédiction de la journée", count: 2 }
  ];

  // Authentic Duas Categories for Grid (French as in screenshot)
  const authenticDuaCategories = [
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

  // Profile Dua Categories Content
  const profileDuaContent = {
    'Anxiety': {
      title: 'Dua for Anxiety',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
      transliteration: 'Allāhumma innī a\'ūdhu bika mina l-hammi wa l-ḥazani wa l-\'ajzi wa l-kasali wa l-bukhli wa l-jubni wa ḍala\'i d-dayni wa ghalabati r-rijāl',
      translation: 'O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by other men.',
      source: 'Sahih al-Bukhari 6369'
    },
    'Sadness': {
      title: 'Dua for Sadness',
      arabic: 'اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ',
      transliteration: 'Allāhumma innī \'abduka bnu \'abdika bnu amatika nāṣiyatī biyadika māḍin fiyya ḥukmuka \'adlun fiyya qaḍā\'uka',
      translation: 'O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand, Your command over me is forever executed and Your decree over me is just.',
      source: 'Musnad Ahmad 3712'
    },
    'To protect kids': {
      title: 'To protect kids',
      arabic: 'أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      transliteration: 'U\'īdhukumā bi-kalimāti l-lāhi t-tāmmāti min kulli shaytānin wa hāmmatin wa min kulli \'aynin lāmmatin',
      translation: 'I seek protection for you from the perfect words of Allah against every devil, from every harmful animal (or thing) and from every evil eye.',
      source: '[1] al-Bukhari N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).'
    },
    'When entering home': {
      title: 'When entering home',
      arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      transliteration: 'Bismi llāhi walajna wa bismi llāhi kharajna wa \'alā llāhi rabbinā tawakkalnā',
      translation: 'In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.',
      source: 'Abu Dawud 5096'
    },
    'For forgiveness': {
      title: 'For forgiveness',
      arabic: 'رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي',
      transliteration: 'Rabbi ghfir lī dhanbī wa khaṭa\'ī wa jahlī wa mā asrartu wa mā a\'lantu wa mā anta a\'lamu bihi minnī',
      translation: 'My Lord, forgive me my sin, my ignorance, my transgression and what I have concealed and what I have done openly and what You know better than I.',
      source: 'Sahih al-Bukhari 6398'
    },
    'For guidance': {
      title: 'For guidance',
      arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ',
      transliteration: 'Allāhumma hdinī fīman hadayta wa \'āfinī fīman \'āfayta wa tawallanī fīman tawallayta',
      translation: 'O Allah, guide me among those You have guided, grant me security among those You have granted security and take me into Your care among those You have taken into Your care.',
      source: 'Abu Dawud 1425'
    }
  };

  // Navigation validation and fallback
  const validateNavigationState = () => {
    const activeScreens = [
      showHomeScreen,
      showWelcomeScreen,
      showPersonalizationScreen,
      showAuthenticDuaSelection,
      showDuaContent,
      // showDiscussMenu, // REMOVED: Sidebar menu should not count as active screen
      showCustomDuaGeneration,
      showSpiritualReminder,
      showAuthenticDuasGrid,
      showChatbotDiscussionHub,
      showDuaContentViewer,
      showInteriorDesignSettings,
      showMatinSoirDetails,
      showEmailForm
    ].filter(Boolean);

    // If multiple screens are active or no screens match current state, show fallback
    if (activeScreens.length > 1) {
      console.warn('Multiple screens active, resetting navigation');
      resetToAuth();
      return false;
    }

    return true;
  };

  // Fallback screen component
  const FallbackScreen = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <span className="text-6xl mb-4 block">🍃</span>
        <h2 className="text-2xl text-white font-bold mb-4">Navigation Error</h2>
        <p className="text-gray-300 mb-6">
          Something went wrong with navigation. Let&apos;s get you back on track.
        </p>
        <button
          onClick={resetToAuth}
          className="bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
        >
          Return to Home
        </button>
      </div>

      {/* Debug info */}
      <div className="text-xs text-gray-500 mt-8">
        <p>Current Screen: {currentScreen}</p>
        <p>Navigation History: {navigationHistory.join(' → ')}</p>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col overflow-hidden">
      {!validateNavigationState() ? (
        <FallbackScreen />
      ) : !isAuthenticated && !showHomeScreen && !showWelcomeScreen && !showPersonalizationScreen && !showAuthenticDuaSelection && !showCustomDuaGeneration && !showSpiritualReminder && !showAuthenticDuasGrid && !showChatbotDiscussionHub && !showDuaContentViewer && !showInteriorDesignSettings && !showMatinSoirDetails && !showWelcomeAdnanScreen && !showSuccessScreen ? (
        /* Authentication Screen - Show when user is not authenticated */
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-8">
          {/* Logo and Header Section */}
          <div className="text-center mb-12">
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl text-cream font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-2xl md:text-3xl text-cream font-light tracking-wider mb-4">
              My.Zikr
            </h1>

            {/* Welcome Message */}
            <p className="text-cream text-sm md:text-base mb-4">
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
                placeholder="Enter your password"
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={() => {
                console.log('Login attempt:', loginData);
                // Simulate successful login
                setIsAuthenticated(true);
                setShowEmailForm(false);
                setShowWelcomeAdnanScreen(true);
              }}
              className="w-full py-3 px-4 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors font-medium"
            >
              Sign In
            </button>

            {/* Back Button */}
            <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:!text-white hover:!font-semibold transition-colors"
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
                placeholder="Your full name"
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
                placeholder="Create a password"
                className="w-full py-3 px-4 bg-slate-600 text-cream placeholder-gray-300 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={() => {
                console.log('Registration attempt:', formData);
                // Simulate successful registration
                setIsAuthenticated(true);
                setShowEmailForm(false);
                setShowWelcomeAdnanScreen(true);
              }}
              className="w-full py-3 px-4 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors font-medium"
            >
              Create Account
            </button>

            {/* Back Button */}
            <button
              onClick={handleBackToOptions}
              className="w-full text-cream text-sm underline hover:!text-white hover:!font-semibold transition-colors"
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
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
          >
            <svg className="w-5 h-5 fill-cream group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Continue with Email</span>
          </button>

          {/* Google Authentication Button */}
          <button
            onClick={() => {
              console.log('Google authentication');
              // Simulate successful Google auth
              setIsAuthenticated(true);
              setShowWelcomeAdnanScreen(true);
            }}
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
          >
            <svg className="w-5 h-5 fill-cream group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Apple Authentication Button */}
          <button
            onClick={() => {
              console.log('Apple authentication');
              // Simulate successful Apple auth
              setIsAuthenticated(true);
              setShowWelcomeAdnanScreen(true);
            }}
            className="w-full py-4 px-6 bg-transparent border border-cream text-cream rounded-lg hover:bg-cream hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
          >
            <svg className="w-5 h-5 fill-cream group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Continue with Apple</span>
          </button>
        </div>
      )}
        </div>
      ) : showWallOfDuas && activeTab === 'Douas' && showHomeScreen ? (
        /* Wall of Duas Screen - Sleek Dark Theme */
        <>
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-br from-[#071d2d] to-[#0c2a40] overflow-hidden">
          {/* Fixed Header - Mobile Responsive */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-[#071d2d] to-transparent relative z-10">
            {/* Header with Back Arrow, Leaf Icon and Action Buttons - Mobile Responsive */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center justify-between">
                {/* Left: Back Arrow + Leaf Icon + Title - Mobile Responsive */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => {
                      setShowWallOfDuas(false);
                      setActiveTab('Douas');
                    }}
                    className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setShowDiscussMenu(true)}
                    className="text-xl sm:text-2xl hover:text-green-300 transition-colors"
                  >
                    🍃
                  </button>
                  <div>
                    <h1 className="text-lg sm:text-xl text-white font-medium">The wall of douas</h1>
                  </div>
                </div>

                {/* Right: Location and Theme Buttons - Mobile Responsive */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button
                    onClick={toggleLocationSettings}
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-white border-opacity-20 rounded-lg flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-lg">📍</span>
                  </button>
                  <button
                    onClick={toggleThemeSettings}
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-white border-opacity-20 rounded-lg flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    <span className="text-white text-sm sm:text-lg">⚙️</span>
                  </button>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-white text-opacity-60 text-sm mt-2 leading-relaxed">
                Douas of My.zikr community close to your location. Support them by saying Amine.
              </p>
            </div>

            {/* Settings Dropdowns */}
            {showLocationSettings && (
              <div className="mb-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-2">Location Settings</h3>
                <p className="text-white text-opacity-70 text-sm">Currently showing duas from: {userLocation.city}</p>
              </div>
            )}

            {showThemeSettings && (
              <div className="mb-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-2">Theme Settings</h3>
                <p className="text-white text-opacity-70 text-sm">Current theme: {settings.theme}</p>
              </div>
            )}
          </div>

          {/* Scrollable Content Area - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-40" style={{ scrollBehavior: 'smooth' }}>
            {/* Community Stats - Mobile Responsive */}
            <div className="mb-4 sm:mb-6 text-center">
              <p className="text-white text-opacity-50 text-xs sm:text-sm">
                {displayDuas.length} community duas • Live updates
              </p>
            </div>

            {/* Dua Cards */}
            <div className="space-y-6">
              {displayDuas.map((dua, index) => (
                <div
                  key={dua.id}
                  className="bg-[#FFFDF6] rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Header with Author and Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {dua.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium text-sm">{dua.author}</p>
                        <p className="text-gray-500 text-xs">{dua.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">{getTimeAgo(dua.timestamp)}</p>
                    </div>
                  </div>

                  {/* Dua Text */}
                  <p className="text-gray-900 text-base leading-relaxed mb-5 text-justify">
                    {dua.dua}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Amine Button */}
                    <button
                      onClick={() => sayAmine(dua.id)}
                      className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e40af] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2"
                    >
                      <span>🤲</span>
                      <span>Amine</span>
                    </button>

                    {/* Amine Count Badge */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                      {formatAmineCount(dua.amines)}
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More Indicator */}
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-white text-opacity-50 text-sm">
                  <div className="w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
                  <span>More duas loading...</span>
                  <div className="w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons - Fixed Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c2a40] via-[#0c2a40] to-transparent pt-6 pb-6 z-20">
            <div className="px-6 space-y-3">
              {/* Write a doua */}
              <button
                onClick={() => navigateToScreen('write-dua')}
                className="w-full bg-gradient-to-r from-[#3bb4c1] to-[#4fc3d0] text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                ✍️ Write a doua
              </button>

              {/* Ask for doua */}
              <button className="w-full bg-gradient-to-r from-[#005c3f] to-[#007a5a] text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                🙏 Ask for doua
              </button>

              {/* Discuss */}
              <button
                onClick={handleDiscussClick}
                className="w-full bg-[#1e3a8a] text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>💬</span>
                <span>Discuss</span>
                <span>→</span>
              </button>
            </div>

            {/* Teal Divider Line */}
            <div className="mt-4 mx-6 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60 shadow-lg"></div>
          </div>


        </div>
        </>
      ) : showHomeScreen ? (
        /* Screen 7: Home Screen */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Top Bar/Header - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 pt-8 sm:pt-6">
            {/* Leaves Icon - Sidebar Menu - Mobile Responsive */}
            <button
              onClick={() => setShowDiscussMenu(true)}
              className="hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </button>

            {/* Logo/App Name - Mobile Responsive */}
            <div className="flex-1 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl text-white font-arabic mb-1">ذِكْر</div>
              <div className="text-sm sm:text-base md:text-lg text-white font-light">My.Zikr</div>
            </div>

            {/* Notifications/Reminder - Mobile Responsive */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-white text-lg sm:text-xl">🔔</span>
              <span className="text-white text-xs sm:text-sm">Morning duas</span>
            </div>
          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 pb-24">
            {/* Greeting - Mobile Responsive */}
            <h1 className="text-2xl sm:text-3xl text-white font-bold mb-6 sm:mb-8 text-center">
              Salam Aleykoum {userName || 'Adnan'}!
            </h1>

            {/* Dua of the day Section - Mobile Responsive */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Dua of the day</h2>

              {/* Dua Card */}
              <div className="bg-cream rounded-2xl p-6 mb-6">
                {/* Arabic Calligraphy */}
                <div className="text-center mb-4">
                  <div className="text-2xl text-gray-900 font-arabic leading-relaxed">
                    {dailyDua.arabic}
                  </div>
                </div>

                {/* Transliteration */}
                <div className="text-center mb-2">
                  <p className="text-gray-900 font-medium">
                    {dailyDua.transliteration}
                  </p>
                </div>

                {/* Translation */}
                <div className="text-center mb-4">
                  <p className="text-gray-700 text-sm">
                    {dailyDua.translation}
                  </p>
                </div>

                {/* Source */}
                <div className="text-center mb-4">
                  <p className="text-gray-500 text-xs">
                    {dailyDua.source}
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
                <div className="space-y-3">
                  <button
                    onClick={() => setShowFeelingSelector(!showFeelingSelector)}
                    className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">😊</span>
                      <span className="text-white font-medium">How do you feel today?</span>
                    </div>
                    <span className="text-white">{showFeelingSelector ? '↓' : '→'}</span>
                  </button>

                  {/* Feeling-based Dua Categories */}
                  {showFeelingSelector && (
                    <div className="bg-slate-700 rounded-xl p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        {duaCategories.filter(cat => ['anxiety', 'sadness', 'gratitude', 'forgiveness'].includes(cat.id)).map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSelectedDuaCategory(category.name);
                              navigateToScreen('dua-content-viewer', { category: category.name });
                              setShowFeelingSelector(false);
                            }}
                            className="bg-slate-600 hover:bg-slate-500 rounded-lg p-3 text-left transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-white text-sm">{category.icon}</span>
                              <span className="text-white text-sm font-medium">{category.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 2: Recommendations for you */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Recommendations for you</h3>
                <div className="space-y-3">
                  {getRecommendedDuas().map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedDuaCategory(category.name);
                        navigateToScreen('dua-content-viewer', { category: category.name });
                      }}
                      className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-white text-xl">{category.icon}</span>
                        <span className="text-white font-medium">{category.name}</span>
                      </div>
                      <span className="text-white">→</span>
                    </button>
                  ))}

                  <button
                    onClick={handleWallOfDuasClick}
                    className="w-full bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-xl">🕌</span>
                      <span className="text-white font-medium">The wall of Duas</span>
                    </div>
                    <span className="text-white">→</span>
                  </button>
                </div>
              </div>

              {/* Selected Dua Content Display */}
              {showDuaContent && selectedDua && (
                <div className="mt-8">
                  <div className="bg-cream rounded-2xl p-6">
                    {/* Back Button */}
                    <div className="flex items-center mb-4">
                      <button
                        onClick={clearSelection}
                        className="text-gray-900 text-xl hover:text-gray-700 transition-colors mr-3"
                      >
                        ←
                      </button>
                      <h3 className="text-gray-900 text-lg font-semibold">
                        {selectedCategory && duaCategories.find(cat => cat.id === selectedCategory)?.name}
                      </h3>
                    </div>

                    {/* Arabic Text */}
                    <div className="text-center mb-4">
                      <p className="text-gray-900 text-2xl md:text-3xl font-arabic leading-relaxed">
                        {selectedDua.arabic}
                      </p>
                    </div>

                    {/* Transliteration */}
                    <div className="text-center mb-4">
                      <p className="text-gray-700 text-lg italic leading-relaxed">
                        {selectedDua.transliteration}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="text-center mb-4">
                      <p className="text-gray-800 text-base leading-relaxed">
                        {selectedDua.translation}
                      </p>
                    </div>

                    {/* Source */}
                    <div className="text-center mb-6">
                      <p className="text-gray-500 text-sm">
                        {selectedDua.source}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-6">
                      <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                        🔊
                      </button>
                      <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                        ❤️
                      </button>
                      <button className="text-gray-900 text-xl hover:text-gray-700 transition-colors">
                        📤
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>






        </div>
      ) : activeTab === 'Douas' && showHomeScreen && !showWallOfDuas ? (
        /* Screen 8: Douas Tab */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header with Back Arrow - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
            <button
              onClick={() => setActiveTab('Home')}
              className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
            >
              ←
            </button>
            <h1 className="text-xl sm:text-2xl text-white font-bold">Douas</h1>
            <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-2 pb-24">
              {/* Subtitle - Mobile Responsive */}
              <div className="mb-6 sm:mb-8 text-center">
                <p className="text-white text-sm sm:text-base leading-relaxed">
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


        </div>
      ) : activeTab === 'Reminder' && showHomeScreen ? (
        /* Reminder Tab Screen */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header with Back Arrow - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
            <button
              onClick={() => setActiveTab('Home')}
              className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
            >
              ←
            </button>
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold">Spiritual Reminders</h1>
            <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-2 pb-24">
              {/* Subtitle - Mobile Responsive */}
              <div className="mb-6 sm:mb-8 text-center">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Daily reminders to strengthen your connection with Allah
                </p>
              </div>

              {/* Reminder Categories */}
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Prayer Times', icon: '🕌', description: 'Never miss your daily prayers' },
                  { title: 'Dhikr Sessions', icon: '📿', description: 'Remember Allah throughout the day' },
                  { title: 'Quran Reading', icon: '📖', description: 'Daily Quran recitation reminders' },
                  { title: 'Wudu Steps', icon: '💧', description: 'Proper ablution guidance' },
                  { title: 'Islamic Calendar', icon: '📅', description: 'Important Islamic dates and events' },
                  { title: 'Charity Reminders', icon: '💝', description: 'Remember to give Zakat and Sadaqah' }
                ].map((reminder, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedReminderCategory(reminder.title);
                      setShowSpiritualReminder(true);
                      setShowHomeScreen(false);
                    }}
                    className="w-full bg-slate-800 rounded-xl p-6 flex items-center space-x-4 hover:bg-slate-700 transition-colors text-left"
                  >
                    <span className="text-3xl">{reminder.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-1">{reminder.title}</h3>
                      <p className="text-gray-300 text-sm">{reminder.description}</p>
                    </div>
                    <span className="text-white text-xl">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Leaves Menu Button - Mobile Responsive */}
          <button
            onClick={handleLeavesMenuToggle}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
          >
            <div className="relative">
              {/* Animated leaves */}
              <div className={`transition-transform duration-500 ${showLeavesMenu ? 'rotate-180' : 'rotate-0'}`}>
                <span className="text-2xl">🍃</span>
              </div>
              {/* Additional floating leaves animation */}
              <div className={`absolute -top-1 -left-1 transition-all duration-700 ${showLeavesMenu ? 'opacity-100 scale-125' : 'opacity-0 scale-75'}`}>
                <span className="text-lg">🍃</span>
              </div>
              <div className={`absolute -bottom-1 -right-1 transition-all duration-500 delay-100 ${showLeavesMenu ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`}>
                <span className="text-sm">🍃</span>
              </div>
            </div>
          </button>
        </div>
      ) : activeTab === 'Profile' && showHomeScreen ? (
        /* Profile Tab Screen */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header with Back Arrow - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 mb-3 sm:mb-4">
            <button
              onClick={() => setActiveTab('Home')}
              className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
            >
              ←
            </button>
            <h1 className="text-xl sm:text-2xl text-white font-bold">My Profile</h1>
            <div className="w-6 sm:w-8"></div> {/* Spacer for centering */}
          </div>

          {/* Main Content - Scrollable - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-2 pb-24">
              {/* Profile Header - Mobile Responsive */}
              <div className="mb-6 sm:mb-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl text-white">👤</span>
                </div>
                <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">{userName || 'Adnan'}</h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Your spiritual journey with My.Zikr
                </p>
              </div>

              {/* Profile Options */}
              <div className="space-y-4 mb-8">
                {[
                  { title: 'My Saved Duas', icon: '🤲', description: 'View your bookmarked prayers' },
                  { title: 'Prayer History', icon: '📊', description: 'Track your spiritual progress' },
                  { title: 'Notification Settings', icon: '🔔', description: 'Customize your reminders' },
                  { title: 'App Settings', icon: '⚙️', description: 'Personalize your experience', action: 'settings' },
                  { title: 'Help & Support', icon: '❓', description: 'Get assistance and guidance' },
                  { title: 'About My.Zikr', icon: 'ℹ️', description: 'Learn more about the app' }
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (option.action === 'settings') {
                        setShowInteriorDesignSettings(true);
                        setShowHomeScreen(false);
                      } else {
                        console.log('Navigate to:', option.title);
                      }
                    }}
                    className="w-full bg-slate-800 rounded-xl p-6 flex items-center space-x-4 hover:bg-slate-700 transition-colors text-left"
                  >
                    <span className="text-3xl">{option.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-1">{option.title}</h3>
                      <p className="text-gray-300 text-sm">{option.description}</p>
                    </div>
                    <span className="text-white text-xl">→</span>
                  </button>
                ))}
              </div>


            </div>
          </div>


        </div>
      ) : showAuthenticDuaCategories ? (
        /* Screen: Authentic Dua Categories Selection */
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
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* Right side - Authentic dua label - Mobile Responsive */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-white font-medium text-sm sm:text-base">Authentic dua</span>
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
                  That&apos;s great! I can help you with duas from Hisnul Muslim and from the Holy Qur&apos;an. Please choose below with dua you would like to read.
                </p>
              </div>
            </div>

            {/* Horizontal Scrollable Buttons - Mobile Responsive */}
            <div className="mb-4 sm:mb-6">
              <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2">
                {[
                  'Anxiety', 'Sadness', 'To protect kids', 'When entering home',
                  'For forgiveness', 'For guidance', 'When entering Toilet',
                  'Morning and evening duas', 'For sickness', 'When waking up at night',
                  'Another one'
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleToProtectKidsCategorySelect(category)}
                    className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedDuaCategory === category
                        ? 'bg-[#1E3A8A] text-white'
                        : 'bg-[#F5F0E6] text-[#0B1E3A] hover:bg-[#E5DDD3]'
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
                {selectedDuaCategory === 'To protect kids' && (
                  <div>
                    {/* Category Title - Mobile Responsive */}
                    <div className="mb-4 sm:mb-6 text-center">
                      <h2 className="text-white text-base sm:text-lg font-medium">To Protect Kids</h2>
                      <p className="text-[#87CEEB] text-xs sm:text-sm mt-1">Dua for protection of children</p>
                    </div>

                    {/* Dua Text Display - Mobile Responsive */}
                    <div className="bg-[#1A1A2E] rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                      {/* Arabic Text - Mobile Responsive */}
                      <div className="text-right mb-3 sm:mb-4">
                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-arabic">
                          أَعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                        </p>
                      </div>

                      {/* Transliteration - Mobile Responsive */}
                      <div className="mb-3 sm:mb-4">
                        <p className="text-[#87CEEB] text-xs sm:text-sm italic leading-relaxed">
                          U&apos;īdhukumā bi-kalimāti l-lāhi t-tāmmati min kulli shayṭānin wa hāmmatin, wa min kulli ʿaynin lāmmatin.
                        </p>
                      </div>

                      {/* English Translation - Mobile Responsive */}
                      <div className="mb-3 sm:mb-4">
                        <p className="text-white text-xs sm:text-sm leading-relaxed">
                          I seek protection for you from the perfect words of Allah against every devil, from every harmful animal (or thing) and from every evil eye.
                        </p>
                      </div>

                      {/* Reference - Mobile Responsive */}
                      <div>
                        <p className="text-[#9CA3AF] text-xs leading-relaxed">
                          [1] al-Bukhāri N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).
                        </p>
                      </div>
                    </div>

                    {/* Audio Controls - Mobile Responsive */}
                    <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                      <button className="text-white hover:text-green-400 transition-colors">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
                        </svg>
                      </button>

                      <button className="bg-green-800 hover:bg-green-900 text-white rounded-full p-3 sm:p-4 transition-colors">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                        </svg>
                      </button>

                      <button className="text-white hover:text-green-400 transition-colors">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Placeholder for other categories - Mobile Responsive */}
                {selectedDuaCategory !== 'To protect kids' && selectedDuaCategory !== '' && (
                  <div className="text-center py-6 sm:py-8">
                    <p className="text-white text-xs sm:text-sm opacity-75 px-4">
                      Dua content for &quot;{selectedDuaCategory}&quot; will be available soon.
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
          {selectedDuaCategory === 'To protect kids' && (
            <div className="bg-[#134E4A] px-3 sm:px-4 py-2 sm:py-3">
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {[
                  'Save it', 'Share it', 'Pounder it', 'Another one',
                  'The whole collection', 'Main menu'
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
                  onClick={() => handleToProtectKidsDuaAction('Discuss')}
                  className="bg-[#0F3D34] text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium hover:bg-[#1A5A4F] transition-colors flex items-center space-x-1"
                >
                  <span>Discuss</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
            </div>
          </div>
      ) : showPersonalizationScreen ? (
        /* Screen 5: Salam aleykum dear - Spiritual Companion Chat */
        <div className="relative h-screen bg-gradient-to-b from-[#0D3B2E] to-[#0B1E3A] flex flex-col overflow-hidden">
          {/* Back Arrow */}
          <button
            onClick={() => {
              setShowPersonalizationScreen(false);
              setShowWelcomeAdnanScreen(true);
            }}
            className="absolute top-8 left-8 text-white text-2xl hover:text-green-400 transition-colors"
          >
            ←
          </button>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6 py-8">

          {/* Logo Section - Mobile Responsive */}
          <div className="text-center mb-6 sm:mb-8">
            {/* Floating Leaf Icon - Mobile Responsive */}
            <div className="relative">
              <div className="absolute -top-1 sm:-top-2 -left-6 sm:-left-8 text-green-400 text-base sm:text-lg animate-pulse">
                🍃
              </div>

              {/* Arabic Calligraphy Logo - Mobile Responsive */}
              <div className="mb-3 sm:mb-4">
                <div className="text-4xl sm:text-5xl md:text-6xl text-white font-arabic mb-2 sm:mb-3">
                  ذِكْر
                </div>
              </div>

              {/* App Name - Mobile Responsive */}
              <h1 className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-wider mb-6 sm:mb-8">
                My.Zikr
              </h1>
            </div>
          </div>

          {/* Main Chat Bubble with Tail - Mobile Responsive */}
          <div className="w-full max-w-xs sm:max-w-lg mb-6 sm:mb-8">
            <div className="relative">
              {/* Chat Bubble - Mobile Responsive */}
              <div className="bg-[#1A5A4F] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 text-white shadow-xl animate-fadeIn relative">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-normal">
                  <span className="font-medium">Salam aleykoum dear</span><br/><br/>
                  I am Zikr – your spiritual companion, here to support your spiritual journey with duas and reminders.<br/><br/>
                  Please tell me how I can be helpful to you today. Select a section below or tell me directly what you may need and I will do my best to assist you In Sha Allah.
                </p>

                {/* Chat Bubble Tail - Mobile Responsive */}
                <div className="absolute bottom-[-6px] sm:bottom-[-8px] left-6 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#1A5A4F] transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Option Buttons - Mobile Responsive */}
          <div className="w-full max-w-xs sm:max-w-lg space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {/* Authentic dua - Dark green with gold styling and glow - Mobile Responsive */}
            <button
              onClick={() => handleOptionSelect('authentic-dua')}
              className="w-full bg-[#0F3D34] text-[#FFD700] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            >
              <span className="text-base sm:text-lg text-[#FFD700]">🤲</span>
              <span className="flex-1 text-left font-medium text-sm sm:text-base">Authentic dua</span>
            </button>

            {/* Custom dua for my situation - Darker purple/blue with light blue styling - Mobile Responsive */}
            <button
              onClick={() => handleOptionSelect('custom-dua')}
              className="w-full bg-[#1A1A4A] text-[#87CEEB] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="text-base sm:text-lg text-[#87CEEB]">✨</span>
              <span className="flex-1 text-left font-medium text-sm sm:text-base">Custom dua for my situation</span>
            </button>

            {/* Spiritual reminder - Off-white raised with brown styling - Mobile Responsive */}
            <button
              onClick={() => handleOptionSelect('spiritual-reminder')}
              className="w-full bg-[#F5F0E6] text-[#8B4513] py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center space-x-3 sm:space-x-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium border border-[#E5DDD3]"
            >
              <span className="text-base sm:text-lg text-[#8B4513]">🕋</span>
              <span className="flex-1 text-left font-medium text-sm sm:text-base">Spiritual reminder</span>
            </button>
          </div>

          {/* Input Section - Dark Rectangular Design - Mobile Responsive */}
          <div className="w-full max-w-xs sm:max-w-lg">
            <div className="relative">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomMessageSubmit()}
                placeholder="Write down what you need like I need help to ..."
                className="w-full bg-[#1A1A2E] text-white placeholder-[#9CA3AF] rounded-[10px] sm:rounded-[12px] py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[13px] sm:text-[14px] md:text-[15px] shadow-inner"
              />
              <button
                onClick={handleCustomMessageSubmit}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-white transition-colors duration-300 p-1"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z"/>
                </svg>
              </button>
            </div>
          </div>
          </div>
        </div>
      ) : showWelcomeAdnanScreen ? (
        /* Screen 3: Welcome Adnan Screen - Modern Design */
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 animate-fadeIn">
          {/* Leaves Icon - Sidebar Menu */}
          <button
            onClick={() => setShowDiscussMenu(true)}
            className="absolute top-6 sm:top-8 left-6 sm:left-8 hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </button>

          {/* Back Arrow */}
          <button
            onClick={() => {
              setShowWelcomeAdnanScreen(false);
              setShowWelcomeScreen(true);
            }}
            className="absolute top-8 left-16 sm:left-20 text-white text-2xl hover:text-green-400 transition-colors"
          >
            ←
          </button>

          {/* Logo Section */}
          <div className="text-center mb-20" style={{ paddingTop: '80px' }}>
            {/* Arabic Calligraphy Logo */}
            <div className="mb-4">
              <div className="text-5xl md:text-6xl text-white font-arabic mb-3">
                ذِكْر
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-xl md:text-2xl text-white font-light tracking-wider mb-12">
              My.Zikr
            </h1>

            {/* Welcome Message */}
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 font-sans">
              Welcome {userName || 'Adnan'}!
            </h2>

            {/* Instructional Text */}
            <p className="text-[#E2E2E2] text-sm md:text-base max-w-sm mx-auto leading-relaxed font-normal mb-2">
              Please tell us what you are here for so we can customize your navigation. You can select up to 3.
            </p>

            {/* Selection Counter */}
            {selectedInterests.length > 0 && (
              <p className="text-[#F5F0E6] text-sm font-medium">
                {selectedInterests.length}/3 selected
              </p>
            )}
          </div>

          {/* Option Buttons */}
          <div className="w-full max-w-sm space-y-5 mb-12">
            {[
              { icon: '📖', text: 'To learn how to make douas', id: 'learn-douas' },
              { icon: '🤲', text: 'To join the douas community', id: 'join-community' },
              { icon: '🧭', text: 'By curiosity', id: 'curiosity' },
              { icon: '🕋', text: 'To find islamic reminders', id: 'islamic-reminders' },
              { icon: '🌙', text: 'For something else', id: 'something-else' }
            ].map((option, index) => (
              <button
                key={option.id}
                onClick={() => {
                  if (selectedInterests.includes(option.id)) {
                    // Remove selection if already selected
                    setSelectedInterests(selectedInterests.filter(id => id !== option.id));
                  } else if (selectedInterests.length < 3) {
                    // Add selection if under 3 limit
                    setSelectedInterests([...selectedInterests, option.id]);

                    // Auto-scroll to Continue button after selection
                    setTimeout(() => {
                      welcomeAdnanContinueRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }, 100);
                  }
                  // If 3 are already selected, clicking does nothing (user must deselect first)
                }}
                className={`w-full rounded-full py-4 px-6 flex items-center space-x-4 text-left transition-all duration-300 transform hover:scale-105 ${
                  selectedInterests.includes(option.id)
                    ? 'bg-[#F5F0E6] border-2 border-[#F5F0E6] text-[#0B1E3A] shadow-lg'
                    : selectedInterests.length >= 3
                    ? 'bg-[#134E4A] text-gray-400 opacity-60 cursor-not-allowed'
                    : 'bg-[#134E4A] text-white hover:bg-[#1A675E]'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="flex-1 font-medium text-sm md:text-base">{option.text}</span>
                {selectedInterests.includes(option.id) && (
                  <span className={`font-bold text-lg ${
                    selectedInterests.includes(option.id) ? 'text-[#0B1E3A]' : 'text-white'
                  }`}>✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Continue Button - Mobile Responsive */}
          <div ref={welcomeAdnanContinueRef}>
          <button
            onClick={handleWelcomeAdnanContinue}
            disabled={selectedInterests.length === 0}
            className={`rounded-full py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
              selectedInterests.length > 0
                ? 'bg-[#F5F0E6] text-[#0B1E3A] hover:bg-[#EDE7DB] shadow-lg'
                : 'bg-[#F5F0E6] text-[#0B1E3A] opacity-50 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
          </div>
        </div>
      ) : showSuccessScreen ? (
        /* Success/Confirmation Screen - Animated Text Boxes */
        <>
          <style jsx>{`
            @keyframes gentle-float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes gentle-bounce {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-5px) scale(1.02); }
            }
            .animate-gentle-float { animation: gentle-float 3s ease-in-out infinite; }
            .animate-gentle-bounce { animation: gentle-bounce 2s ease-in-out infinite; }
          `}</style>

          <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-8">

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-md mx-auto text-center">

            {/* Logo Section with Arabic Calligraphy */}
            <div className="mb-12 sm:mb-16">
              {/* Arabic Calligraphy */}
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl sm:text-5xl text-white font-arabic">
                  ذِكْر
                </div>
              </div>

              {/* English Logo */}
              <h1 className="text-xl sm:text-2xl text-white font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                My.Zikr
              </h1>
            </div>

            {/* Rounded Beige Dialog Box with 3D Shadows - Animated */}
            <div className="mb-8 sm:mb-10 animate-gentle-float">
              <div className="bg-[#F5F0E6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8 shadow-2xl" style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                <p className="text-[#1E3A8A] text-base sm:text-lg font-semibold text-center leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Thank you for your confirmation and for being here. Let&apos;s start discussing.
                </p>
              </div>
            </div>

            {/* Continue Button - Beige with Dark Navy Text - Animated */}
            <button
              onClick={() => navigateToScreen('welcome')}
              className="bg-[#F5F0E6] text-[#1E3A8A] font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-gentle-bounce"
              style={{
                fontFamily: 'Inter, Poppins, sans-serif',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              Continue
            </button>
          </div>
        </div>
        </>
      ) : showWelcomeScreen ? (
        /* NEW Welcome Screen - Redesigned UI */
        <div className="relative flex flex-col h-screen overflow-hidden">
          {/* Green Leaf Icon in top-left corner - Menu/Back Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('🍃 LEAF ICON CLICKED! Setting showDiscussMenu to true');
              console.log('🍃 Current showDiscussMenu state:', showDiscussMenu);
              console.log('🍃 Current isAuthenticated state:', isAuthenticated);
              setShowDiscussMenu(true);
              console.log('🍃 showDiscussMenu state should now be true');
            }}
            className="absolute top-6 sm:top-8 left-6 sm:left-8 hover:scale-110 transition-transform z-50"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </button>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-8">

          {/* Header & Title Area */}
          <div className="text-center mb-8 sm:mb-12 mt-16 sm:mt-20">
            {/* Arabic Title - Stylized Green Font */}
            <div className="mb-3 sm:mb-4">
              <div className="text-5xl sm:text-6xl md:text-7xl text-green-400 font-arabic mb-2">
                ذِكْر
              </div>
            </div>

            {/* English Title - Centered Below Arabic */}
            <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wider">
              My.Zikr
            </h1>
          </div>

          {/* Welcome Message Box - Dark Green Background */}
          <div className="w-full max-w-lg mb-8 sm:mb-10">
            <div className="flex justify-center">
              <div className="bg-[#1E504A] rounded-2xl rounded-tl-sm p-5 sm:p-6 max-w-md shadow-lg">
                <p className="text-white text-base sm:text-lg font-medium mb-3">
                  Salam aleykoum dear
                </p>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  I am Zikr – your spiritual companion, here to support your spiritual journey with duas and reminders. Please tell me how I can be helpful to you today. Select a section below or tell me directly what you may need and I will do my best to assist you In Sha Allah.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Button Section - New Layout */}
          <div className="w-full max-w-lg mb-8 sm:mb-10">
            {/* Line 1 - Horizontal Pair */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Authentic dua - Stadium Shape Dark Green */}
              <button
                onClick={() => {
                  setShowWelcomeScreen(false);
                  setShowAuthenticDuaSelection(true);
                }}
                className="flex-1 bg-[#1B4332] text-white border-2 border-[#2D5A4F] px-4 sm:px-6 py-3 sm:py-4 h-16 sm:h-20 rounded-[999px] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#2D5A4F] shadow-lg"
              >
                <span className="text-lg sm:text-xl">🧘</span>
                <span className="text-xs sm:text-sm font-medium mt-1">Authentic dua</span>
              </button>

              {/* Custom dua - Stadium Shape Dark Blue */}
              <button
                onClick={() => {
                  setShowWelcomeScreen(false);
                  setShowCustomDuaGeneration(true);
                }}
                className="flex-1 bg-[#1E3A8A] text-white border-2 border-[#3B82F6] px-4 sm:px-6 py-3 sm:py-4 h-16 sm:h-20 rounded-[999px] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-[#3B82F6] shadow-lg"
              >
                <span className="text-lg sm:text-xl">🪔</span>
                <span className="text-xs sm:text-sm font-medium mt-1">Custom dua</span>
              </button>
            </div>

            {/* Line 2 - Centered Single Button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowWelcomeScreen(false);
                  setShowSpiritualReminder(true);
                }}
                className="bg-white text-gray-800 border-2 border-gray-300 px-6 sm:px-8 py-3 sm:py-4 h-16 sm:h-20 rounded-[999px] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-100 shadow-lg"
              >
                <span className="text-lg sm:text-xl">🪶</span>
                <span className="text-xs sm:text-sm font-medium mt-1">Spiritual reminder</span>
              </button>
            </div>
          </div>

          {/* Input Bar - New Main Feature */}
          <div className="w-full max-w-lg">
            <div className="relative">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                placeholder="Write down what you need like I need help to ..."
                className="w-full bg-[#1A1A2E] text-white placeholder-[#9CA3AF] rounded-[20px] py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border border-[#374151] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm sm:text-base shadow-inner"
              />
              <button
                onClick={handleChatSubmit}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 p-1"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Continue Button - Navigate to Personalization */}
          <div className="w-full max-w-lg mt-6 sm:mt-8">
            <button
              onClick={handleContinue}
              className="w-full bg-[#1B4332] text-white border-2 border-[#2D5A4F] px-6 py-4 rounded-[999px] flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-[#2D5A4F] shadow-lg"
            >
              <span className="text-base sm:text-lg font-medium">Continue to Personalization</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          </div>
        </div>
      ) : showAuthenticDuaSelection ? (
        /* Screen 14: Authentic Dua Selection */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar - Mobile Responsive */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon - Mobile Responsive */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => {
                  setShowAuthenticDuaSelection(false);
                  setShowHomeScreen(true);
                }}
                className="text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
            </div>

            {/* Right: Current Mode Indicator - Mobile Responsive */}
            <div className="bg-slate-800 border border-white rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-1 sm:space-x-2">
              <span className="text-white text-xs sm:text-sm">≈</span>
              <span className="text-white text-xs sm:text-sm font-medium">Authentic dua</span>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="pb-24">

          {/* Chat Message (Bot's Response) - Mobile Responsive */}
          <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-6">
            <div className="flex items-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {/* Zikr bot logo/icon - Mobile Responsive */}
              <div className="bg-teal-900 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>

              {/* Chat Bubble - Mobile Responsive */}
              <div className="bg-teal-900 bg-opacity-80 rounded-2xl rounded-tl-sm p-4 sm:p-6 max-w-xs sm:max-w-2xl">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  That&apos;s great! I can help you with duas from Hisnul Muslim and from the Holy Qur&apos;an. Please choose below with dua you would like to read.
                </p>
              </div>
            </div>
          </div>

          {/* Dua Option Pills (Selection Choices) - Mobile Responsive */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
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
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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

          {/* Dua Display Card (Content Area) - Mobile Responsive */}
          {showLocalDuaContent && duaContent[selectedDuaCategory as keyof typeof duaContent] && (
            <div ref={gridDuaContentRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
              <div className="bg-cream rounded-2xl p-4 sm:p-8 shadow-lg">
                {/* Title/Context - Mobile Responsive */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{selectedDuaCategory}</p>
                </div>

                {/* Arabic Text - Mobile Responsive */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-900 text-lg sm:text-2xl md:text-3xl font-arabic leading-relaxed mb-4 sm:mb-6">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].arabic}
                  </p>
                </div>

                {/* Transliteration - Mobile Responsive */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-700 text-sm sm:text-lg italic leading-relaxed">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].transliteration}
                  </p>
                </div>

                {/* English Translation - Mobile Responsive */}
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].translation}
                  </p>
                </div>

                {/* Source Reference - Mobile Responsive */}
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {duaContent[selectedDuaCategory as keyof typeof duaContent].source}
                  </p>
                </div>

                {/* Media Controls - Mobile Responsive */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z"/>
                    </svg>
                  </button>

                  <button
                    onClick={handlePlayPause}
                    className="bg-teal-800 text-white p-3 sm:p-4 rounded-full hover:bg-teal-900 transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,19H18V5H14M6,19H10V5H6V19Z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                      </svg>
                    )}
                  </button>

                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,5.75L22.25,10H19V16H12.5L10.5,18H19A2,2 0 0,0 21,16V10H24.25L20,5.75M6,18.25L1.75,14H5V8H11.5L13.5,6H5A2,2 0 0,0 3,8V14H0.75L5,18.25Z"/>
                    </svg>
                  </button>
                </div>

                {/* Action Buttons - Mobile Responsive */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Row 1 - Mobile Responsive */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {['Save it', 'Share it', 'Pounder it', 'Another one'].map((action) => (
                      <button
                        key={action}
                        onClick={() => handleDuaAction(action)}
                        className="bg-slate-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-700 transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>

                  {/* Row 2 - Mobile Responsive */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    <button
                      onClick={() => handleDuaAction('The whole collection')}
                      className="bg-slate-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                    >
                      The whole collection
                    </button>
                    <button
                      onClick={() => handleDuaAction('Main menu')}
                      className="bg-slate-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors"
                    >
                      Main menu
                    </button>
                    <button
                      onClick={() => handleDuaAction('Discuss')}
                      className="bg-slate-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-slate-600 transition-colors flex items-center space-x-1 sm:space-x-2"
                    >
                      <span>≈</span>
                      <span>Discuss</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={() => {
              setShowAuthenticDuaSelection(false);
              setShowHomeScreen(true);
            }}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      ) : showCustomDuaGeneration ? (
        /* Screen 17: Custom Dua Generation */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowCustomDuaGeneration(false);
                  setShowGeneratedDua(false);
                  setCustomDuaRequest('');
                  setShowHomeScreen(true);
                }}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
            </div>

            {/* Right: Current Mode Indicator */}
            <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Custom dua for my situation</span>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="pb-24">

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
                  className="w-full bg-slate-900 text-white placeholder-purple-300 rounded-2xl py-3 sm:py-4 px-4 sm:px-6 pr-12 sm:pr-14 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
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
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={() => {
              setShowCustomDuaGeneration(false);
              setShowGeneratedDua(false);
              setCustomDuaRequest('');
              setShowHomeScreen(true);
            }}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      ) : showSpiritualReminder ? (
        /* Screen 18: Spiritual Reminder - Wudu Steps */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 px-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowSpiritualReminder(false);
                  setShowReminderContent(false);
                  setSelectedReminderCategory('Wudu steps');
                  setShowHomeScreen(true);
                }}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
            </div>

            {/* Right: Current Mode Indicator */}
            <div className="bg-slate-800 border border-white rounded-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Spiritual reminder</span>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="pb-24">

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
            </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={() => {
              setShowSpiritualReminder(false);
              setShowReminderContent(false);
              setSelectedReminderCategory('Wudu steps');
              setShowHomeScreen(true);
            }}
            className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      ) : showAuthenticDuasGrid ? (
        /* Screen 19: Authentic Duas Category Grid */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowAuthenticDuasGrid(false);
                  setShowHomeScreen(true);
                }}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
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

          {/* Category Grid (Main Content) - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 pb-24">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {authenticDuaCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleDuaCategoryGridSelect(category.name)}
                  className="flex flex-col items-center space-y-3 p-4 hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors"
                >
                  {/* Circular Icon */}
                  <div className="w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
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
                onClick={handleDiscussClick}
                className="bg-slate-800 text-white px-6 py-3 rounded-full flex items-center space-x-3 hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm">≈</span>
                <span className="text-sm font-medium">Discuss</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
          </div>

          {/* Debug Back Button */}
          <button
            onClick={() => {
              setShowAuthenticDuasGrid(false);
              setShowHomeScreen(true);
            }}
            className="mx-6 mb-4 bg-gray-600 text-white px-6 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      ) : showMatinSoirDetails ? (
        /* Screen: Matin & Soir Details - From morning & night */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-b from-[#0D4A42] to-[#0B1E3A] overflow-hidden">
          {/* Header - Mobile Responsive */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
            {/* Left: Green leaf icon */}
            <button
              onClick={() => setShowDiscussMenu(true)}
              className="hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </button>

            {/* Center: Title - Mobile Responsive */}
            <h1 className="text-white text-base sm:text-lg font-medium text-center" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              From morning & night
            </h1>

            {/* Right: Search icon */}
            <button className="hover:scale-110 transition-transform">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Scrollable Dua List - Mobile Responsive */}
          <div className="flex-1 px-4 sm:px-6 pb-32 overflow-y-auto">
            <div className="space-y-1">
              {matinSoirDuas.map((dua, index) => (
                <div
                  key={dua.id}
                  className="flex items-center justify-between py-3 sm:py-4 px-2 sm:px-3 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors cursor-pointer"
                >
                  {/* Left: Number - Mobile Responsive */}
                  <span className="text-gray-400 text-xs sm:text-sm font-medium w-6 sm:w-8 flex-shrink-0">
                    {dua.id}.
                  </span>

                  {/* Center: Dua title - Mobile Responsive */}
                  <div className="flex-1 mx-2 sm:mx-4">
                    <span className="text-gray-100 text-sm sm:text-base leading-tight">
                      {dua.title}
                    </span>
                  </div>

                  {/* Right: Count and arrow - Mobile Responsive */}
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <span className="text-gray-400 text-xs sm:text-sm">
                      ({dua.count})
                    </span>
                    {index === 0 && ( // Show arrow only on first item as active
                      <span className="text-teal-400 text-base sm:text-lg">
                        ➜
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Card - "Discover the wall of douas" - Fixed at Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1E3A] via-[#0B1E3A] to-transparent p-4 sm:p-6 z-40">
            <div className="bg-[#0A1A2E] bg-opacity-80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-700 border-opacity-30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                {/* Left: Text content - Mobile Responsive */}
                <div className="flex-1 pr-0 sm:pr-4">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">
                    Discover the wall of douas
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Find out douas that people made and support them by saying &apos;Amine&apos;.
                  </p>
                </div>

                {/* Right: Discuss button - Mobile Responsive */}
                <button
                  onClick={() => {
                    setShowMatinSoirDetails(false);
                    handleDiscussClick();
                  }}
                  className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-1 sm:space-x-2 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <span className="font-medium">Discuss</span>
                  <span className="text-sm sm:text-lg">➜</span>
                </button>
              </div>
            </div>
          </div>

          {/* Back button for debugging - Mobile Responsive - Positioned near leaf icon */}
          <button
            onClick={() => {
              setShowMatinSoirDetails(false);
              setShowAuthenticDuasGrid(true);
            }}
            className="absolute top-3 sm:top-4 md:top-6 left-10 sm:left-12 md:left-20 bg-gray-600 text-white px-1 sm:px-2 md:px-4 py-1 sm:py-1 md:py-2 rounded text-xs opacity-75 hover:opacity-100 transition-opacity"
          >
            ← Grid
          </button>
        </div>
      ) : showWriteDuaScreen ? (
        /* Write a Dua Screen */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-b from-[#0D4F4F] to-[#1E3A8A] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6">
            {/* Left: Back arrow */}
            <button
              onClick={() => {
                setShowWriteDuaScreen(false);
                setShowHomeScreen(true);
              }}
              className="text-white text-2xl hover:text-green-400 transition-colors"
            >
              ←
            </button>

            {/* Center: Title */}
            <h1 className="text-xl text-white font-semibold">Write a dua</h1>

            {/* Right: Empty space for balance */}
            <div className="w-8"></div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-4 pb-24">
            {/* Description */}
            <div className="mb-8">
              <p className="text-white text-base leading-relaxed text-center">
                Write a doua and share it with the community and allow people to say Amine. Your doua will randomly be displayed after review.
              </p>
            </div>

            {/* Dua Input Box */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <textarea
                  value={writeDuaText}
                  onChange={(e) => setWriteDuaText(e.target.value)}
                  placeholder="Yā Allah, I pray for every muslim in the world, for their well-beign, their sustenance, their Akhira and their whole family."
                  className="w-full h-32 bg-transparent text-gray-800 placeholder-gray-500 border-none focus:outline-none resize-none text-base leading-relaxed"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <p className="text-white text-sm leading-relaxed text-center opacity-90">
                &ldquo;By publishing a dua, you agree not to include personal data, illicit or prohibited content, or material/financial requests. Shared duas are for spiritual support only and may be displayed anonymously to the community.&rdquo;
              </p>
            </div>

            {/* Publish Button */}
            <div className="flex justify-center">
              <button
                onClick={handlePublishDua}
                className="bg-[#F5F0E6] text-[#1E3A8A] font-semibold py-4 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  fontFamily: 'Inter, Poppins, sans-serif',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                Publish
              </button>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="bg-[#1E3A8A] bg-opacity-80 px-6 py-4">
            <div className="flex justify-around items-center">
              <button
                onClick={() => {
                  setShowWriteDuaScreen(false);
                  setShowHomeScreen(true);
                  setActiveTab('Home');
                }}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-white text-xl">🏠</span>
                <span className="text-white text-xs">Home</span>
              </button>
              <button
                onClick={() => {
                  setShowWriteDuaScreen(false);
                  setShowHomeScreen(true);
                  setActiveTab('Douas');
                }}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-white text-xl">🤲</span>
                <span className="text-white text-xs">Duas</span>
              </button>
              <button
                onClick={() => {
                  setShowWriteDuaScreen(false);
                  setShowHomeScreen(true);
                  setActiveTab('Reminder');
                }}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-white text-xl">⏰</span>
                <span className="text-white text-xs">Reminder</span>
              </button>
              <button
                onClick={() => {
                  setShowWriteDuaScreen(false);
                  setShowHomeScreen(true);
                  setActiveTab('Profile');
                }}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-white text-xl">👤</span>
                <span className="text-white text-xs">Profile</span>
              </button>
            </div>
            </div>
          </div>
        </div>
      ) : showChatbotDiscussionHub ? (
        /* Screen 20: Chatbot Discussion Hub */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-8 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromDiscussionHub}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
            </div>

            {/* Center Title Pill */}
            <div className="bg-slate-800 rounded-full px-4 py-2 flex items-center space-x-2">
              <span className="text-white text-sm">≈</span>
              <span className="text-white text-sm font-medium">Discuss</span>
            </div>

            {/* Right: Empty space for balance */}
            <div className="w-6"></div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="pb-24">

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
                className="w-full h-24 sm:h-32 bg-slate-800 text-white placeholder-purple-300 rounded-2xl p-4 sm:p-6 pr-12 sm:pr-16 border-none focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm sm:text-base"
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
        /* Screen 21: Dua Content Viewer - Profile Duas */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none bg-gradient-to-b from-[#0D4A42] to-[#0B1E3A] overflow-hidden">
          {/* Header/Top Bar - Like in image */}
          <div className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4">
            {/* Left: Back arrow and green leaf icon - Mobile Responsive */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => {
                  setShowDuaContentViewer(false);
                  setShowHomeScreen(true);
                  setActiveTab('Profile');
                }}
                className="text-white text-lg sm:text-xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
            </div>

            {/* Title - Mobile Responsive */}
            <h1 className="text-white text-sm sm:text-base md:text-lg font-medium text-center flex-1 px-2">
              {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent]?.title || selectedDuaCategory}
            </h1>

            {/* Right Icons - Like in image - Mobile Responsive */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              <button className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-white text-xs sm:text-sm md:text-base hover:text-gray-300 transition-colors">
                <span className="font-bold">Aa</span>
              </button>
              <button className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
              <button className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors">
                <span>⋯</span>
              </button>
            </div>
          </div>

          {/* Dua Content Display - Scrollable - Like in image - Mobile Responsive */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-3 sm:px-4 pb-32">
              <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent] && (
                  <>
                    {/* Arabic Text - Large and centered - Mobile Responsive */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-white text-xl sm:text-2xl md:text-3xl font-arabic leading-relaxed text-center">
                        {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent].arabic}
                      </p>
                    </div>

                    {/* Transliteration - Italic - Mobile Responsive */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-white text-sm sm:text-base md:text-lg italic leading-relaxed text-center">
                        {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent].transliteration}
                      </p>
                    </div>

                    {/* English Translation - Mobile Responsive */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-center">
                        {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent].translation}
                      </p>
                    </div>

                    {/* Source Reference - Mobile Responsive */}
                    <div className="mb-8 sm:mb-12">
                      <p className="text-gray-400 text-xs sm:text-xs text-center">
                        {profileDuaContent[selectedDuaCategory as keyof typeof profileDuaContent].source}
                      </p>
                    </div>
                  </>
                )}

                {/* Audio Controls - Like in image - Mobile Responsive */}
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-12 sm:mb-16">
                  {/* Previous Button - Mobile Responsive */}
                  <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                    </svg>
                  </button>

                  {/* Play/Pause Button - Large circular - Mobile Responsive */}
                  <button className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-black text-2xl sm:text-3xl hover:bg-gray-100 transition-colors shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>

                  {/* Next Button - Mobile Responsive */}
                  <button className="text-white text-xl sm:text-2xl md:text-3xl hover:text-gray-300 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
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
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Discuss Button - Like in image - Mobile Responsive */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => {
                setShowDuaContentViewer(false);
                handleDiscussClick();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full flex items-center space-x-2 sm:space-x-3 transition-colors shadow-lg text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span className="font-medium">Discuss</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      ) : showInteriorDesignSettings ? (
        /* Screen 22 & 23: My Interior Design - Settings */
        <div className="flex-1 flex flex-col h-screen w-full max-w-none overflow-hidden">
          {/* Header/Top Bar */}
          <div className="flex items-center justify-between w-full px-6 py-4 mb-6 pt-8 sm:pt-4">
            {/* Left: Back arrow and green leaf icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackFromInteriorDesignSettings}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setShowDiscussMenu(true)}
                className="hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-green-400 hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </button>
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
                            ? 'bg-green-900 text-white'
                            : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleSettingChange('language', 'French')}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                          userSettings.language === 'French'
                            ? 'bg-green-900 text-white'
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
                    <button className="bg-green-900 text-white px-4 py-2 rounded-full text-sm">
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
                            ? 'bg-green-800'
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
                        userSettings.duaOfTheDay ? 'bg-green-800' : 'bg-gray-300'
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
                        userSettings.kindNotifications ? 'bg-green-800' : 'bg-gray-300'
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
                        userSettings.sounds ? 'bg-green-800' : 'bg-gray-300'
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
                        userSettings.cloudSave ? 'bg-green-800' : 'bg-gray-300'
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
                onClick={handleDiscussClick}
                className="bg-slate-800 text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-slate-700 transition-colors"
              >
                <span className="text-sm">≈</span>
                <span className="text-sm font-medium">Discuss</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Debug Back Button - Sticky positioned to avoid hiding content */}
          <div className="sticky top-4 left-4 z-50 pointer-events-none">
            <button
              onClick={handleBackFromInteriorDesignSettings}
              className="bg-gray-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm opacity-75 hover:opacity-100 transition-opacity pointer-events-auto"
            >
              ← Back to Menu
            </button>
          </div>
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

        </>
      )}

      {/* Screen 16: Discuss Section / Side Menu Overlay - Mobile Responsive */}
      {showDiscussMenu && (
        <>
          {console.log('🚀 SIDEBAR MENU IS RENDERING! showDiscussMenu:', showDiscussMenu)}
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay - transparent to show original app background */}
          <div
            className="absolute inset-0 bg-transparent"
            onClick={handleCloseDiscussMenu}
          />



          {/* Menu Container - Compact floating design */}
          <div className="absolute top-16 left-4 z-50">
            <div className="bg-[#F5F5DC] rounded-xl shadow-2xl p-3 w-56">
              {/* Menu Items - Compact spacing */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemSelect(item.text)}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors text-left ${
                      selectedMenuItem === item.text
                        ? 'bg-[#0A7A33] text-white'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`text-lg ${
                      selectedMenuItem === item.text ? 'text-white' : 'text-gray-800'
                    }`}>
                      {typeof item.icon === 'string' ? <span>{item.icon}</span> : item.icon}
                    </div>
                    <span className={`font-medium text-sm ${
                      selectedMenuItem === item.text ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Premium Feature Callout */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  onClick={() => handleMenuItemSelect('My.Zikr+')}
                  className="w-full flex items-center space-x-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-lg text-gray-400">💎</span>
                    <span className="text-lg text-gray-400">🔒</span>
                  </div>
                  <span className="font-medium text-sm text-gray-900">My.Zikr+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Continue Button positioned under sidebar */}
          <div className="absolute top-[32rem] left-4 z-50">
            <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded-lg text-sm opacity-30 cursor-not-allowed">
              Continue
            </button>
          </div>

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
      )}

      {/* Animated Leaves Menu Overlay - Mobile Responsive */}
      {showLeavesMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleLeavesMenuToggle}
          />

          {/* Menu Container - Mobile Responsive */}
          <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 mx-4 sm:mx-6 max-w-xs sm:max-w-sm w-full transform transition-all duration-500 scale-100 opacity-100">
            {/* Floating leaves decoration */}
            <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🍃</div>
            <div className="absolute -bottom-2 -left-2 text-xl animate-pulse">🍃</div>
            <div className="absolute top-4 left-4 text-lg animate-bounce delay-300">🍃</div>

            {/* Close button */}
            <button
              onClick={handleLeavesMenuToggle}
              className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
            >
              <span className="text-gray-600 text-lg">×</span>
            </button>

            {/* Menu Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">My.Zikr Menu</h2>
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
                  id: 'discuss',
                  text: 'Discuss ✅',
                  color: 'from-blue-500 to-blue-600',
                  icon: (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 150 150">
                        {/* Outer Circle */}
                        <circle cx="75" cy="75" r="70" fill="none" stroke="#0A7A33" strokeWidth="8"/>
                        {/* Dark Green Message Bubble */}
                        <path d="M50 60a20 18 0 1 1 0 36c-3 0-6 0-9 1l-10 6 3-9c-3-3-5-7-5-11a18 18 0 0 1 21-23z" fill="#0A7A33"/>
                        {/* White Message Bubble */}
                        <path d="M100 45a20 18 0 1 1 0 36c-3 0-6 0-9 1l-10 6 3-9c-3-3-5-7-5-11a18 18 0 0 1 21-23z" fill="#FFFFFF" stroke="#0A7A33" strokeWidth="4"/>
                      </svg>
                    </div>
                  )
                },
                {
                  id: 'duas',
                  text: 'Duas',
                  color: 'from-purple-500 to-purple-600',
                  icon: '🤲'
                },
                {
                  id: 'reminders',
                  text: 'Reminders',
                  color: 'from-orange-500 to-orange-600',
                  icon: '🧠⚙️'
                },
                {
                  id: 'notes',
                  text: 'My notes',
                  color: 'from-green-500 to-green-600',
                  icon: '📝✏️'
                },
                {
                  id: 'wall',
                  text: 'The wall of duas',
                  color: 'from-emerald-500 to-emerald-600',
                  icon: '🚶‍♂️🧱'
                },
                {
                  id: 'profile',
                  text: 'My profile',
                  color: 'from-pink-500 to-pink-600',
                  icon: '👤⭕'
                },
                {
                  id: 'interior',
                  text: 'Interior design',
                  color: 'from-indigo-500 to-indigo-600',
                  icon: '💎⚙️'
                },
                {
                  id: 'premium',
                  text: 'My.Zikr+',
                  color: 'from-yellow-500 to-yellow-600',
                  icon: '💎🔒'
                },
                {
                  id: 'back',
                  text: 'Back',
                  color: 'from-red-500 to-red-600',
                  icon: '←'
                }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemSelect(item.text)}
                  className={`w-full bg-gradient-to-r ${item.color} text-white py-3 px-4 rounded-xl flex items-center space-x-3 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-white flex items-center justify-center">{typeof item.icon === 'string' ? <span className="text-xl">{item.icon}</span> : item.icon}</div>
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
      )}
    </div>
  );
}
