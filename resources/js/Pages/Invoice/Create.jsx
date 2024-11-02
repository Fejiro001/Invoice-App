import AddNewItem from '@/Components/AddNewItem';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Create({ setShowCreateInvoice }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <AuthenticatedLayout
            className="bg-white"
            header={
                <Link
                    href={route('home')}
                    className="flex items-baseline gap-6 *:hover:text-color-06 md:hidden"
                >
                    <img src="/images/icon-arrow-left.svg" />
                    <span className="dark:text-white">Go Back</span>
                </Link>
            }
        >
            <Head title="Create Invoice" />

            <div className="px-6">
                <h1 className="text-2xl text-color-08 dark:text-white">
                    New Invoice
                </h1>
                <form className="mb-20 space-y-10 py-12">
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

                        <div className="flex flex-wrap justify-between gap-6 *:grow">
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
                            <TextInput required type={'email'} />
                        </div>
                        {/* Street Address */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={'Street Address'} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput required />
                        </div>

                        <div className="flex flex-wrap justify-between gap-6 *:grow">
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
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={'Invoice Date'} />
                                {/* <InputError message={"can't be empty"} /> */}
                            </div>
                            <TextInput type={'date'} readOnly={true} />
                        </div>

                        {/* Payment Terms */}
                        <div>
                            <div className="flex justify-between">
                                <InputLabel
                                    htmlFor={'payment_terms'}
                                    value={'Invoice Date'}
                                />
                                {/* <InputError message={"can't be empty"} /> */}
                            </div>
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
                        <div>
                            <div className="flex justify-between">
                                <InputLabel value={'Project Description'} />
                                <InputError message={"can't be empty"} />
                            </div>
                            <TextInput required />
                        </div>
                    </div>

                    {/* Item List */}
                    <div>
                        <h2 className="text-[#777F98]">Item List</h2>
                        <ol>
                            <li className="hidden text-base text-color-07 md:grid md:grid-cols-5 dark:text-color-05">
                                <span>Item Name</span>
                                <span className="text-right">Qty.</span>
                                <span className="text-right">Price</span>
                                <span className="text-right">Total</span>
                            </li>

                            <div className="flex flex-col gap-12">
                                <AddNewItem />
                                <button className="bg-add-bg rounded-full py-4 text-color-07 dark:bg-color-04 dark:text-color-06">
                                    + Add New Item
                                </button>
                            </div>
                        </ol>
                    </div>
                </form>
            </div>
            <div className="sticky bottom-0 left-0 flex justify-between gap-2 p-5 *:rounded-3xl *:px-6 *:py-4 *:text-lg-variant dark:bg-color-03">
                <button
                    className="bg-color-04 text-color-05 hover:bg-white hover:text-color-07"
                    onClick={() => setShowCreateInvoice(false)}
                >
                    Discard
                </button>
                <button className="text-color-05 dark:bg-navbar-bg">
                    Save as Draft
                </button>
                <button className="text-white dark:bg-color-01">
                    Save & Send
                </button>
            </div>
        </AuthenticatedLayout>
    );
}
