import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-color-11 pt-6 sm:justify-center sm:pt-0 dark:bg-color-12">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-color-01 text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
