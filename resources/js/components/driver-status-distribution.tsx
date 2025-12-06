import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";

interface Status {
    name: string;
    value: number;
    color: string;
}

interface StatusProps {
    data: Status[]
}

export default function DriverStatusDistribution({ data }: StatusProps) {

    const [statusData, setStatusData] = useState<Status[]>([]);
    const [aiSummary, setAiSummary] = useState('Loading AI insights...');

    useEffect(() => {
        fetch('/api/analytics/driver-status')
            .then(res => res.json())
            .then(data => {
                setStatusData(data.data || []);
                setAiSummary(data.ai_summary || 'No AI insights available.');
            })
            .catch(() => setAiSummary('Failed to load AI insights.'));
    }, []);
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
                            data={statusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                        >
                            {statusData.map((entry, index) => (
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

                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">🤖 AI Insights</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {aiSummary}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}