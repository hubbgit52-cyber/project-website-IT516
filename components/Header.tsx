"use client";

import { useState, useEffect } from 'react';
import Nav from './Nav';

const THEME_KEY = 'project-theme-mode';

function prefersDark() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const initialTheme = (stored === 'dark' || stored === 'light') ? stored : (prefersDark() ? 'dark' : 'light');
    setTheme(initialTheme);
    document.body.classList.toggle('dark-mode', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="site-header">
      <div>
        <h1>Project Website</h1>
        <p>Week 4 project: React component architecture with hooks.</p>
      </div>
      <div className="header-controls">
        <button
          type="button"
          className="toggle-button"
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
        >
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <Nav />
    </header>
  );
}