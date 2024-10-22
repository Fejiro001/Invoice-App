import NavBar from '@/Components/NavBar';

export default function AuthenticatedLayout({ header, children }) {
    // const user = usePage().props.auth.user;

    return (
        <div className="bg-color-11 min-h-screen">
            <NavBar />

            {header && (
                <header>
                    <div className="mx-auto max-w-7xl px-6 py-8 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
