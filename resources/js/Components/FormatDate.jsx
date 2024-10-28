import { format } from 'date-fns';

export default function FormatDate({ date }) {
    return <>{format(new Date(date), 'dd MMM yyyy')}</>;
}
