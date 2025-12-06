import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, Users, Route, Sparkles, BarChart3 } from "lucide-react";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface DriversPerRouteChartProps {
    data: { route_name: string; driverCount: number }[];
}

export default function DriversPerRouteChart({ data }: DriversPerRouteChartProps) {
    const [aiSummary, setAiSummary] = useState<string>("Loading AI insights...");
    const [isLoadingAI, setIsLoadingAI] = useState(true);

    useEffect(() => {
        fetch("/api/ai/drivers-summary")
            .then(res => res.json())
            .then(data => {
                setAiSummary(data.summary || "No AI insights available.");
                setIsLoadingAI(false);
            })
            .catch(err => {
                console.error(err);
                setAiSummary("Failed to load AI insights.");
                setIsLoadingAI(false);
            });
    }, []);

    const totalDrivers = Array.isArray(data)
        ? data.reduce((sum, item) => sum + item.driverCount, 0)
        : 0;

    const topRoute = Array.isArray(data) && data.length > 0
        ? data.reduce((max, item) => item.driverCount > max.driverCount ? item : max, data[0])
        : null;

    const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 backdrop-blur-sm">
                    <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {payload[0].payload.route_name}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                {payload[0].value}
                            </span> drivers
                        </p>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10"></div>

            <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
                                <Route className="h-5 w-5 text-white" />
                            </div>
                            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                Driver Analytics
                            </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                            AI-powered insights into driver distribution
                        </CardDescription>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-md border border-gray-100 dark:border-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">Total Drivers</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {totalDrivers}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-md border border-gray-100 dark:border-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-0.5">Active Routes</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {data.length}
                            </p>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <Tabs defaultValue="drivers-per-route" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl">
                        <TabsTrigger value="drivers-per-route" className="gap-2 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                            <BarChart3 className="h-4 w-4" />
                            Distribution
                        </TabsTrigger>
                        <TabsTrigger value="insights" className="gap-2 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md">
                            <Sparkles className="h-4 w-4" />
                            AI Insights
                        </TabsTrigger>
                    </TabsList>

                    {/* Bar Chart Tab */}
                    <TabsContent value="drivers-per-route" className="mt-6">
                        {data.length === 0 ? (
                            <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <div className="text-center">
                                    <Route className="h-16 w-16 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">No route data available</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                                <ResponsiveContainer width="100%" height={320}>
                                    <BarChart
                                        data={data}
                                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                                    >
                                        <defs>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.7} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            className="stroke-gray-200 dark:stroke-gray-700"
                                            vertical={false}
                                        />
                                        <XAxis
                                            dataKey="route_name"
                                            className="text-xs text-gray-600 dark:text-gray-400"
                                            tick={{ fill: 'currentColor' }}
                                            axisLine={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                                        />
                                        <YAxis
                                            className="text-xs text-gray-600 dark:text-gray-400"
                                            tick={{ fill: 'currentColor' }}
                                            axisLine={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(16, 185, 129, 0.08)' }} />
                                        <Bar
                                            dataKey="driverCount"
                                            fill="url(#barGradient)"
                                            radius={[12, 12, 0, 0]}
                                            className="hover:opacity-80 transition-opacity"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </TabsContent>

                    {/* Insights Tab */}
                    <TabsContent value="insights" className="mt-6">
                        <div className="space-y-4">
                            {/* AI Insights - Featured at top */}
                            <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30 border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-6 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>

                                <div className="relative">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 shadow-lg shadow-purple-500/30">
                                            <Sparkles className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-1">
                                                AI-Powered Insights
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Intelligent analysis of your driver distribution
                                            </p>
                                        </div>
                                    </div>

                                    {isLoadingAI ? (
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse"></div>
                                            <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse w-5/6"></div>
                                            <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg animate-pulse w-4/6"></div>
                                        </div>
                                    ) : (
                                        <p className={`text-sm leading-relaxed whitespace-pre-line ${aiSummary.startsWith("Failed") ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"}`}>
                                            {aiSummary}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Top Route Highlight */}
                            {topRoute && (
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-3 shadow-lg shadow-emerald-500/20">
                                            <TrendingUp className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                                                Highest Coverage Route
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-bold text-emerald-700 dark:text-emerald-400">
                                                    {topRoute.route_name}
                                                </span> leads with {topRoute.driverCount} drivers assigned
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-2.5 shadow-md shadow-blue-500/20">
                                            <Users className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Drivers</p>
                                    </div>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                        {totalDrivers}
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl p-2.5 shadow-md shadow-purple-500/20">
                                            <Route className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Active Routes</p>
                                    </div>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                                        {data.length}
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-2.5 shadow-md shadow-emerald-500/20">
                                            <TrendingUp className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Avg per Route</p>
                                    </div>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        {data.length > 0 ? Math.round(totalDrivers / data.length) : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}