import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export interface KPIProps {
    title: string;
    value: string | number;
    icon: any;
    trend?: 'up' | 'down';
    trendValue?: string;
    progress?: number;
}

export const kpiData = {
    totalUsers: 1234,
    totalDrivers: 567,
    activeTerminals: 15,
    avgResponseTime: 2.4
};

export const KPICard = ({
    title,
    value,
    icon: Icon,
    trend,
    trendValue,
    progress,
}: KPIProps) => {
    return (

        <Card className="rounded-2xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                {trend && trendValue && (
                    <p className="text-xs mt-1">
                        <span className={`inline-flex items-center ${trend === 'up' ? 'text-gray-600' : 'text-red=600'
                            }`}>
                            <TrendingUp
                                className={`h-3 w-3 mr-1 ${trend === 'down' ? 'rotate-180' : ''}`}
                            />
                            {trendValue}
                        </span>
                        {' '}from last month
                    </p>
                )}

                {progress !== undefined && (
                    <div className="mt-3">
                        <Progress value={progress} className="h-2" />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}