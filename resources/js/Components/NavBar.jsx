import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function NavBar() {
    return (
        <nav className="bg-navbar-bg">
            <div className="max-w-7xl pe-6 sm:pe-6 lg:pe-8">
                <div className="flex h-fit justify-between">
                    <div className="flex items-center bg-custom-bg bg-contain bg-no-repeat p-4">
                        <Link href="/">
                            <ApplicationLogo className="block h-10 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-evenly gap-6">
                        <button>
                            <img src="/images/icon-moon.svg" />
                        </button>
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
