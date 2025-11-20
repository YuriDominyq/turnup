import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import DashboardHeader from '@/components/dashboard-header';
import DriverStatusDistribution from '@/components/driver-status-distribution';
import TopDrivers from '@/components/top-drivers';
import { Driver } from '@/types/driver';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import DriversPerRouteChart from '@/components/driver-per-route-chart';
import { Status } from '@/types/status';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Mock data for demonstration (fallback)

interface DashboardData {
    topDrivers: Driver[];
    driversPerRoute: { route_name: string; driverCount: number }[];
    driverStatus: Status[];
}

export default function Dashboard() {
    const [data, setData] = useState<DashboardData>({
        topDrivers: [],
        driversPerRoute: [],
        driverStatus: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch all dashboard data in parallel
                const [topDriversRes, driversPerRouteRes, driverStatusRes] = await Promise.all([
                    axios.get("/api/analytics/top-drivers"),
                    axios.get("/api/analytics/drivers-per-route"),
                    axios.get("/api/analytics/driver-status"),
                ]);

                setData({
                    topDrivers: topDriversRes.data,
                    driversPerRoute: driversPerRouteRes.data,
                    driverStatus: driverStatusRes.data,
                });
            } catch (err) {
                console.error("Failed to fetch dashboard data:", err);
                setError("Failed to load dashboard data. Please try refreshing the page.");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <DashboardHeader />

                {/* Error Alert */}
                {error && (
                    <Alert variant="destructive" className="animate-in fade-in-0 slide-in-from-top-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Charts and Analytics */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Weekly Performance - spans 2 columns on xl screens */}
                    <div className="xl:col-span-2">
                        <DriversPerRouteChart data={data.driversPerRoute} />
                    </div>

                    {/* Driver Status Distribution */}
                    <div className="xl:col-span-1">
                        <DriverStatusDistribution data={data.driverStatus} />
                    </div>
                </div>

                {/* Top Drivers Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 xl:col-span-2">
                        {loading ? (
                            <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-sm">
                                <div className="text-center">
                                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500">Loading top drivers...</p>
                                </div>
                            </div>
                        ) : data.topDrivers.length === 0 ? (
                            <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-sm">
                                <div className="text-center">
                                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500">No driver data available</p>
                                </div>
                            </div>
                        ) : (
                            <TopDrivers drivers={data.topDrivers} />
                        )}
                    </div>

                    {/* Space for additional widget */}
                    <div className="hidden xl:block">
                        {/* You can add another component here later */}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}