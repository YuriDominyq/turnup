import { useEffect, useState } from 'react';
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";;
import SearchBar from '@/components/operator/search-bar';
import ReportCard from '@/components/operator/reporter-card';
import { Text } from '@/components/ui/text';
import axios from 'axios';
import { FeedbackResponse, Report } from '@/types/commuter-problem';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Commuter Problems', href: '/problems' }];

export default function CommuterProblems() {
    const [searchQuery, setSearchQuery] = useState("");
    const [mappedReports, setMappedReports] = useState<Report[]>([]);
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        axios.get<FeedbackResponse[]>('/api/feedback')
            .then(res => {

                const reports: Report[] = res.data.map(fb => {
                    const severity = fb.rating >= 4 ? 'high' : fb.rating === 3 ? 'medium' : 'low';
                    const status = 'new';

                    return {
                        id: fb.feedback_id,
                        commuterName: `${fb.commuter?.first_name || ''} ${fb.commuter?.last_name || ''}`.trim() || 'Unknown',
                        commuterContact: fb.commuter?.phone || 'N/A',
                        subject: `Rating: ${fb.rating}/5`,
                        description: fb.comment || '',
                        route: fb.ride?.route?.name || 'N/A',
                        startStop: fb.ride?.startStop?.name || 'N/A',
                        endStop: fb.ride?.endStop?.name || 'N/A',
                        incidentDate: new Date(fb.created_at).toLocaleString(),
                        severity,
                        status,
                        category: 'Feedback',
                        timeAgo: 'Just now'
                    } as const;
                });


                setMappedReports(reports);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const filterByStatus = (reports: typeof mappedReports) => activeTab === "all" ? reports : reports.filter(r => r.status === activeTab);

    const filteredReports = filterByStatus(mappedReports).filter(report =>
        report.commuterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const newCount = mappedReports.filter(r => r.status === "new").length;
    const criticalCount = mappedReports.filter(r => r.severity === "high").length;
    const inProgressCount = mappedReports.filter(r => r.status === "in-progress").length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Commuter Feedbacks" />
            <div className="container mx-auto py-8 px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-primary rounded-xl">
                        <MessageSquare className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                        <Text size='xl' weight='bold'>Commuter Feedbacks</Text>
                        <Text size='sm' weight='normal'>Manage and review feedback submitted by commuters</Text>
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

                <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                    <TabsList>
                        <TabsTrigger value="all">All ({mappedReports.length})</TabsTrigger>
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
                            <p className="text-lg font-medium mb-2">No feedbacks found</p>
                            <p className="text-muted-foreground">Try adjusting your search or filters</p>
                        </Card>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
