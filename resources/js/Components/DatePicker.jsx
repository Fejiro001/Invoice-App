import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

const DatePicker = () => {
    const today = dayjs();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(today.month());
    const [currentYear, setCurrentYear] = useState(today.year());
    const calendarRef = useRef(null);
    const buttonRef = useRef(null);

    // Toggle the date picker visibility
    const toggleDatePicker = () => setIsOpen(!isOpen);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Navigate to the previous month
    const handlePrevMonth = () => {
        const newDate = dayjs()
            .year(currentYear)
            .month(currentMonth)
            .subtract(1, 'month');
        setCurrentMonth(newDate.month());
        setCurrentYear(newDate.year());
    };

    // Navigate to the next month
    const handleNextMonth = () => {
        const newDate = dayjs()
            .year(currentYear)
            .month(currentMonth)
            .add(1, 'month');
        setCurrentMonth(newDate.month());
        setCurrentYear(newDate.year());
    };

    // Select a date
    const selectDate = (day, dateObj) => {
        if (dateObj.isBefore(today, 'day')) {
            return; // Prevent selecting dates before today
        }
        setSelectedDate(dateObj);
        setIsOpen(false);
        buttonRef.current.focus(); // Return focus to the button after selection
    };

    // Generate calendar days with previous and next month fill-ins
    const generateCalendarDays = () => {
        const startOfMonth = dayjs()
            .year(currentYear)
            .month(currentMonth)
            .startOf('month');
        const daysInMonth = startOfMonth.daysInMonth();
        const firstDayOfMonth = startOfMonth.day(); // Day of the week (0 = Sunday)

        const calendarDays = [];

        // Add days from previous month to fill the start of the grid
        const prevMonth = startOfMonth.subtract(1, 'month');
        const daysInPrevMonth = prevMonth.daysInMonth();
        for (let i = firstDayOfMonth; i > 0; i--) {
            const day = daysInPrevMonth - i + 1;
            const dateObj = prevMonth.date(day);
            calendarDays.push({ day, currentMonth: false, date: dateObj });
        }

        // Add days for the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const dateObj = dayjs()
                .year(currentYear)
                .month(currentMonth)
                .date(i);
            calendarDays.push({ day: i, currentMonth: true, date: dateObj });
        }

        // Add days from the next month to fill the end of the grid (total 42 cells: 6 weeks)
        const nextMonth = startOfMonth.add(1, 'month');
        const totalCells = 42;
        while (calendarDays.length < totalCells) {
            const day = calendarDays.length - daysInMonth - firstDayOfMonth + 1;
            const dateObj = nextMonth.date(day);
            calendarDays.push({ day, currentMonth: false, date: dateObj });
        }

        return calendarDays;
    };

    return (
        <div className="relative inline-block w-full" ref={calendarRef}>
            {/* Date Picker Button */}
            <button
                type="button"
                ref={buttonRef}
                onClick={toggleDatePicker}
                className="dropdown-button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label="Select a date"
            >
                <span>{selectedDate.format('DD MMM YYYY')}</span>
                <img src="/images/icon-calendar.svg" />
            </button>

            {/* Calendar Dropdown */}
            {isOpen && (
                <div
                    className="dropdown-content"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="calendar-heading"
                >
                    <div className="mb-2 flex items-center justify-between">
                        {/* Previous Month Button */}
                        <button
                            type="button"
                            onClick={handlePrevMonth}
                            aria-label="Previous month"
                            className="rounded p-1"
                        >
                            <img src="/images/icon-arrow-left.svg" />
                        </button>

                        {/* Display Current Month and Year */}
                        <span
                            id="calendar-heading"
                            className="text-color-08 dark:text-white"
                        >
                            {dayjs()
                                .year(currentYear)
                                .month(currentMonth)
                                .format('MMM YYYY')}
                        </span>

                        {/* Next Month Button */}
                        <button
                            type="button"
                            onClick={handleNextMonth}
                            aria-label="Next month"
                            className="rounded p-1"
                        >
                            <img src="/images/icon-arrow-right.svg" />
                        </button>
                    </div>

                    {/* Days of the Month */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                        {generateCalendarDays().map(
                            ({ day, currentMonth, date }, index) => {
                                const isDisabled = date.isBefore(today, 'day');
                                const isSelected = selectedDate.isSame(
                                    date,
                                    'day',
                                );

                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => selectDate(day, date)}
                                        disabled={!currentMonth || isDisabled}
                                        className={`py-2 focus:outline-none focus:ring-2 focus:ring-color-02 ${
                                            currentMonth
                                                ? isDisabled
                                                    ? 'cursor-not-allowed text-gray-500'
                                                    : 'text-color-08 hover:text-color-01 dark:text-white'
                                                : 'text-gray-400'
                                        } ${isSelected ? 'text-color-02' : ''}`}
                                        aria-label={
                                            day
                                                ? `Select ${date.format('DD MMM YYYY')}`
                                                : ''
                                        }
                                    >
                                        {day || ''}
                                    </button>
                                );
                            },
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
