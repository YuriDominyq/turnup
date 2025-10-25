import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import KeyMetrics from '@/components/key-metrics';
import DashboardHeader from '@/components/dashboard-header';
import WeeklyPerformanceChart from '@/components/weekly-performance-chart';
import DriverStatusDistribution from '@/components/driver-status-distribution';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Mock data for demonstration
const weeklyData = [
    { day: 'Mon', activeDrivers: 45, completedTrips: 89, revenue: 2450 },
    { day: 'Tue', activeDrivers: 52, completedTrips: 102, revenue: 2890 },
    { day: 'Wed', activeDrivers: 48, completedTrips: 95, revenue: 2650 },
    { day: 'Thu', activeDrivers: 56, completedTrips: 118, revenue: 3200 },
    { day: 'Fri', activeDrivers: 61, completedTrips: 134, revenue: 3750 },
    { day: 'Sat', activeDrivers: 58, completedTrips: 142, revenue: 3890 },
    { day: 'Sun', activeDrivers: 47, completedTrips: 98, revenue: 2980 },
];

const driverStatusData = [
    { name: 'On Duty', value: 47, color: '#10b981' },
    { name: 'En Route', value: 32, color: '#3b82f6' },
    { name: 'Available', value: 15, color: '#8b5cf6' },
    { name: 'Off Duty', value: 23, color: '#6b7280' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">

                {/* Header */}
                <DashboardHeader />

                {/* Key Metrics */}
                <KeyMetrics />

                {/* Charts and Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Weekly Performance */}
                    <WeeklyPerformanceChart data={weeklyData} />

                    {/* Driver Status Distribution */}
                    <DriverStatusDistribution data={driverStatusData} />
                </div>
            </div>
        </AppLayout>
    );
}