import { Link } from '@inertiajs/react';
import FormatCurrency from './FormatCurrency';
import FormatDate from './FormatDate';
import InvoiceStatus from './InvoiceStatus';

export default function SingleInvoice({ invoice }) {
    return (
        <Link href={route('invoice.show', invoice)}>
            <div className="invoice-card md:*:col-auto md:*:row-auto">
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
                    <FormatDate date={invoice.payment_due} />
                </p>

                {/* Name */}
                <p className="col-start-2 row-start-1 justify-self-end text-base-variant text-[#858BB2] md:justify-self-auto md:ps-2 lg:ps-4 dark:text-white">
                    {invoice.client_name}
                </p>

                {/* Total Money */}
                <p className="col-start-1 text-lg md:justify-self-end md:pe-8 lg:pe-6">
                    {<FormatCurrency money={invoice.total} />}
                </p>

                <div className="col-start-2 row-start-2 row-end-4 items-center gap-4 justify-self-end md:flex">
                    {/* Status */}
                    <InvoiceStatus invoice={invoice} />

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
