import SingleInvoice from '@/Components/SingleInvoice';
export default function Invoices({ data }) {
    return (
        <>
            <ol className="space-y-4 pb-16">
                {data.map((element) => {
                    return <SingleInvoice key={element.id} element={element} />;
                })}
            </ol>
        </>
    );
}
