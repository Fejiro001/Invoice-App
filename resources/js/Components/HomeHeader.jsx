import { router } from '@inertiajs/react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';

export default function HomeHeader({ isMobile, totalInvoice }) {
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    /**
     * Handles the change of a checkbox status.
     * Updates the selected statuses based on the provided status.
     * Triggers a filter request to update the displayed content accordingly.
     *
     * @param {string} status - The status of the checkbox to be updated.
     */
    const handleCheckboxChange = (status) => {
        const updatedStatuses = selectedStatuses.includes(status)
            ? selectedStatuses.filter((item) => item !== status) // Remove status if already selected
            : [...selectedStatuses, status]; // Add new status
        setSelectedStatuses(updatedStatuses);

        router.get(
            '/home',
            { status: updatedStatuses },
            { preserveState: true },
        );
    };

    return (
        <div className="flex justify-between text-color-08 dark:text-white">
            <div className="flex flex-col justify-between md:gap-2">
                <h1 className="text-xl md:text-2xl">Invoices</h1>
                <p className="text-base-variant text-color-06 dark:text-color-05">
                    {totalInvoice === 0
                        ? 'No Invoices'
                        : isMobile
                          ? `${totalInvoice} invoices`
                          : `There are ${totalInvoice} total invoices`}
                </p>
            </div>

            <div className="flex items-center gap-5 md:h-fit md:gap-10">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button className="">
                            <span className="text-lg-variant">
                                {isMobile ? 'Filter' : 'Filter by status'}
                            </span>
                        </button>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <div className="dropdown-link">
                            <label className="dropdown-label" htmlFor="draft">
                                <Checkbox
                                    className="mr-3"
                                    id="draft"
                                    name="draft"
                                    checked={selectedStatuses.includes('Draft')}
                                    onChange={() =>
                                        handleCheckboxChange('Draft')
                                    }
                                />
                                Draft
                            </label>
                        </div>

                        <div className="dropdown-link">
                            <label className="dropdown-label" htmlFor="pending">
                                <Checkbox
                                    className="mr-3"
                                    id="pending"
                                    name="pending"
                                    checked={selectedStatuses.includes(
                                        'Pending',
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange('Pending')
                                    }
                                />
                                Pending
                            </label>
                        </div>

                        <div className="dropdown-link">
                            <label className="dropdown-label" htmlFor="paid">
                                <Checkbox
                                    className="mr-3"
                                    id="paid"
                                    name="paid"
                                    checked={selectedStatuses.includes('Paid')}
                                    onChange={() =>
                                        handleCheckboxChange('Paid')
                                    }
                                />
                                Paid
                            </label>
                        </div>
                    </Dropdown.Content>
                </Dropdown>

                <button className="group peer flex items-center gap-2 rounded-full bg-color-01 p-2 hover:bg-color-02 md:gap-5">
                    <span className="rounded-full bg-white p-2">
                        <svg
                            className="fill-[#7C5DFA] group-hover:fill-color-02"
                            width="11"
                            height="11"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                                fillRule="nonzero"
                            />
                        </svg>
                    </span>
                    <span className="pe-2 text-lg-variant text-white">
                        {isMobile ? 'New' : 'New Invoice'}
                    </span>
                </button>
            </div>
        </div>
    );
}
