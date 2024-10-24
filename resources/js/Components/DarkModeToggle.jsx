import { useCallback, useEffect, useState } from 'react';
/**
 * Component for toggling between light and dark mode.
 * Manages the theme based on user preference or system settings.
 * Uses localStorage to store the theme preference.
 * Applies the theme to the document's root element and updates the UI accordingly.
 */
export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply theme
        const applyTheme = (theme) => {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            setIsDarkMode(theme === 'dark'); // check
        };

        // Check localStorage for theme preference
        const savedTheme = localStorage.getItem('theme');

        // Respect system preference if no saved theme
        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        // Apply saved theme or system preference
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(systemPrefersDark ? 'dark' : 'light');
        }

        // Listen for system color scheme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };
        mediaQuery.addEventListener('change', handleSystemThemeChange);

        // Cleanup event listener on unmount
        return () =>
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, []);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            // Apply the new mode to the document and localStorage
            document.documentElement.classList.toggle('dark', newMode);
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode; // Return the new state
        });
    }, []);

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (
                <img src="/images/icon-sun.svg" alt="Sun icon" />
            ) : (
                <img src="/images/icon-moon.svg" alt="Moon icon" />
            )}
        </button>
    );
}
