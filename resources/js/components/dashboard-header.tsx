import { Download, RefreshCw, Truck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import * as XLSX from "xlsx";
import { DriversPerRoute, DriverStatus, TopDriver } from "@/types/analytics";
import { toast } from "react-toastify";

export default function DashboardHeader() {

    const exportAnalyticsToExcel = async () => {
        try {
            const [topDriversRes, driversPerRouteRes, driverStatusRes] = await Promise.all([
                fetch('/api/analytics/top-drivers'),
                fetch('/api/analytics/drivers-per-route'),
                fetch('/api/analytics/driver-status')
            ]);

            const [topDrivers, driversPerRoute, driverStatus] = await Promise.all([
                topDriversRes.json(),
                driversPerRouteRes.json(),
                driverStatusRes.json()
            ]);

            const workbook = XLSX.utils.book_new();

            //Top Drivers Sheet
            const topDriversData = topDrivers.map((d: TopDriver) => ({
                ID: d.drivers_id,
                Name: `${d.first_name} ${d.last_name}`,
                Rating: d.rating
            }));

            const ws1 = XLSX.utils.json_to_sheet(topDriversData);
            XLSX.utils.book_append_sheet(workbook, ws1, "Top Drivers");

            // Drivers Per Route sheet
            const driversPerRouteData = driversPerRoute.map((r: DriversPerRoute) => ({
                Route: r.route_name,
                "Driver Count": r.driverCount
            }));
            const ws2 = XLSX.utils.json_to_sheet(driversPerRouteData);
            XLSX.utils.book_append_sheet(workbook, ws2, "Drivers Per Route");

            // Driver Status Distribution sheet
            const driverStatusData = driverStatus.map((s: DriverStatus) => ({
                Status: s.name,
                Count: s.value
            }));
            const ws3 = XLSX.utils.json_to_sheet(driverStatusData);
            XLSX.utils.book_append_sheet(workbook, ws3, "Driver Status");

            const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([wbout], { type: "application/octet-stream" });
            // Send file to Laravel backend
            const formData = new FormData();
            formData.append('file', new File([blob], `analytics_${Date.now()}.xlsx`));

            const res = await fetch('/api/reports', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Report saved and downloaded successfully!");
            } else {
                toast.error("Failed to save report on the server.");
            }
        } catch (error) {
            console.error("Export failed", error);
            toast.error("Failed to export analytics. Please try again.");
        }
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary rounded-xl">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                    <Text size='xl' weight='bold'>
                        Fleet Dashboard
                    </Text>
                    <Text size='sm' weight='normal' className="text-muted-foreground">
                        Real-time overview of your driver operations
                    </Text>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Badge className='bg-primary text-primary-foreground'>
                    <div className='w-2 h-2 bg-primary-foreground rounded-full mr-2 animate-pulse' />
                    Live Data
                </Badge>
                <Button variant="outline" size="sm" onClick={exportAnalyticsToExcel}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                </Button>
                <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                </Button>
            </div>
        </div>
    )
}