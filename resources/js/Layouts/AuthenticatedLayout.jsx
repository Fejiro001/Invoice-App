import NavBar from '@/Components/NavBar';

export default function AuthenticatedLayout({ header, children }) {
    // const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-color-11 dark:bg-color-12">
            <NavBar />
            <div className="w-full max-w-[48.5rem] px-6 2xl:max-w-[60rem]">
                {header && (
                    <header>
                        <div className="mx-auto w-full px-6 pb-8 pt-[6.7rem] md:px-0 md:pb-14 md:pt-36 lg:pt-20">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
