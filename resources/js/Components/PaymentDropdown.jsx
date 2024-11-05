import { useEffect, useRef, useState } from 'react';

const PaymentDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Net 30 Days');
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const options = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];

    // Toggle dropdown open/close state
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle selection of an item
    const handleSelect = (value) => {
        setSelected(value);
        setIsOpen(false);
        buttonRef.current.focus(); // Return focus to the button after selection
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
            buttonRef.current.focus();
        }
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (!isOpen) {
                setIsOpen(true);
            } else {
                const firstOption = dropdownRef.current.querySelector('li');
                firstOption?.focus();
            }
        }
    };

    // Handle focus within the dropdown options
    const handleOptionKeyDown = (event, index) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const next = dropdownRef.current.querySelectorAll('li')[index + 1];
            next?.focus();
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            const prev = dropdownRef.current.querySelectorAll('li')[index - 1];
            prev?.focus();
        }
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleSelect(options[index]);
        }
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* Dropdown Button with aria-expanded and aria-haspopup */}
            <button
                type="button"
                ref={buttonRef}
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                className="dropdown-button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls="dropdown-menu"
            >
                <span>{selected}</span>
                <svg
                    className={isOpen ? `rotate-180 transform` : ``}
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1l4.228 4.228L9.456 1"
                        stroke="#7C5DFA"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    id="dropdown-menu"
                    role="listbox"
                    aria-activedescendant={selected}
                    className="dropdown-content"
                >
                    {options.map((option, index) => (
                        <li
                            key={option}
                            role="option"
                            aria-selected={selected === option}
                            tabIndex={-1}
                            onClick={() => handleSelect(option)}
                            onKeyDown={(e) => handleOptionKeyDown(e, index)}
                            className={`cursor-pointers p-4 text-color-08 hover:text-color-01 focus:border-color-02 focus:ring-color-02 dark:border-color-04 dark:text-white dark:focus:border-color-02 dark:focus:ring-color-02 ${
                                selected === option
                                    ? 'text-color-02 dark:text-color-02'
                                    : ''
                            }`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PaymentDropdown;
