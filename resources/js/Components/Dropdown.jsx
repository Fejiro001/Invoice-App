import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

/**
 * Dropdown component to handle toggling visibility of its children.
 *
 * @param {Object} children - The content to be displayed within the dropdown.
 * @returns {JSX.Element} Dropdown component with toggle functionality.
 */
const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

/**
 * Functional component for rendering a trigger element in a dropdown menu.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the trigger.
 * @returns {JSX.Element} A JSX element representing the trigger with click functionality to toggle the dropdown.
 */
const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div className="flex items-center gap-3" onClick={toggleOpen}>
                {children}
                <img
                    className={`w-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    src="/images/icon-arrow-down.svg"
                    alt="dropdown arrow"
                />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)} // Close dropdown when clicking outside
                ></div>
            )}
        </>
    );
};

/**
 * Renders a dropdown content component with specified alignment, width, and content classes.
 *
 * @param {string} align - The alignment of the dropdown content ('left' or 'right').
 * @param {string} width - The width of the dropdown content (default is '48').
 * @param {string} contentClasses - Additional classes for the content container.
 * @param {ReactNode} children - The content to be displayed within the dropdown.
 * @returns {JSX.Element} A dropdown content component.
 */
const Content = ({
    align = 'right',
    width = '48',
    contentClasses = 'py-6 space-y-3 bg-white dark:bg-color-04',
    children,
}) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <>
            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(true)}
                >
                    <div
                        className={
                            `rounded-md ring-1 ring-black ring-opacity-5 ` +
                            contentClasses
                        }
                    >
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

/**
 * DropdownLink component for rendering a link inside a dropdown menu.
 *
 * @param {string} className - Additional classes to be applied to the link.
 * @param {ReactNode} children - The content to be displayed inside the link.
 * @param {object} props - Additional props to be spread on the link element.
 * @returns {JSX.Element} A link component with specified styles and behavior.
 */
const DropdownLink = ({ className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 ' +
                className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
