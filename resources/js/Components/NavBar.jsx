import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
    return (
        <nav className="main-nav">
            <div className="max-w-7xl lg:h-full lg:w-[6.5rem]">
                <div className="flex h-fit justify-between md:h-20 lg:block">
                    <Link href="/">
                        <div className="flex items-center bg-custom-bg bg-contain bg-no-repeat p-4 md:p-5 lg:p-8">
                            <ApplicationLogo className="block h-10 w-auto fill-current text-white" />
                        </div>
                    </Link>

                    <div className="flex items-center justify-evenly gap-6 pe-6 lg:absolute lg:bottom-0 lg:w-full lg:flex-col lg:pb-4 lg:pe-0">
                        <DarkModeToggle />
                        <div className="h-full w-[1px] bg-[#494E6E] lg:h-[1px] lg:w-full"></div>
                        <Link href="/profile">
                            <div className="md:px-2">
                                <img
                                    className="h-8 w-8 rounded-full lg:h-10 lg:w-10"
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
