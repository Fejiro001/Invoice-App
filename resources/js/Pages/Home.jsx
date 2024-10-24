import HomeHeader from '@/Components/HomeHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Invoices from './Invoices';

export default function Home() {
    return (
        <AuthenticatedLayout header={<HomeHeader />}>
            <Head title="Home" />

            <div>
                <Invoices />
            </div>
        </AuthenticatedLayout>
    );
}
