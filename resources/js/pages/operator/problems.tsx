import { useState } from 'react';
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, MessageSquare, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import StatsCard from '@/components/operator/stat-card';
import SearchBar from '@/components/operator/search-bar';
import ReportCard from '@/components/operator/reporter-card';
import { Text } from '@/components/ui/text';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Commuter Problems', href: '/problems' }];

const mockReports = [
    {
        id: 1,
        commuterName: "Maria Santos",
        commuterContact: "maria.s@email.com",
        subject: "Driver was rude and refused to stop",
        description: "The driver of Bus #2847 was extremely rude when I asked him to wait for elderly passengers. He closed the doors and drove off while people were trying to board.",
        route: "Route 15A - Main Terminal to Downtown",
        busNumber: "#2847",
        incidentDate: "Oct 7, 2025 - 8:30 AM",
        severity: "high",
        status: "new",
        category: "Driver Behavior",
        timeAgo: "30 minutes ago"
    },
    {
        id: 2,
        commuterName: "Juan Reyes",
        commuterContact: "+63 912 345 6789",
        subject: "Bus broke down mid-route, no assistance",
        description: "Bus #3021 broke down on Highway 12 and we were left stranded for over an hour. No backup bus was sent and the driver had no information to give us.",
        route: "Route 8 - North District Express",
        busNumber: "#3021",
        incidentDate: "Oct 7, 2025 - 7:15 AM",
        severity: "critical",
        status: "in-progress",
        category: "Vehicle Issue",
        timeAgo: "2 hours ago"
    },
    {
        id: 3,
        commuterName: "Ana Lim",
        commuterContact: "ana.lim@email.com",
        subject: "Unsafe driving - speeding and sudden braking",
        description: "Driver was driving recklessly, speeding through traffic and making sudden stops that caused passengers to fall. Multiple people complained but he ignored us.",
        route: "Route 22 - East Side Loop",
        busNumber: "#1594",
        incidentDate: "Oct 6, 2025 - 6:45 PM",
        severity: "high",
        status: "new",
        category: "Safety Concern",
        timeAgo: "18 hours ago"
    },
    {
        id: 4,
        commuterName: "Roberto Cruz",
        commuterContact: "+63 917 654 3210",
        subject: "Bus never showed up, missed appointment",
        description: "Waited for 2 hours at the scheduled stop but the bus never arrived. No notification or update was provided. I missed an important medical appointment.",
        route: "Route 5 - West District",
        busNumber: "N/A",
        incidentDate: "Oct 6, 2025 - 9:00 AM",
        severity: "medium",
        status: "resolved",
        category: "No Show",
        timeAgo: "1 day ago"
    },
    {
        id: 5,
        commuterName: "Lisa Garcia",
        commuterContact: "l.garcia@email.com",
        subject: "Driver skipped multiple stops",
        description: "Driver skipped 4 scheduled stops despite passengers pressing the stop button. When confronted, he said he was running late and couldn't stop.",
        route: "Route 12 - Central Avenue",
        busNumber: "#4172",
        incidentDate: "Oct 5, 2025 - 5:30 PM",
        severity: "medium",
        status: "in-progress",
        category: "Service Quality",
        timeAgo: "2 days ago"
    }
];

export default function CommuterProblems() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const filterByStatus = (reports: typeof mockReports) => activeTab === "all" ? reports : reports.filter(r => r.status === activeTab);
    const filteredReports = filterByStatus(mockReports).filter(report =>
        report.commuterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const newCount = mockReports.filter(r => r.status === "new").length;
    const criticalCount = mockReports.filter(r => r.severity === "critical").length;
    const inProgressCount = mockReports.filter(r => r.status === "in-progress").length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Commuter Problems" />
            <div className="container mx-auto py-8 px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-primary rounded-xl">
                        <AlertCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                        <Text size='xl' weight='bold'>
                            Commuter Complaints
                        </Text>
                        <Text size='sm' weight='normal'>
                            Manage and respond to reports received from commuters
                        </Text>
                    </div>
                </div>

                {criticalCount > 0 && (
                    <Alert variant="destructive" className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            <strong>{criticalCount} critical issue{criticalCount > 1 ? 's' : ''}</strong> requiring immediate attention
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <StatsCard
                        title="New Reports"
                        value={newCount}
                        subtitle="Awaiting review"
                        icon={<MessageSquare className="h-4 w-4 text-blue-500" />}
                    />
                    <StatsCard
                        title="Critical Issues"
                        value={criticalCount}
                        subtitle="Urgent action needed"
                        icon={<AlertCircle className="h-4 w-4 text-red-500" />}
                    />
                    <StatsCard
                        title="In Progress"
                        value={inProgressCount}
                        subtitle="Being investigated"
                        icon={<Clock className="h-4 w-4 text-yellow-500" />}
                    />

                    <StatsCard
                        title="Avg Response Time"
                        value="4.2h"
                        subtitle="-15% from last week"
                        icon={<Clock className="h-4 w-4 text-green-500" />}
                    />

                </div>

                <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                    <TabsList>
                        <TabsTrigger value="all">All Reports ({mockReports.length})</TabsTrigger>
                        <TabsTrigger value="new">New ({newCount})</TabsTrigger>
                        <TabsTrigger value="in-progress">In Progress ({inProgressCount})</TabsTrigger>
                        <TabsTrigger value="resolved">Resolved</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="space-y-4">
                    {filteredReports.map(report => <ReportCard key={report.id} report={report} />)}
                    {filteredReports.length === 0 && (
                        <Card className="text-center py-12">
                            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                            <p className="text-lg font-medium mb-2">No reports found</p>
                            <p className="text-muted-foreground">Try adjusting your search or filters</p>
                        </Card>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
