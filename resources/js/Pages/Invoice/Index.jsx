import HomeHeader from '@/Components/HomeHeader';
import Paginator from '@/Components/Paginator';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NoInvoices from '@/Pages/Invoice/NoInvoices';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Create from './Create';
import Invoices from './Invoices';

export default function Index({ invoice, totalInvoice }) {
    const [showCreateInvoice, setShowCreateInvoice] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return (
        <AuthenticatedLayout
            header={
                <HomeHeader
                    totalInvoice={totalInvoice}
                    invoice={invoice}
                    isMobile={isMobile}
                    setShowCreateInvoice={setShowCreateInvoice}
                />
            }
        >
            <Head title="Home" />

            {invoice.data.length === 0 ? (
                <NoInvoices isMobile={isMobile} />
            ) : (
                <Invoices invoices={invoice.data} key={invoice.invoice_id} />
            )}

            {showCreateInvoice && (
                <div className="left-20 top-0 w-full md:fixed">
                    <div
                        className={`${isMobile ? 'h-full' : 'h-4/5 max-w-3xl'} relative w-full max-w-2xl shadow-lg`}
                    >
                        <div className="max-h-screen overflow-y-auto">
                            <Create
                                setShowCreateInvoice={setShowCreateInvoice}
                            />
                        </div>
                    </div>
                </div>
            )}

            {invoice.data.length < 8 && invoice.current_page === 1 ? (
                <></>
            ) : (
                <Paginator
                    currentPage={invoice.current_page}
                    lastPage={invoice.last_page}
                    prevPageUrl={invoice.prev_page_url}
                    nextPageUrl={invoice.next_page_url}
                />
            )}
        </AuthenticatedLayout>
    );
}
