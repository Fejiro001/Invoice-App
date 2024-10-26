import HomeHeader from '@/Components/HomeHeader';
import NoInvoices from '@/Components/NoInvoices';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useMediaQuery } from 'react-responsive';
import Invoices from './Invoices';
import data from '/data.json';

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return (
        <AuthenticatedLayout
            header={<HomeHeader data={data} isMobile={isMobile} />}
        >
            <Head title="Home" />

            {data.length === 0 ? (
                <NoInvoices isMobile={isMobile} />
            ) : (
                <Invoices data={data} />
            )}
        </AuthenticatedLayout>
    );
}
