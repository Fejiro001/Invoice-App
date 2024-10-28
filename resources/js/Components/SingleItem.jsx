import FormatCurrency from './FormatCurrency';

export default function SingleItem({ item }) {
    return (
        <div>
            <li
                className="flex items-center justify-between text-lg-variant"
                key={item.id}
            >
                <div className="space-y-2">
                    <h4 className="capitalize text-color-08 dark:text-white">
                        {item.name}
                    </h4>
                    <p className="text-color-07 dark:text-color-06">
                        {item.quantity} x{' '}
                        {<FormatCurrency money={item.price} />}
                    </p>
                </div>
                <p className="text-color-08 dark:text-white">
                    {<FormatCurrency money={item.total} />}
                </p>
            </li>
        </div>
    );
}
