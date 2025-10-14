export interface CommunityDua {
  id: string;
  author: string;
  dua: string;
  amines: number;
  timestamp: string;
  location: string;
}

export interface UserLocation {
  city: string;
  country: string;
}

export interface WallSettings {
  showLocation: boolean;
  theme: 'dark' | 'light';
  notifications: boolean;
}

export interface WallOfDuasData {
  communityDuas: CommunityDua[];
  userLocation: UserLocation;
  settings: WallSettings;
}

export interface WallOfDuasState {
  duas: CommunityDua[];
  selectedDua: CommunityDua | null;
  showLocationSettings: boolean;
  showThemeSettings: boolean;
  userLocation: UserLocation;
  settings: WallSettings;
}
