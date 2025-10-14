import { useState } from 'react';
import { DuaData, DuaCategory, DuaContent, DuaSelectionState } from '../types/duas';
import duasData from '../data/duas.json';

export const useDuas = () => {
  const [duaData] = useState<DuaData>(duasData as DuaData);
  const [selectionState, setSelectionState] = useState<DuaSelectionState>({
    selectedCategory: null,
    selectedDua: null,
    showDuaContent: false,
  });

  // Get all dua categories
  const getCategories = (): DuaCategory[] => {
    return duaData.categories;
  };

  // Get dua content by category ID
  const getDuaByCategory = (categoryId: string): DuaContent | null => {
    return duaData.duas[categoryId] || null;
  };

  // Get daily dua
  const getDailyDua = (): DuaContent => {
    return duaData.dailyDua;
  };

  // Select a dua category and show its content
  const selectDuaCategory = (categoryId: string) => {
    const dua = getDuaByCategory(categoryId);
    if (dua) {
      setSelectionState({
        selectedCategory: categoryId,
        selectedDua: dua,
        showDuaContent: true,
      });
      console.log('Selected dua category:', categoryId, dua);
    } else {
      console.warn('Dua not found for category:', categoryId);
    }
  };

  // Clear dua selection
  const clearSelection = () => {
    setSelectionState({
      selectedCategory: null,
      selectedDua: null,
      showDuaContent: false,
    });
  };

  // Get category by ID
  const getCategoryById = (categoryId: string): DuaCategory | null => {
    return duaData.categories.find(cat => cat.id === categoryId) || null;
  };

  // Get recommended duas (first 3 categories)
  const getRecommendedDuas = (): DuaCategory[] => {
    return duaData.categories.slice(0, 3);
  };

  return {
    // Data
    categories: getCategories(),
    dailyDua: getDailyDua(),
    
    // State
    selectedCategory: selectionState.selectedCategory,
    selectedDua: selectionState.selectedDua,
    showDuaContent: selectionState.showDuaContent,
    
    // Actions
    selectDuaCategory,
    clearSelection,
    getDuaByCategory,
    getCategoryById,
    getRecommendedDuas,
  };
};
