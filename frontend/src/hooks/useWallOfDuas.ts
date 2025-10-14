import { useState } from 'react';
import { WallOfDuasData, CommunityDua, WallOfDuasState, UserLocation, WallSettings } from '../types/wallOfDuas';
import wallData from '../data/wallOfDuas.json';

export const useWallOfDuas = () => {
  const [wallOfDuasData] = useState<WallOfDuasData>(wallData as WallOfDuasData);
  const [state, setState] = useState<WallOfDuasState>({
    duas: wallOfDuasData.communityDuas,
    selectedDua: null,
    showLocationSettings: false,
    showThemeSettings: false,
    userLocation: wallOfDuasData.userLocation,
    settings: wallOfDuasData.settings,
  });

  // Get all community duas
  const getCommunityDuas = (): CommunityDua[] => {
    return state.duas;
  };

  // Get duas for display (show more for better scrolling experience)
  const getDisplayDuas = (limit: number = 8): CommunityDua[] => {
    return state.duas.slice(0, limit);
  };

  // Say Amine to a dua
  const sayAmine = (duaId: string) => {
    setState(prev => ({
      ...prev,
      duas: prev.duas.map(dua => 
        dua.id === duaId 
          ? { ...dua, amines: dua.amines + 1 }
          : dua
      )
    }));
    console.log('Said Amine to dua:', duaId);
  };

  // Toggle location settings
  const toggleLocationSettings = () => {
    setState(prev => ({
      ...prev,
      showLocationSettings: !prev.showLocationSettings,
      showThemeSettings: false, // Close theme settings if open
    }));
  };

  // Toggle theme settings
  const toggleThemeSettings = () => {
    setState(prev => ({
      ...prev,
      showThemeSettings: !prev.showThemeSettings,
      showLocationSettings: false, // Close location settings if open
    }));
  };

  // Close all settings
  const closeAllSettings = () => {
    setState(prev => ({
      ...prev,
      showLocationSettings: false,
      showThemeSettings: false,
    }));
  };

  // Update user location
  const updateUserLocation = (location: UserLocation) => {
    setState(prev => ({
      ...prev,
      userLocation: location,
    }));
  };

  // Update settings
  const updateSettings = (newSettings: Partial<WallSettings>) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings },
    }));
  };

  // Get time ago string with more granular formatting
  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const duaTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - duaTime.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks === 1) return '1 week ago';
    if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`;

    return 'A while ago';
  };

  // Format amine count
  const formatAmineCount = (count: number): string => {
    if (count < 1000) return count.toString();
    if (count < 1000000) return `${(count / 1000).toFixed(1)}k`;
    return `${(count / 1000000).toFixed(1)}M`;
  };

  return {
    // Data
    duas: getCommunityDuas(),
    displayDuas: getDisplayDuas(),
    userLocation: state.userLocation,
    settings: state.settings,
    
    // State
    showLocationSettings: state.showLocationSettings,
    showThemeSettings: state.showThemeSettings,
    selectedDua: state.selectedDua,
    
    // Actions
    sayAmine,
    toggleLocationSettings,
    toggleThemeSettings,
    closeAllSettings,
    updateUserLocation,
    updateSettings,
    
    // Utilities
    getTimeAgo,
    formatAmineCount,
    getDisplayDuas,
  };
};
