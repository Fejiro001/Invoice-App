export default function HomeHeader({ data, isMobile }) {
    return (
        <div className="flex justify-between text-color-08 dark:text-white">
            <div className="flex flex-col justify-between md:gap-2">
                <h1 className="text-xl md:text-2xl">Invoices</h1>
                <p className="text-base-variant text-color-06 dark:text-color-05">
                    {data.length === 0
                        ? 'No Invoices'
                        : isMobile
                          ? '7 invoices'
                          : 'There are 7 total invoices'}
                </p>
            </div>

            <div className="flex gap-5 md:h-fit md:gap-10">
                <button className="flex items-center gap-3">
                    <span className="text-lg-variant">
                        {isMobile ? 'Filter' : 'Filter by status'}
                    </span>
                    <img className="w-3" src="/images/icon-arrow-down.svg" />
                </button>

                <button className="flex items-center gap-2 rounded-full bg-color-01 p-2 md:gap-5">
                    <span className="rounded-full bg-white p-2">
                        <img className="w-[11px]" src="/images/icon-plus.svg" />
                    </span>
                    <span className="pe-2 text-lg-variant text-white">
                        {isMobile ? 'New' : 'New Invoice'}
                    </span>
                </button>
            </div>
        </div>
    );
}
