import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Helper to open drawer
  const openDrawer = async () => {
    const drawer = drawerRef.current as any;
    const scroller = scrollerRef.current;
    if (!drawer || !scroller) return;

    // Show popover to put it in top-layer
    try {
      if (typeof drawer.showPopover === 'function') {
        drawer.showPopover();
      } else {
        drawer.classList.remove('hidden');
      }
    } catch (e) {
      drawer.classList.remove('hidden');
    }

    setIsMobileOpen(true);

    // Initial scroll position fallback for browsers without scroll-initial-target support
    if (!CSS.supports('scroll-initial-target', 'nearest')) {
      scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'instant' });
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    }

    // Scroll sheet fully into view
    scroller.scrollTo({ left: 0, behavior: 'smooth' });
  };

  // Helper to close drawer
  const closeDrawer = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    // Scroll back to the spacer (offscreen)
    scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'smooth' });
  };

  // Handle intersection observer to detect state changes
  useEffect(() => {
    const drawer = drawerRef.current as any;
    const sheet = sheetRef.current;
    const scroller = scrollerRef.current;
    if (!drawer || !sheet || !scroller) return;

    const visibleThreshold = 1 / window.innerWidth;

    const onDrawerOpened = () => {
      // Mark main element inert to block keyboard focus outside drawer
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.setAttribute('inert', '');
      sheet.focus();
    };

    const onDrawerClosed = () => {
      try {
        if (typeof drawer.hidePopover === 'function') {
          drawer.hidePopover();
        } else {
          drawer.classList.add('hidden');
        }
      } catch (e) {
        drawer.classList.add('hidden');
      }
      setIsMobileOpen(false);
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.removeAttribute('inert');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1);
        if (!entry) return;
        if (entry.intersectionRatio < visibleThreshold) {
          onDrawerClosed();
        }
        if (entry.intersectionRatio === 1) {
          onDrawerOpened();
        }
      },
      { root: drawer, threshold: [visibleThreshold, 1] }
    );

    observer.observe(sheet);

    // Light dismiss on click outside the sheet
    const handleOutsideClick = (e: MouseEvent) => {
      if (sheet && !sheet.contains(e.target as Node)) {
        closeDrawer();
      }
    };
    drawer.addEventListener('click', handleOutsideClick);

    // Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      observer.disconnect();
      drawer.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      
      // Cleanup inertness
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.removeAttribute('inert');
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full glass shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 select-none group">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:to-violet-700 transition-all duration-300">
            Abhishek Yadav
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-500 dark:text-slate-350 dark:hover:text-sky-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (ThemeToggle + Hamburger) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={openDrawer}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-drawer"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-350 dark:hover:text-white dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Popover Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        {...{ popover: "manual" }}
        className="fixed inset-0 m-0 w-full h-full bg-slate-950/40 backdrop-blur-sm border-0 focus:outline-none hidden open:block z-50 overflow-hidden"
      >
        {/* Scroller Container */}
        <div
          ref={scrollerRef}
          className="Drawer-scroller flex w-full h-full"
        >
          {/* Main Sheet (Left aligned drawer) */}
          <div
            ref={sheetRef}
            tabIndex={-1}
            className="Drawer-sheet w-[80vw] max-w-sm h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl focus:outline-none"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
                  Navigation
                </span>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-850 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeDrawer}
                    className="text-lg font-medium text-slate-750 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400 transition-colors duration-150 py-2 border-b border-slate-100 dark:border-slate-800"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="text-xs text-slate-400 dark:text-slate-505 border-t border-slate-100 dark:border-slate-800 pt-4">
              &copy; {new Date().getFullYear()} Abhishek Yadav. All rights reserved.
            </div>
          </div>

          {/* Transparent Spacer (Right side) that user swipes over to close */}
          <div className="Drawer-spacer w-[20vw] h-full flex-shrink-0" onClick={closeDrawer}></div>
        </div>
      </div>
    </header>
  );
}
