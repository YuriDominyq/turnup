import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import KeyMetrics from '@/components/key-metrics';
import DashboardHeader from '@/components/dashboard-header';
import WeeklyPerformanceChart from '@/components/weekly-performance-chart';
import DriverStatusDistribution from '@/components/driver-status-distribution';
import TopDrivers from '@/components/top-drivers';
import { Driver } from '@/types/driver';
import { useEffect, useState } from 'react';
import axios from 'axios';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Mock data for demonstration
const weeklyData = [
    { day: 'Mon', activeDrivers: 45, checkIns: 89 },
    { day: 'Tue', activeDrivers: 52, checkIns: 102 },
    { day: 'Wed', activeDrivers: 48, checkIns: 95 },
    { day: 'Thu', activeDrivers: 56, checkIns: 118 },
    { day: 'Fri', activeDrivers: 61, checkIns: 134 },
    { day: 'Sat', activeDrivers: 58, checkIns: 142 },
    { day: 'Sun', activeDrivers: 47, checkIns: 98 },
];

const driverStatusData = [
    { name: 'On Duty', value: 47, color: '#10b981' },
    { name: 'En Route', value: 32, color: '#3b82f6' },
    { name: 'Available', value: 15, color: '#8b5cf6' },
    { name: 'Off Duty', value: 23, color: '#6b7280' },
];

export default function Dashboard() {
    const [topDrivers, setTopDrivers] = useState<Driver[]>([]);

    useEffect(() => {
        axios.get("/api/analytics/top-drivers")
            .then(res => setTopDrivers(res.data))
            .catch(err => console.error("Failed to fetch top drivers:", err));
    }, [])

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

                <TopDrivers drivers={topDrivers} />
            </div>
        </AppLayout>
    );
}