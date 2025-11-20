import { TrendingUp, Users } from "lucide-react";
import { KPICard } from "../kpi-card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardKPI() {

    const [kpiData, setKpiData] = useState({
        totalUsers: 0,
        totalRoutes: 0,
    });

    useEffect(() => {
        axios.get('/api/admin/kpi')
            .then(res => {
                setKpiData({
                    totalUsers: res.data.totalCommuters,
                    totalRoutes: res.data.totalRoutes
                });
            })
            .catch(err => console.error(err));
    }, []);

    const userGoal = 2000;
    const routeGoal = 50;

    const progressUsers = Math.round((kpiData.totalUsers / userGoal) * 100);
    const progressRoutes = Math.round((kpiData.totalRoutes / routeGoal) * 100);

    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <KPICard
                title="Total Users"
                value={kpiData.totalUsers}
                icon={Users}
                progress={progressUsers}
            />

            <KPICard
                title="Total Routes"
                value={kpiData.totalRoutes}
                icon={TrendingUp}
                progress={progressRoutes}
            />
        </div>
    )
}