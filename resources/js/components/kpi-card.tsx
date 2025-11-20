import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export interface KPIProps {
    title: string;
    value: string | number;
    icon: any;
    progress?: number;
}

export const KPICard = ({
    title,
    value,
    icon: Icon,
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

                {progress !== undefined && (
                    <div className="mt-3">
                        <Progress value={progress} className="h-2" />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}