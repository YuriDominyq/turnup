import { useState } from "react";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Car, CheckCircle2, Clock, MapPin, User, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { Driver } from "@/types/driver";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Driver Check-Ins", href: "/checkin"
    },
];

type CheckIn = {
    id: string;
    driver: Driver;
    status: "checked-in" | "not-checked-in" | "late";
    check_in_time: string | null;
};

type Props = {
    checkIns: CheckIn[]
}

type Status = "checked-in" | "not-checked-in" | "late";

export default function DriverCheckIn({ checkIns }: Props) {
    const [drivers, setDrivers] = useState(
        checkIns.map((ci) => ({
            id: ci.driver.drivers_id,
            name: `${ci.driver.first_name} ${ci.driver.last_name}`,
            jeepneyNo: ci.driver.license_plate,
            route: ci.driver.route || { first_terminal: "-", second_terminal: "-" },
            lastCheckIn: ci.check_in_time
                ? new Date(ci.check_in_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                : "-",
            status: ci.status,
        }))
    );
    const [activeTab, setActiveTab] = useState("all");

    const handleMarkLate = (id: string) => {
        setDrivers((prev) =>
            prev.map((d) => (d.id === id ? { ...d, status: "late" } : d))
        );
    };

    const getInitials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

    const filteredDrivers = drivers.filter((d) => activeTab === "all" || d.status === activeTab);

    const stats = {
        total: drivers.length,
        checkedIn: drivers.filter((d) => d.status === "checked-in").length,
        checkedOut: drivers.filter((d) => d.status === "not-checked-in").length,
        late: drivers.filter((d) => d.status === "late").length,
    };

    const StatusBadge = ({ status }: { status: Status }) => {
        const variants = {
            "checked-in": {
                className: "bg-green-100 text-green-800 hover:bg-green-100",
                icon: <CheckCircle2 className="h-3 w-3 mr-1" />,
                label: "Checked In"
            },
            "not-checked-in": {
                className: "bg-red-100 text-red-800 hover:bg-red-100",
                icon: <XCircle className="h-3 w-3 mr-1" />,
                label: "Checked Out"
            },
            "late": {
                className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
                icon: <AlertCircle className="h-3 w-3 mr-1" />,
                label: "Late"
            }
        };

        const variant = variants[status] || variants["not-checked-in"];

        return (
            <Badge variant="secondary" className={variant.className}>
                {variant.icon}
                {variant.label}
            </Badge>
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Driver Check-Ins" />
            <div className="min-h-screen bg-background py-8 px-4">
                <div className="mx-auto space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary rounded-xl">
                            <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                            <Text size="xl" weight="bold">
                                Driver Check-Ins
                            </Text>
                            <Text size="sm" weight="normal">
                                Monitor and manage driver attendance
                            </Text>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid gap-4 md:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
                                <User className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.total}</div>
                                <p className="text-xs text-muted-foreground">Active drivers today</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Checked In</CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">{stats.checkedIn}</div>
                                <p className="text-xs text-muted-foreground">On time arrivals</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Checked Out</CardTitle>
                                <XCircle className="h-4 w-4 text-red-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">{stats.checkedOut}</div>
                                <p className="text-xs text-muted-foreground">Awaiting check-in</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Late</CardTitle>
                                <AlertCircle className="h-4 w-4 text-orange-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-orange-600">{stats.late}</div>
                                <p className="text-xs text-muted-foreground">Late arrivals</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Tabs for Filtering */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
                            <TabsTrigger value="checked-in">Checked In ({stats.checkedIn})</TabsTrigger>
                            <TabsTrigger value="not-checked-in">Checked Out ({stats.checkedOut})</TabsTrigger>
                            <TabsTrigger value="late">Late ({stats.late})</TabsTrigger>
                        </TabsList>

                        <TabsContent value={activeTab} className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Driver List</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {filteredDrivers.length} {filteredDrivers.length === 1 ? "driver" : "drivers"} found
                                    </p>
                                </CardHeader>
                                <CardContent className="p-0">
                                    {filteredDrivers.map((driver, index) => (
                                        <div key={driver.id}>
                                            <div className="p-6 hover:bg-accent transition-colors">
                                                <div className="flex items-start justify-between gap-4">
                                                    {/* Driver Info */}
                                                    <div className="flex gap-4 flex-1">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-primary text-primary-foreground">
                                                                {getInitials(driver.name)}
                                                            </AvatarFallback>
                                                        </Avatar>

                                                        <div className="flex-1 space-y-3">
                                                            <div>
                                                                <h3 className="font-semibold text-lg leading-none mb-1">{driver.name}</h3>
                                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                    <Car className="h-4 w-4" />
                                                                    <span className="font-medium">{driver.jeepneyNo}</span>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-2">
                                                                <div className="flex items-start gap-2 text-sm">
                                                                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                                                                    <span className="text-muted-foreground">{driver.route?.first_terminal} ↔ {driver.route?.second_terminal}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-sm">
                                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                                    <span className="text-muted-foreground">
                                                                        Last Check-In: <span className="font-medium text-foreground">{driver.lastCheckIn}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Status & Actions */}
                                                    <div className="flex flex-col items-end gap-3">
                                                        <StatusBadge status={driver.status} />
                                                        {driver.status === "not-checked-in" && (
                                                            <div className="flex flex-col gap-2">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() =>
                                                                        setDrivers(prev =>
                                                                            prev.map(d =>
                                                                                d.id === driver.id
                                                                                    ? { ...d, status: "checked-in", lastCheckIn: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
                                                                                    : d
                                                                            )
                                                                        )
                                                                    }
                                                                >
                                                                    Mark as Checked-In
                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    onClick={() => handleMarkLate(driver.id)}
                                                                >
                                                                    Mark as Late
                                                                </Button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {index < filteredDrivers.length - 1 && <Separator />}
                                        </div>
                                    ))}

                                    {filteredDrivers.length === 0 && (
                                        <div className="p-12 text-center text-muted-foreground">
                                            <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                            <p>No drivers found with this status</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
}
