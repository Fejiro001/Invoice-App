import HomeHeader from '@/Components/HomeHeader';
import Paginator from '@/Components/Paginator';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ModalWrapper from '@/Layouts/ModalWrapper';
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

            {showCreateInvoice && (
                <ModalWrapper>
                    <Create setShowCreateInvoice={setShowCreateInvoice} />
                </ModalWrapper>
            )}
        </AuthenticatedLayout>
    );
}
