'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if screen matches a media query
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}

/**
 * Hook to detect mobile screen
 */
export function useIsMobile(): boolean {
    return useMediaQuery('(max-width: 768px)');
}

/**
 * Hook to detect tablet screen
 */
export function useIsTablet(): boolean {
    return useMediaQuery('(max-width: 1024px)');
}
