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

                const [topDriversRes, driversPerRouteRes, driverStatusRes] = await Promise.all([
                    axios.get("/api/analytics/top-drivers"),
                    axios.get("/api/analytics/drivers-per-route"),
                    axios.get("/api/analytics/driver-status"),
                ]);

                setData({
                    topDrivers: topDriversRes.data.data ?? topDriversRes.data ?? [],
                    driversPerRoute: driversPerRouteRes.data.data ?? driversPerRouteRes.data ?? [],
                    driverStatus: driverStatusRes.data.data ?? [],
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
            <div className="flex h-full flex-1 flex-col gap-6 p-6 overflow-x-auto">
                {/* Header */}
                <div className="bg-card rounded-xl shadow-sm border p-6">
                    <DashboardHeader />
                </div>

                {/* Error Alert */}
                {error && (
                    <Alert variant="destructive" className="animate-in fade-in-0 slide-in-from-top-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="font-medium">{error}</AlertDescription>
                    </Alert>
                )}

                {/* Charts Section - Full width stacked */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Drivers Per Route */}
                    <div className="bg-card rounded-xl border p-6">
                        <h3 className="text-lg font-semibold mb-2">Drivers Per Route</h3>
                        <p className="text-sm text-muted-foreground mb-4">Distribution across all routes</p>
                        <div className="overflow-x-auto">
                            <DriversPerRouteChart data={data.driversPerRoute || []} />
                        </div>
                    </div>

                    {/* Driver Status */}
                    <div className="bg-card rounded-xl border p-6">
                        <h3 className="text-lg font-semibold mb-2">Driver Status</h3>
                        <p className="text-sm text-muted-foreground mb-4">Current availability</p>
                        <DriverStatusDistribution data={data.driverStatus || []} />
                    </div>
                </div>

                {/* Top Drivers Section */}
                <div className="grid grid-cols-1 gap-6">
                    {loading ? (
                        <div className="flex items-center justify-center h-64 bg-card rounded-xl shadow-sm border">
                            <div className="text-center">
                                <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-3" />
                                <p className="text-sm font-medium">Loading top drivers...</p>
                                <p className="text-xs text-muted-foreground mt-1">This won't take long</p>
                            </div>
                        </div>
                    ) : data.topDrivers.length === 0 ? (
                        <div className="flex items-center justify-center h-64 bg-card rounded-xl shadow-sm border">
                            <div className="text-center">
                                <div className="bg-muted rounded-full p-4 inline-block mb-3">
                                    <AlertCircle className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <p className="text-sm font-medium">No driver data available</p>
                                <p className="text-xs text-muted-foreground mt-1">Check back later for updates</p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-card rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-lg font-semibold mb-2">Top Performing Drivers</h3>
                            <p className="text-sm text-muted-foreground mb-4">Highest rated drivers this period</p>
                            <TopDrivers drivers={data.topDrivers} />
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
