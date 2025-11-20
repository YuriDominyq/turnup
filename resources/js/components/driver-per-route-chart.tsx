import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface DriversPerRouteChartProps {
    data: { route_name: string; driverCount: number }[];
}

export default function DriversPerRouteChart({ data }: DriversPerRouteChartProps) {
    return (
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Driver Analytics</CardTitle>
                <CardDescription>Drivers assigned per route</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="drivers-per-route" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="drivers-per-route">Drivers per Route</TabsTrigger>
                        <TabsTrigger value="other-metrics">Other Metrics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="drivers-per-route" className="mt-4">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="route_name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="driverCount" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </TabsContent>

                    <TabsContent value="other-metrics" className="mt-4">
                        <div className="text-center text-gray-500">No data yet</div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}