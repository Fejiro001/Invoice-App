import NavBar from '@/Components/NavBar';

export default function AuthenticatedLayout({ header, children }) {
    // const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-color-11 dark:bg-color-12">
            <NavBar />
            <div className="w-full max-w-4xl">
                {header && (
                    <header>
                        <div className="mx-auto w-full px-6 py-8 pt-[6.7rem] sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
