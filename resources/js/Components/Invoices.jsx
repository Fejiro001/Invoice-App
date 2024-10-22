import SingleInvoice from './SingleInvoice';
import data from '/data.json';
export default function Invoices() {
    return (
        <>
            <ol>
                {data.map((element) => {
                    return <SingleInvoice key={element.id} element={element} />;
                })}
            </ol>
        </>
    );
}
