import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { Activity, Sparkles, TrendingUp } from "lucide-react";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

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
    const [isLoadingAI, setIsLoadingAI] = useState(true);

    useEffect(() => {
        fetch('/api/analytics/driver-status')
            .then(res => res.json())
            .then(data => {
                setStatusData(data.data || []);
                setAiSummary(data.ai_summary || 'No AI insights available.');
                setIsLoadingAI(false);
            })
            .catch(() => {
                setAiSummary('Failed to load AI insights.');
                setIsLoadingAI(false);
            });
    }, []);

    const totalDrivers = data.reduce((sum, status) => sum + status.value, 0);
    const maxStatus = data.length > 0
        ? data.reduce((max, status) => status.value > max.value ? status : max, data[0])
        : null;

    const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
        if (active && payload && payload.length) {
            const percentage = totalDrivers > 0 ? ((payload[0].value as number) / totalDrivers * 100).toFixed(1) : 0;
            return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: payload[0].payload.color }}
                        ></div>
                        <p className="font-bold text-gray-900 dark:text-gray-100">
                            {payload[0].name}
                        </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-bold text-lg">{payload[0].value}</span> drivers
                        <span className="text-xs ml-2">({percentage}%)</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
                        <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                            Driver Status
                        </CardTitle>
                        <CardDescription className="text-sm mt-0.5">
                            Real-time availability distribution
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Pie Chart Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={95}
                                dataKey="value"
                                strokeWidth={3}
                                stroke="rgba(255,255,255,0.8)"
                            >
                                {statusData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        className="hover:opacity-80 transition-opacity cursor-pointer"
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Label */}
                    <div className="relative -mt-40 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {totalDrivers}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                                Total Drivers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Status Legend */}
                <div className="space-y-2">
                    {data.map((status, index) => {
                        const percentage = totalDrivers > 0 ? ((status.value / totalDrivers) * 100).toFixed(1) : 0;
                        const isMax = maxStatus && status.name === maxStatus.name;

                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-xl transition-all ${isMax
                                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-900/50'
                                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-4 h-4 rounded-full shadow-md"
                                        style={{ backgroundColor: status.color }}
                                    ></div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                                            {status.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {percentage}% of total
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {status.value}
                                    </p>
                                    {isMax && (
                                        <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
                                            <TrendingUp className="h-3 w-3" />
                                            Highest
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* AI Insights Section */}
                <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30 border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>

                    <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-2.5 shadow-lg shadow-purple-500/30">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    AI-Powered Insights
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    Smart analysis of driver availability
                                </p>
                            </div>
                        </div>

                        {isLoadingAI ? (
                            <div className="space-y-2">
                                <div className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse"></div>
                                <div className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse w-5/6"></div>
                                <div className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse w-4/6"></div>
                            </div>
                        ) : (
                            <p className={`text-sm leading-relaxed whitespace-pre-line ${aiSummary.startsWith("Failed")
                                ? "text-red-600 dark:text-red-400"
                                : "text-gray-700 dark:text-gray-300"
                                }`}>
                                {aiSummary}
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}