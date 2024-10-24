import currency from 'currency.js';
import { format } from 'date-fns';

export default function SingleInvoice({ element }) {
    const totalMoney = currency(element.total, {
        symbol: '£ ',
        precision: 2,
    }).format();

    const statusClasses = {
        paid: 'bg-paid/10 *:bg-paid text-paid',
        pending: 'bg-pending/10 *:bg-pending text-pending',
    };
    // Default to draft if the status is not 'paid' or 'pending'
    const status =
        statusClasses[element.status] ||
        'bg-draft/10 *:bg-draft text-draft dark:bg-draft/30 dark:*:bg-color-05 dark:text-color-05';

    return (
        <>
            <div className="mx-6 grid grid-cols-2 content-between rounded-lg bg-white p-6 text-color-08 md:grid-cols-5 md:items-center dark:bg-color-03 dark:text-white">
                <p className="pb-6 text-lg-variant md:p-0">
                    <span className="text-color-07">#</span>
                    {element.id}
                </p>
                <p className="justify-self-end text-base-variant text-[#858BB2] md:justify-self-auto dark:text-white">
                    {element.clientName}
                </p>
                <p className="pb-2 text-base-variant text-color-07 md:p-0 dark:text-color-05">
                    <span className="text-color-06 dark:text-color-05">
                        Due{' '}
                    </span>
                    {format(new Date(element.paymentDue), 'dd MMM yyyy')}
                </p>
                <p className="col-start-1 text-lg md:col-auto">{totalMoney}</p>
                <div className="items-center gap-2 justify-self-end md:flex">
                    <div
                        className={`${status} col-start-2 row-start-2 row-end-4 flex h-fit w-[6.5rem] items-baseline justify-center gap-2 justify-self-end rounded-lg px-2 py-3 text-lg-variant capitalize md:col-auto md:row-auto`}
                    >
                        <span className="inline h-2 w-2 rounded-full"></span>
                        {element.status}
                    </div>
                    <img
                        className="hidden md:flex"
                        src="/images/icon-arrow-right.svg"
                    />
                </div>
            </div>
        </>
    );
}
