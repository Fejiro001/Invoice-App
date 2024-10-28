import { Link } from '@inertiajs/react';
import currency from 'currency.js';
import { format } from 'date-fns';

export default function SingleInvoice({ invoice }) {
    const total = currency(invoice.total, {
        symbol: '£ ',
        precision: 2,
    }).format();

    const statusClasses = {
        paid: 'bg-paid/10 *:bg-paid text-paid',
        pending: 'bg-pending/10 *:bg-pending text-pending',
    };
    // Default to draft if the status is not 'paid' or 'pending'
    const status =
        statusClasses[invoice.status] ||
        'bg-draft/10 *:bg-draft text-draft dark:bg-draft/30 dark:*:bg-color-05 dark:text-color-05';

    return (
        <Link href={route('invoice.show', invoice)}>
            <div className="invoice-card hover:cursor-pointer hover:ring-1 hover:ring-color-01 hover:drop-shadow-md md:*:col-auto md:*:row-auto">
                {/* ID */}
                <p className="pb-6 text-lg-variant md:p-0">
                    <span className="text-color-07">#</span>
                    {invoice.invoice_id}
                </p>

                {/* Due Payment Date */}
                <p className="col-start-1 pb-2 text-base-variant text-color-07 md:p-0 lg:ps-4 dark:text-color-05">
                    <span className="text-color-06 dark:text-color-05">
                        Due{' '}
                    </span>
                    {format(new Date(invoice.payment_due), 'dd MMM yyyy')}
                </p>

                {/* Name */}
                <p className="col-start-2 row-start-1 justify-self-end text-base-variant text-[#858BB2] md:justify-self-auto md:ps-2 lg:ps-4 dark:text-white">
                    {invoice.client_name}
                </p>

                {/* Total Money */}
                <p className="col-start-1 text-lg md:justify-self-end md:pe-8 lg:pe-6">
                    {total}
                </p>

                <div className="col-start-2 row-start-2 row-end-4 items-center gap-4 justify-self-end md:flex">
                    {/* Status */}
                    <div
                        className={`${status} flex h-full w-[6.5rem] items-center justify-center gap-2 justify-self-end rounded-lg px-2 py-3 text-lg-variant capitalize`}
                    >
                        <span className="inline h-2 w-2 rounded-full"></span>
                        {invoice.status}
                    </div>

                    {/* Arrow Icon */}
                    <img
                        className="hidden md:flex"
                        src="/images/icon-arrow-right.svg"
                    />
                </div>
            </div>
        </Link>
    );
}
