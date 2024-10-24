export default function HomeHeader() {
    return (
        <div className="flex justify-between text-color-08 dark:text-white">
            <div className="flex flex-col justify-between">
                <h1 className="text-xl">Invoices</h1>
                <p className="text-base-variant text-color-06 dark:text-color-06">
                    7 invoices
                </p>
            </div>
            <div className="flex gap-5">
                <button className="flex items-center gap-3">
                    <span className="text-lg-variant">Filter</span>
                    <img className="w-3" src="/images/icon-arrow-down.svg" />
                </button>
                <button className="flex items-center gap-2 rounded-full bg-color-01 p-2">
                    <span className="rounded-full bg-white p-2">
                        <img className="w-[11px]" src="/images/icon-plus.svg" />
                    </span>
                    <span className="pe-2 text-lg-variant text-white">New</span>
                </button>
            </div>
        </div>
    );
}
