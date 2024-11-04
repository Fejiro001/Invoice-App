import AddNewItem from '@/Components/AddNewItem';
import GoBackHeader from '@/Components/GoBackHeader';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Create({ setShowCreateInvoice }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    const formattedDate = format(new Date(), 'dd MMM yyyy');

    return (
        <AuthenticatedLayout
            className="bg-white lg:ps-6"
            header={isMobile ? <GoBackHeader /> : null}
        >
            <Head title="Create Invoice" />

            <div className="px-10 md:p-14">
                <h1 className="text-2xl text-color-08 dark:text-white">
                    New Invoice
                </h1>
                <form className="space-y-10 py-12">
                    {/* Bill From */}
                    <fieldset className="space-y-6">
                        <legend className="text-lg-variant text-color-01">
                            Bill From
                        </legend>
                        {/* Street Address */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={'Street Address'} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput required />
                        </div>

                        <div className="flex flex-wrap justify-between gap-6 *:grow md:flex-nowrap">
                            {/* City */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'City'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                            {/* Post Code */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'Post Code'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                            {/* Country */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'Country'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                        </div>
                    </fieldset>

                    {/* Bill To */}
                    <fieldset className="space-y-6">
                        <legend className="text-lg-variant text-color-01">
                            Bill To
                        </legend>
                        {/* Client's Name */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={"Client's Name"} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput required />
                        </div>
                        {/* Client's Email */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={"Client's Email"} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput
                                className={'placeholder:text-white'}
                                required
                                type={'email'}
                                placeholder={'e.g. email@example.com'}
                            />
                        </div>
                        {/* Street Address */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={'Street Address'} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput required />
                        </div>

                        <div className="flex flex-wrap justify-between gap-6 *:grow md:flex-nowrap">
                            {/* City */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'City'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                            {/* Post Code */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'Post Code'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                            {/* Country */}
                            <div>
                                <div className="flex justify-between">
                                    <InputLabel value={'Country'} />
                                    <InputError message={"can't be empty"} />
                                </div>
                                <TextInput required />
                            </div>
                        </div>
                    </fieldset>

                    {/* Invoice Info */}
                    <div className="flex flex-wrap justify-between gap-6 *:grow">
                        {/* Invoice Date */}
                        <div className="">
                            <div className="flex justify-between">
                                <InputLabel value={'Invoice Date'} />
                            </div>
                            <div className="relative">
                                <TextInput
                                    value={formattedDate}
                                    readOnly={true}
                                />
                                <svg
                                    className="absolute right-3 top-3"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
                                        fill="#7E88C3"
                                        fillRule="nonzero"
                                        opacity=".5"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Payment Terms */}
                        <div className="">
                            <InputLabel
                                htmlFor={'payment_terms'}
                                value={'Payment Terms'}
                            />
                            <select
                                className="w-full rounded-md border-color-05 shadow-sm focus:border-color-02 focus:ring-color-02 dark:border-color-04 dark:bg-color-03 dark:text-white dark:focus:border-color-04 dark:focus:ring-color-04"
                                name="payment_terms"
                                id="payment_terms"
                                defaultValue={'Net 30 days'}
                            >
                                <option value={'Net 1 day'}>Net 1 day</option>
                                <option value={'Net 7 days'}>Net 7 days</option>
                                <option value={'Net 14 days'}>
                                    Net 14 days
                                </option>
                                <option value={'Net 30 days'}>
                                    Net 30 days
                                </option>
                            </select>
                        </div>

                        {/* Project Description */}
                        <div className="">
                            <InputLabel value={'Project Description'} />
                            <TextInput
                                className={'placeholder:text-white'}
                                required
                                placeholder={'e.g. Graphic Design Service'}
                            />
                        </div>
                    </div>

                    {/* Item List */}
                    <div>
                        <h2 className="mb-5 text-[#777F98] md:mb-3">
                            Item List
                        </h2>
                        <ol>
                            <li className="hidden text-base text-color-07 md:mb-2 md:grid md:grid-cols-6 dark:text-color-05">
                                <span>Item Name</span>
                                <span className="text-left">Qty.</span>
                                <span className="text-left">Price</span>
                                <span className="text-left">Total</span>
                            </li>

                            <div className="flex flex-col gap-12">
                                <AddNewItem />
                                <button className="rounded-full bg-add-bg py-4 text-color-07 dark:bg-color-04 dark:text-color-06">
                                    + Add New Item
                                </button>
                            </div>
                        </ol>
                    </div>
                </form>
            </div>

            <div className="sticky bottom-0 left-0 flex justify-between gap-2 bg-white p-5 shadow-[0px_-30px_40px_20px_#edf2f7] *:rounded-3xl *:px-6 *:py-4 *:text-lg-variant md:bottom-20 md:rounded-tr-xl lg:bottom-0 dark:bg-color-03 dark:shadow-none">
                <button
                    className="bg-add-bg text-color-07 hover:bg-white hover:text-color-07 dark:bg-color-04 dark:text-color-05"
                    onClick={() => setShowCreateInvoice(false)}
                >
                    Discard
                </button>
                <button className="bg-navbar-bg text-color-06 dark:text-color-05">
                    Save as Draft
                </button>
                <button className="bg-color-01 text-white hover:bg-color-02">
                    Save & Send
                </button>
            </div>
        </AuthenticatedLayout>
    );
}
