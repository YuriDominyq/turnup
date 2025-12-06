import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { Loader2, Zap } from "lucide-react";

interface Status {
    name: string;
    value: number;
    color: string;
}

interface DriverStatusDistributionProps {
    data: Status[];
}

export default function DriverStatusDistribution({ data }: DriverStatusDistributionProps) {
    const [statusData, setStatusData] = useState<Status[]>(data);
    const [aiSummary, setAiSummary] = useState('Loading AI insights...');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('/api/analytics/driver-status');
                const data = await res.json();

                setStatusData(Array.isArray(data.data) ? data.data : []);
                setAiSummary(data.ai_summary || 'No AI insights available.');
            } catch (err) {
                console.error('Failed to fetch driver status:', err);
                setError('Failed to load driver status.');
                setAiSummary('Failed to load AI insights.');
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Driver Status</CardTitle>
                <CardDescription>Current distribution of driver availability</CardDescription>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Loading...</p>
                ) : error ? (
                    <p className="text-sm text-red-500 mb-4">{error}</p>
                ) : statusData.length === 0 ? (
                    <p className="text-sm text-gray-500 mb-4">No driver data available.</p>
                ) : (
                    <>
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
                            {statusData.map((status, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center">
                                        <div
                                            className="w-3 h-3 rounded-full mr-2"
                                            style={{ backgroundColor: status.color }}
                                        ></div>
                                        {status.name}
                                    </div>
                                    <span className="font-medium">{status.value}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}


                {/* AI Insights */}
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        <Zap className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        AI Insights
                    </h3>
                    {loading ? (
                        <Loader2 className="h-6 w-6 animate-spin text-blue-600 dark:text-blue-400" />
                    ) : (
                        <p className={`text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line`}>
                            {aiSummary}
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
