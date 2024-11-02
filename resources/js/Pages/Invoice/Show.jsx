import FormatCurrency from '@/Components/FormatCurrency';
import FormatDate from '@/Components/FormatDate';
import InvoiceStatus from '@/Components/InvoiceStatus';
import SingleItem from '@/Components/SingleItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ invoice }) {
    return (
        <AuthenticatedLayout
            header={
                <Link
                    href={route('home')}
                    className="flex items-baseline gap-6 *:hover:text-color-06"
                >
                    <img src="/images/icon-arrow-left.svg" />
                    <span className="dark:text-white">Go Back</span>
                </Link>
            }
        >
            <Head title="Invoice" />
            <section className="space-y-4 md:space-y-6">
                <div className="md:flex md:justify-between md:rounded-lg md:bg-white md:px-2 md:dark:bg-color-03">
                    <div className="flex items-center justify-between gap-5 rounded-lg p-6 max-md:bg-white max-md:dark:bg-color-03">
                        <p className="text-status dark:text-color-05">Status</p>
                        <InvoiceStatus invoice={invoice} />
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 flex justify-between gap-2 p-5 *:rounded-3xl *:py-4 *:text-lg-variant max-md:bg-white md:static max-md:dark:bg-color-03">
                        <button className="bg-color-04 px-6 text-color-05 hover:bg-white hover:text-color-07">
                            Edit
                        </button>
                        <button className="bg-color-09 px-6 text-white hover:bg-color-10">
                            Delete
                        </button>
                        <button className="bg-color-01 px-7 text-white hover:bg-color-02">
                            Mark as Paid
                        </button>
                    </div>
                </div>

                <article className="!mb-36 flex flex-col justify-between gap-8 rounded-lg bg-white p-6 md:p-8 dark:bg-color-03 dark:text-color-05">
                    <div className="flex flex-col justify-between gap-7 md:flex-row">
                        <div className="space-y-1">
                            <h1 className="text-lg-variant text-color-08 dark:text-white">
                                <span className="text-color-01">#</span>
                                {invoice.invoice_id}
                            </h1>
                            <h2 className="text-base-variant capitalize text-color-07 dark:text-color-05">
                                {invoice.description}
                            </h2>
                        </div>

                        <div className="text-left text-base text-color-07 md:text-right dark:text-color-05">
                            <p>{invoice.sender_address.street}</p>
                            <p>{invoice.sender_address.city}</p>
                            <p>{invoice.sender_address.post_code}</p>
                            <p>{invoice.sender_address.country}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between gap-8">
                        <div className="space-y-8 *:space-y-3">
                            <div>
                                <h3 className="invoice-h3">Invoice Date</h3>
                                <p className="invoice-h3-sibling">
                                    <FormatDate date={invoice.created_at} />
                                </p>
                            </div>
                            <div>
                                <h3 className="invoice-h3">Payment Due</h3>
                                <p className="invoice-h3-sibling">
                                    <FormatDate date={invoice.payment_due} />
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="invoice-h3">Bill To</h3>
                            <p className="invoice-h3-sibling">
                                {invoice.client_name}
                            </p>
                            <div className="text-base text-color-07 dark:text-color-05">
                                <p>{invoice.client_address.street}</p>
                                <p>{invoice.client_address.city}</p>
                                <p>{invoice.client_address.post_code}</p>
                                <p>{invoice.client_address.country}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="invoice-h3">Sent To</h3>
                            <p className="invoice-h3-sibling">
                                {invoice.client_email}
                            </p>
                        </div>
                    </div>

                    <div>
                        <ol className="bg-add-bg space-y-6 rounded-t-lg p-6 sm:space-y-8 sm:p-8 dark:bg-color-04">
                            {/* Header row for tablet and larger screens */}
                            <li className="hidden text-base text-color-07 md:grid md:grid-cols-4 dark:text-color-05">
                                <span>Item Name</span>
                                <span className="text-right">QTY.</span>
                                <span className="text-right">Price</span>
                                <span className="text-right">Total</span>
                            </li>

                            {invoice.items.map((item) => {
                                return <SingleItem key={item.id} item={item} />;
                            })}
                        </ol>

                        <div className="flex items-center justify-between rounded-b-lg bg-navbar-bg px-6 py-7 text-white dark:bg-color-08">
                            <p className="text-base">Amount Due</p>
                            <p className="text-xl">
                                {<FormatCurrency money={invoice.total} />}
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </AuthenticatedLayout>
    );
}
