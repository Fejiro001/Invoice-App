import currency from 'currency.js';

export default function FormatCurrency({ money }) {
    const price = currency(money, {
        symbol: '$ ',
        precision: 2,
    }).format();
    return <span>{price}</span>;
}
