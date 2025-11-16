import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface WeeklyPerformanceChartProps {
    data: {
        day: string;
        activeDrivers: number;
        checkIns: number;
    }[]
}

export default function WeeklyPerformanceChart({ data }: WeeklyPerformanceChartProps) {
    return (
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Weekly Performance</CardTitle>
                <CardDescription>Driver activity and trip completion trends</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="checkins" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="checkins">Check-In</TabsTrigger>
                        <TabsTrigger value="drivers">Drivers</TabsTrigger>
                    </TabsList>
                    <TabsContent value="checkins" className="mt-4">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="completedTrips" stroke="#3b82f6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </TabsContent>
                    <TabsContent value="drivers" className="mt-4">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="activeDrivers" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}