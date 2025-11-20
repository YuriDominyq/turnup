import DashboardHeader from '@/components/admin/dashboard-header';
import TabAnalytics from '@/components/admin/tab-analytics';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className='flex h-full flex-1 flex-col gap-8 rounded-xl p-4 lg:p-8 overflow-x-auto min-h-screen'>

                {/* Header Section */}
                <DashboardHeader />

                <TabAnalytics />

                <div className='fixed inset-0 pointer-events-none z-0'>
                    <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse'></div>
                    <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000'></div>j
                </div>
            </div>
        </AppLayout>
    );
}