import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  theme: 
    (typeof window !== 'undefined' && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light',
  setTheme: (theme) => set({ theme }),
}));