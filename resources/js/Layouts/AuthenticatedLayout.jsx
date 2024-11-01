import NavBar from '@/Components/NavBar';

export default function AuthenticatedLayout({ header, children }) {
    // const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen flex-col items-center bg-color-11 dark:bg-color-12">
            <NavBar />
            <div className="flex min-h-screen w-full max-w-[48.5rem] flex-col px-6 md:px-12 lg:px-6">
                {header && (
                    <header>
                        <div className="mx-auto w-full pb-8 pt-[6.7rem] md:px-0 md:pt-36 lg:pt-20">
                            {header}
                        </div>
                    </header>
                )}

                <main className="flex grow flex-col">{children}</main>
            </div>
        </div>
    );
}
