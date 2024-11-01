import AddNewItem from '@/Components/AddNewItem';
import GoBackHeader from '@/Components/GoBackHeader';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Create() {
    return (
        <AuthenticatedLayout header={<GoBackHeader />}>
            <Head title="Create Invoice" />

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
                            <option value={'Net 14 days'}>Net 14 days</option>
                            <option value={'Net 30 days'}>Net 30 days</option>
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
                        <li className="hidden text-base text-color-07 md:grid md:grid-cols-4 dark:text-color-05">
                            <span>Item Name</span>
                            <span className="text-right">Qty.</span>
                            <span className="text-right">Price</span>
                            <span className="text-right">Total</span>
                        </li>

                        <div>
                            <AddNewItem />
                            <button>+ Add New Item</button>
                        </div>
                    </ol>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
