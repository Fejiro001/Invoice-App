export default function NoInvoices({ isMobile }) {
    return (
        <div className="flex grow flex-col items-center justify-center gap-12 text-center md:gap-14">
            <img
                className="w-48 md:w-56"
                src="/images/illustration-empty.svg"
            />
            <div className="space-y-6 px-8 text-center md:px-56">
                <h1 className="text-xl text-color-08 dark:text-white">
                    There is nothing here
                </h1>
                <p className="px-2 text-base-variant text-color-06 dark:text-color-05">
                    {isMobile
                        ? 'Create an invoice by clicking the New button and get started'
                        : 'Create a new invoice by clicking the New Invoice button and get started'}
                </p>
            </div>
        </div>
    );
}
