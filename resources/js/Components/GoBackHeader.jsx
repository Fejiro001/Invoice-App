import { Link } from '@inertiajs/react';

export default function GoBackHeader() {
    return (
        <Link
            href={route('home')}
            className="flex items-baseline gap-6 *:hover:text-color-06"
        >
            <img src="/images/icon-arrow-left.svg" />
            <span className="dark:text-white">Go Back</span>
        </Link>
    );
}