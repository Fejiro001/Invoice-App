import HomeHeader from '@/Components/HomeHeader';
import NoInvoices from '@/Components/NoInvoices';
import Paginator from '@/Components/Paginator';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useMediaQuery } from 'react-responsive';
import Invoices from './Invoices';

export default function Index({ invoice }) {
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return (
        <AuthenticatedLayout
            header={<HomeHeader invoice={invoice} isMobile={isMobile} />}
        >
            <Head title="Home" />

            {invoice.length === 0 ? (
                <NoInvoices isMobile={isMobile} />
            ) : (
                <Invoices invoices={invoice.data} key={invoice.invoice_id} />
            )}

            <Paginator
                currentPage={invoice.current_page}
                lastPage={invoice.last_page}
                prevPageUrl={invoice.prev_page_url}
                nextPageUrl={invoice.next_page_url}
            />
        </AuthenticatedLayout>
    );
}
