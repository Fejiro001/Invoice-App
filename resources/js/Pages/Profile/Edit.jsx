import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const { post } = useForm('');

    const submit = (e) => {
        e.preventDefault();

        post(route('logout'));
    };
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Profile
                    </h2>
                    <form onSubmit={submit}>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="links bg-color-01 text-white dark:text-color-12"
                        >
                            Log Out
                        </Link>
                    </form>
                </div>
            }
        >
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
