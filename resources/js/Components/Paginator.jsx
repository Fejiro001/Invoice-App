import { Link } from '@inertiajs/react';

export default function Paginator({
    currentPage,
    lastPage,
    prevPageUrl,
    nextPageUrl,
}) {
    return (
        <nav
            role="navigation"
            aria-label="pagination navigation"
            className="mb-4 flex items-center justify-between"
        >
            <div className="flex flex-1 items-center justify-between">
                {prevPageUrl ? (
                    <Link href={prevPageUrl} className="active-page mr-2">
                        Previous
                    </Link>
                ) : (
                    <span className="inactive-page mr-2">Previous</span>
                )}

                <span className="text-color-08 dark:text-white">
                    Page {currentPage} of {lastPage}
                </span>

                {nextPageUrl ? (
                    <Link href={nextPageUrl} className="active-page ml-2">
                        Next
                    </Link>
                ) : (
                    <span className="inactive-page ml-2">Next</span>
                )}
            </div>
        </nav>
    );
}
