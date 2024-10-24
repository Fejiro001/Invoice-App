import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-navbar-bg dark:bg-color-03">
            <div className="max-w-7xl pe-6 sm:pe-6 lg:pe-8">
                <div className="flex h-fit justify-between">
                    <div className="flex items-center bg-custom-bg bg-contain bg-no-repeat p-4">
                        <Link href="/">
                            <ApplicationLogo className="block h-10 w-auto fill-current text-white" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-evenly gap-6">
                        <DarkModeToggle />
                        <div className="h-full w-[1px] bg-[#494E6E]"></div>
                        <Link href="/profile">
                            <div>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="/images/image-avatar.jpg"
                                    alt="logged in users profile image"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
