import SingleInvoice from '@/Components/SingleInvoice';
export default function Invoices({ invoices }) {
    return (
        <>
            <ol className="space-y-4 pb-16">
                {invoices.map((invoices) => {
                    return (
                        <SingleInvoice
                            key={invoices.invoice_id}
                            invoices={invoices}
                        />
                    );
                })}
            </ol>
        </>
    );
}
