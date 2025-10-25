import { Car, Clock, TrendingUp, Users } from "lucide-react";
import { KPICard, kpiData } from "../kpi-card";

export default function DashboardKPI() {
    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <KPICard
                title="Total Users"
                value={kpiData.totalUsers}
                icon={Users}
                trend="up"
                trendValue="+12%"
                progress={75}
            />

            <KPICard
                title="Total Drivers"
                value={kpiData.totalDrivers}
                icon={Car}
                trend="up"
                trendValue="+8%"
                progress={80}
            />

            <KPICard
                title="Active Terminals"
                value={kpiData.activeTerminals}
                icon={TrendingUp}
                trend="up"
                trendValue="+2%"
                progress={85}
            />

            <KPICard
                title="Avg Response Time"
                value={`${kpiData.avgResponseTime}s`}
                icon={Clock}
                trend="down"
                trendValue="-15%"
                progress={95}
            />
        </div>
    )
}