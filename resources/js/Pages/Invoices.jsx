import SingleInvoice from '@/Components/SingleInvoice';
import data from '/data.json';
export default function Invoices() {
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
