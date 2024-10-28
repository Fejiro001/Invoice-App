export default function InvoiceStatus({ invoice }) {
    const statusClasses = {
        paid: 'bg-paid/10 *:bg-paid text-paid',
        pending: 'bg-pending/10 *:bg-pending text-pending',
    };
    // Default to draft if the status is not 'paid' or 'pending'
    const status =
        statusClasses[invoice.status] ||
        'bg-draft/10 *:bg-draft text-draft dark:bg-draft/30 dark:*:bg-color-05 dark:text-color-05';

    return (
        <div
            className={`${status} flex h-full w-[6.5rem] items-center justify-center gap-2 justify-self-end rounded-lg px-2 py-3 text-lg-variant capitalize`}
        >
            <span className="inline h-2 w-2 rounded-full"></span>
            {invoice.status}
        </div>
    );
}
