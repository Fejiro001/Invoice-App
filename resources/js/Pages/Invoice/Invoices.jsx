import SingleInvoice from '@/Components/SingleInvoice';
export default function Invoices({ invoices }) {
    return (
        <div className="md:mt-6">
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
