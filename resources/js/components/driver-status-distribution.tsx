import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Status {
    name: string;
    value: number;
    color: string;
}

interface StatusProps {
    data: Status[]
}

export default function DriverStatusDistribution({ data }: StatusProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Driver Status</CardTitle>
                <CardDescription>Current distribution of driver availability</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                    {data.map((status, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: status.color }}></div>
                                {status.name}
                            </div>
                            <span className="font-medium">{status.value}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}