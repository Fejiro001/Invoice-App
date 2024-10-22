import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-color-11 text-black/50 dark:bg-color-12 dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-color-01 selection:text-white">
                    <div className="relative min-h-screen w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10">
                            <div className="flex justify-start">
                                <Link href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="26"
                                    >
                                        <path
                                            fill="#7C5DFA"
                                            fillRule="evenodd"
                                            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('home')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Home
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="m-6 flex flex-col items-center gap-8 pt-16 text-center text-white md:pt-24">
                            <h1 className="text-5xl font-bold">
                                The Best Invoice App for You
                            </h1>
                            <p className="text-3xl font-medium">
                                Manage your invoices effortlessly with our
                                user-friendly platform.
                            </p>

                            <div className="flex flex-col gap-8 *:rounded-3xl *:px-10 *:py-2 *:text-center *:text-[1.2rem] *:font-bold md:flex-row">
                                <Link
                                    href={route('login')}
                                    className="bg-white text-color-01"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-color-01 text-white"
                                >
                                    Register
                                </Link>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
