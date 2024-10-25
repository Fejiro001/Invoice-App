import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
/**
 * Component for toggling between light and dark mode.
 * Manages the theme based on user preference or system settings.
 * Uses localStorage to store the theme preference.
 * Applies the theme to the document's root element and updates the UI accordingly.
 */
export default function DarkModeToggle() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="md:px-2" onClick={toggleTheme}>
            {isDarkMode ? (
                <img src="/images/icon-sun.svg" alt="Sun icon" />
            ) : (
                <img src="/images/icon-moon.svg" alt="Moon icon" />
            )}
        </button>
    );
}
