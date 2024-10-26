export default function NoInvoices({ isMobile }) {
    return (
        <div className="flex flex-col items-center justify-center gap-12 pt-16 text-center md:h-full md:gap-14 md:pt-0">
            <img
                className="w-48 md:w-56"
                src="/images/illustration-empty.svg"
            />
            <div className="space-y-6">
                <h1 className="text-xl text-color-08">There is nothing here</h1>
                <p className="w-48 text-base-variant text-color-06">
                    {isMobile
                        ? 'Create an invoice by clicking the New button and get started'
                        : 'Create a new invoice by clicking the New Invoice button and get started'}
                </p>
            </div>
        </div>
    );
}
