import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, Users, Route, Zap } from "lucide-react";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface DriversPerRouteChartProps {
    data: { route_name: string; driverCount: number }[];
}

export default function DriversPerRouteChart({ data }: DriversPerRouteChartProps) {
    const [aiSummary, setAiSummary] = useState<string>("Loading AI insights...");

    useEffect(() => {
        fetch("/api/ai/drivers-summary")
            .then(res => res.json())
            .then(data => setAiSummary(data.summary || "No AI insights available."))
            .catch(err => {
                console.error(err);
                setAiSummary("Failed to load AI insights.");
            });
    }, []);

    const totalDrivers = data.reduce((sum, item) => sum + item.driverCount, 0);

    const topRoute = data.length > 0
        ? data.reduce((max, item) => item.driverCount > max.driverCount ? item : max, data[0])
        : null;

    const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {payload[0].payload.route_name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-500">
                            {payload[0].value}
                        </span> drivers
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="rounded-2xl shadow-lg border dark:border-gray-800">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Route className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                Driver Analytics
                            </CardTitle>
                        </div>
                        <CardDescription className="mt-1">
                            Distribution of drivers across routes
                        </CardDescription>
                    </div>

                    <div className="hidden md:flex gap-4">
                        <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {totalDrivers}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Total Drivers</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                                {data.length}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Active Routes</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="drivers-per-route" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="drivers-per-route" className="gap-2">
                            <Users className="h-4 w-4" />
                            Drivers per Route
                        </TabsTrigger>
                        <TabsTrigger value="insights" className="gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Insights
                        </TabsTrigger>
                    </TabsList>

                    {/* Bar Chart Tab */}
                    <TabsContent value="drivers-per-route" className="mt-6">
                        {data.length === 0 ? (
                            <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                                <div className="text-center">
                                    <Route className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 dark:text-gray-400">No route data available</p>
                                </div>
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    data={data}
                                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        className="stroke-gray-200 dark:stroke-gray-800"
                                    />
                                    <XAxis
                                        dataKey="route_name"
                                        className="text-xs text-gray-600 dark:text-gray-400"
                                        tick={{ fill: 'currentColor' }}
                                    />
                                    <YAxis
                                        className="text-xs text-gray-600 dark:text-gray-400"
                                        tick={{ fill: 'currentColor' }}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }} />
                                    <Bar
                                        dataKey="driverCount"
                                        fill="#10b981"
                                        radius={[8, 8, 0, 0]}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </TabsContent>

                    {/* Insights Tab */}
                    <TabsContent value="insights" className="mt-6">
                        <div className="space-y-4">
                            {topRoute && (
                                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-emerald-600 dark:bg-emerald-700 rounded-lg p-2">
                                            <TrendingUp className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                                Highest Coverage
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold text-emerald-600 dark:text-emerald-500">
                                                    {topRoute.route_name}
                                                </span> has the most drivers assigned with {topRoute.driverCount} drivers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2">
                                            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                {totalDrivers}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Total Drivers</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2">
                                            <Route className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                {data.length}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Active Routes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-2">
                                            <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                {data.length > 0 ? Math.round(totalDrivers / data.length) : 0}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Avg per Route</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Insights */}
                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mt-4">
                                <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    <Zap className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                    AI Insights
                                </h3>
                                <p className={`text-sm whitespace-pre-line ${aiSummary.startsWith("Failed") ? "text-red-500" : "text-gray-600 dark:text-gray-400"}`}>
                                    {aiSummary}
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
