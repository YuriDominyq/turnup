import { Car, Clock, Navigation, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { JSX } from "react";

interface Metric {
    title: string;
    value: string | number;
    progress: number;
    icon: JSX.Element
    trend: 'up' | 'down';
    trendValue: string
}

const metrics: Metric[] = [
    { title: 'Active Drivers', value: 47, progress: 78, icon: <Car className="h-4 w-4 text-muted-foreground" />, trend: 'up', trendValue: '+12% from yesterday' },
    { title: 'Completed Trips', value: 134, progress: 89, icon: <Navigation className="h-4 w-4 text-muted-foreground" />, trend: 'up', trendValue: '+8% from yesterday' },
    { title: 'Average Response', value: '4.2min', progress: 65, icon: <Clock className="h-4 w-4 text-muted-foreground" />, trend: 'down', trendValue: '-15% faster today' },
];


export default function KeyMetrics() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        {metric.icon}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            {metric.trend === 'up' ? <TrendingUp className="h-3 w-3 text-green-500 mr-1" /> : <TrendingDown className="h-3 w-3 text-green-500 mr-1" />}
                            {metric.trendValue}
                        </div>
                        <Progress value={metric.progress} className="mt-2" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}