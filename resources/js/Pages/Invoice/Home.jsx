import HomeHeader from '@/Components/HomeHeader';
import NoInvoices from '@/Components/NoInvoices';
import Paginator from '@/Components/Paginator';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useMediaQuery } from 'react-responsive';
import Invoices from './Invoices';

export default function Home({ invoices }) {
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return (
        <AuthenticatedLayout
            header={<HomeHeader invoices={invoices} isMobile={isMobile} />}
        >
            <Head title="Home" />

            {invoices.length === 0 ? (
                <NoInvoices isMobile={isMobile} />
            ) : (
                <Invoices invoices={invoices.data} key={invoices.invoice_id} />
            )}

            <Paginator
                currentPage={invoices.current_page}
                lastPage={invoices.last_page}
                prevPageUrl={invoices.prev_page_url}
                nextPageUrl={invoices.next_page_url}
            />
        </AuthenticatedLayout>
    );
}
