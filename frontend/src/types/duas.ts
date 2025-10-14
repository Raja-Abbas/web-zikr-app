export interface DuaCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface DuaContent {
  arabic: string;
  transliteration: string;
  translation: string;
  source: string;
}

export interface DuaData {
  categories: DuaCategory[];
  duas: Record<string, DuaContent>;
  dailyDua: DuaContent;
}

export interface DuaSelectionState {
  selectedCategory: string | null;
  selectedDua: DuaContent | null;
  showDuaContent: boolean;
}
