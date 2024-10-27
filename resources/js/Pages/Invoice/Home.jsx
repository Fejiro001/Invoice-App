import HomeHeader from '@/Components/HomeHeader';
import NoInvoices from '@/Components/NoInvoices';
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
                <Invoices invoices={invoices} key={invoices.invoice_id} />
            )}
        </AuthenticatedLayout>
    );
}
