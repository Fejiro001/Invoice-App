import HomeHeader from '@/Components/HomeHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Invoices from '../Components/Invoices';

export default function Home() {
    return (
        <AuthenticatedLayout header={<HomeHeader />}>
            <Head title="Home" />

            <div className="py-4">
                <Invoices />
            </div>
        </AuthenticatedLayout>
    );
}
