import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [currMode, setcurrMode] = useState('light');

  const switchTheme = () => {
    if (currMode === 'light') {
      localStorage.setItem('theme', 'dark');
      setcurrMode('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setcurrMode('light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setcurrMode(localTheme);
    } else {
      setcurrMode('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);
  return [currMode, switchTheme];
};
