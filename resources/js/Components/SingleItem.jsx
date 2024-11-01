import FormatCurrency from './FormatCurrency';

export default function SingleItem({ item }) {
    return (
        <>
            <li
                className="flex items-center justify-between text-lg-variant md:grid md:grid-cols-4"
                key={item.id}
            >
                {/* Item Name */}
                <div className="space-y-2">
                    <p className="capitalize text-color-08 dark:text-white">
                        {item.name}
                    </p>
                    <p className="text-color-07 md:hidden dark:text-color-06">
                        {item.quantity} x{' '}
                        {<FormatCurrency money={item.price} />}
                    </p>
                </div>

                {/* Quantity - visible only on tablet and larger screens */}
                <div className="hidden pe-2 text-right text-color-07 md:block dark:text-color-05">
                    {item.quantity}
                </div>

                {/* Price - visible only on tablet and larger screens */}
                <div className="hidden text-right text-color-07 md:block dark:text-color-05">
                    <FormatCurrency money={item.price} />
                </div>

                <div className="text-color-08 md:text-right dark:text-white">
                    {<FormatCurrency money={item.total} />}
                </div>
            </li>
        </>
    );
}
