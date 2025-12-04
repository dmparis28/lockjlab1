// Filename: app/context/ThemeContext.jsx
'use client';

import { createContext, useContext, useEffect, useState, useLayoutEffect } from 'react';
import { themes, defaultTheme } from '../config/themes';

const ThemeContext = createContext();

// Convert camelCase to kebab-case for CSS variables
const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

// Apply theme to document
const applyTheme = (themeId) => {
  const theme = themes[themeId];
  if (!theme) return;

  const root = document.documentElement;

  // Apply colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${toKebabCase(key)}`, value);
  });

  // Apply fonts
  Object.entries(theme.fonts).forEach(([key, value]) => {
    root.style.setProperty(`--font-${key}`, value);
  });

  // Apply border radius
  Object.entries(theme.radius).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value);
  });

  // Apply shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });

  // Add theme class to body
  document.body.className = document.body.className
    .replace(/theme-\w+/g, '')
    .trim();
  document.body.classList.add(`theme-${themeId}`);
};

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  // Apply theme immediately on mount (before paint)
  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('lockjlab-theme');
    const themeToApply = (savedTheme && themes[savedTheme]) ? savedTheme : defaultTheme;
    
    setActiveTheme(themeToApply);
    applyTheme(themeToApply);
    setIsLoaded(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (!isLoaded) return;
    
    applyTheme(activeTheme);
    localStorage.setItem('lockjlab-theme', activeTheme);
  }, [activeTheme, isLoaded]);

  const switchTheme = (themeId) => {
    if (themes[themeId]) {
      setActiveTheme(themeId);
    }
  };

  const currentTheme = themes[activeTheme];

  return (
    <ThemeContext.Provider value={{ 
      activeTheme, 
      switchTheme, 
      currentTheme,
      themes,
      isLoaded 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
