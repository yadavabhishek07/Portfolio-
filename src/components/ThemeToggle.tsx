import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [systemIsDark, setSystemIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  const [pinnedTheme, setPinnedTheme] = useState<'light' | 'dark' | null>(() => {
    const saved = localStorage.getItem('color-scheme');
    if (saved === 'light' || saved === 'dark') return saved;
    return null;
  });

  // 1. Listen for system theme changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // 2. React to theme state changes (apply/remove classes and meta tag)
  useEffect(() => {
    const activeTheme = pinnedTheme || (systemIsDark ? 'dark' : 'light');
    
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    if (metaTag) {
      metaTag.setAttribute('content', activeTheme);
    }
    
    if (pinnedTheme) {
      localStorage.setItem('color-scheme', pinnedTheme);
    } else {
      localStorage.removeItem('color-scheme');
    }
  }, [pinnedTheme, systemIsDark]);

  // Determine current active visual state
  const isDarkActive = pinnedTheme ? pinnedTheme === 'dark' : systemIsDark;

  // Toggle handler
  const handleToggle = () => {
    if (pinnedTheme !== null) {
      // Currently pinned to the opposite -> toggle back to system setting
      setPinnedTheme(null);
    } else {
      // Currently in system setting -> toggle to the opposite and pin it
      const opposite = systemIsDark ? 'light' : 'dark';
      setPinnedTheme(opposite);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
      aria-label={isDarkActive ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={
        pinnedTheme 
          ? `Pinned to ${pinnedTheme} mode. Click to follow system theme.` 
          : `Following system theme (${isDarkActive ? 'dark' : 'light'}). Click to override.`
      }
    >
      {isDarkActive ? (
        <Sun className="h-5 w-5 text-amber-500" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      )}
      <span className="text-sm font-medium hidden sm:inline select-none">
        {pinnedTheme ? (
          <span>Theme: {pinnedTheme === 'dark' ? 'Dark' : 'Light'}</span>
        ) : (
          <span>Theme: System</span>
        )}
      </span>
    </button>
  );
}
