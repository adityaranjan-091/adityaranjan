
"use client";

import type { FC, ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string; // 'light', 'dark', 'system'
  storageKey?: string;
}

interface ThemeProviderState {
  theme: string; // User's stored preference: 'light', 'dark', or 'system'
  appliedTheme: string; // Actual theme applied: 'light' or 'dark'
  setTheme: (theme: string) => void; // To set the preference
  toggleTheme: () => void; // To toggle between light/dark
}

const initialState: ThemeProviderState = {
  theme: 'system',
  appliedTheme: 'light', // Placeholder, will be updated on mount
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'app-ui-theme',
  ...props
}) => {
  const [userPreference, setUserPreference] = useState<string>(defaultTheme);
  const [appliedTheme, setAppliedTheme] = useState<string>(() => {
    // Initial applied theme before mount can't access window.matchMedia
    // It will be corrected on mount by useEffect.
    // If defaultTheme is explicitly light or dark, use that. Otherwise, default to light.
    return defaultTheme === 'dark' || defaultTheme === 'light' ? defaultTheme : 'light';
  });
  const [mounted, setMounted] = useState(false);

  // Effect to load initial user preference from localStorage
  useEffect(() => {
    setMounted(true);
    let initialUserPreference = defaultTheme;
    try {
      const storedTheme = localStorage.getItem(storageKey);
      if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        initialUserPreference = storedTheme;
      }
    } catch (e) {
      console.error('Failed to access localStorage for theme:', e);
    }
    setUserPreference(initialUserPreference);
  }, [storageKey, defaultTheme]);

  // Effect to apply theme to DOM and update appliedTheme state
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let currentApplied: string;
    if (userPreference === 'system') {
      currentApplied = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      currentApplied = userPreference;
    }

    root.classList.add(currentApplied);
    setAppliedTheme(currentApplied);

  }, [userPreference, mounted]);

  // Effect to listen to system theme changes if userPreference is 'system'
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (userPreference === 'system') { 
        const newSystemTheme = mediaQuery.matches ? 'dark' : 'light';
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newSystemTheme);
        setAppliedTheme(newSystemTheme);
      }
    };

    if (userPreference === 'system') {
      mediaQuery.addEventListener('change', handleChange);
      handleChange(); // Call once to set initial system theme
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [userPreference, mounted]);

  const setThemePreference = (newPreference: string) => {
    if (!['light', 'dark', 'system'].includes(newPreference)) {
      console.warn(`Invalid theme preference: ${newPreference}`);
      return;
    }
    try {
      localStorage.setItem(storageKey, newPreference);
    } catch (e) {
      console.error('Failed to set theme preference in localStorage:', e);
    }
    setUserPreference(newPreference);
  };

  const toggleTheme = () => {
    if (!mounted) return;
    
    let currentActualTheme: string;
    if (userPreference === 'system') {
      currentActualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      currentActualTheme = userPreference;
    }
    
    const newExplicitTheme = currentActualTheme === 'light' ? 'dark' : 'light';
    setThemePreference(newExplicitTheme);
  };

  const value = {
    theme: userPreference,
    appliedTheme,
    setTheme: setThemePreference,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
