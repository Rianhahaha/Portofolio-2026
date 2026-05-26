import { useState, useEffect } from 'react';

export function useIsTouchDevice(): boolean {
  // Set default to false to match SSR HTML output
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    
    // Set initial value on client mount
    setIsTouch(mediaQuery.matches);

    // Optional but recommended: Listen for changes (e.g., resizing devtools or connecting peripherals)
    const handler = (event: MediaQueryListEvent) => {
      setIsTouch(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    
    // Cleanup listener on unmount to prevent memory leaks
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isTouch;
}