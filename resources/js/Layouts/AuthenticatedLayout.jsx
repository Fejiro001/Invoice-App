import NavBar from '@/Components/NavBar';

export default function AuthenticatedLayout({ header, children }) {
    // const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-color-11 dark:bg-color-12">
            <NavBar />

            {header && (
                <header>
                    <div className="mx-auto max-w-7xl px-6 py-8 pt-[6.7rem] sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
