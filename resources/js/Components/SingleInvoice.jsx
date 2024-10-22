export default function SingleInvoice({ element }) {
    return (
        <>
            <div className="m-4 flex flex-col justify-between gap-4 rounded-lg bg-white p-4">
                <div className="flex justify-between">
                    <p className="text-color-08 text-lg-variant">
                        <span className="text-color-07">#</span>
                        {element.id}
                    </p>
                    <p className="text-base-variant text-[#858BB2]">
                        {element.clientName}
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <p>Due {element.paymentDue}</p>
                        <p>{element.total.toFixed(2)}</p>
                    </div>
                    <div>{element.status}</div>
                </div>
            </div>
        </>
    );
}
