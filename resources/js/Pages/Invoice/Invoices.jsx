import SingleInvoice from '@/Components/SingleInvoice';
export default function Invoices({ invoices }) {
    return (
        <div className="px-6 md:mt-6 md:px-12 lg:px-6">
            <ol className="flex flex-col gap-4 pb-16">
                {invoices.map((invoice) => {
                    return (
                        <SingleInvoice
                            key={invoice.invoice_id}
                            invoice={invoice}
                        />
                    );
                })}
            </ol>
        </div>
    );
}
