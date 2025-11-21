import { Report } from "@/types/commuter-problem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Badge } from "../ui/badge";
import { CheckCircle2, Clock, MapPin, MessageSquare, User } from "lucide-react";
import { Button } from "../ui/button";

interface ReportCardProps {
    report: Report;
}

export default function ReportCard({ report }: ReportCardProps) {
    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "critical":
            case "high": return "destructive";
            case "medium": return "default";
            case "low": return "secondary";
            default: return "outline";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "new": return "default";
            case "in-progress": return "secondary";
            case "resolved": return "outline";
            default: return "outline";
        }
    };

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant={getSeverityColor(report.severity)} className="uppercase">{report.severity}</Badge>
                            <Badge variant={getStatusColor(report.status)}>
                                {report.status === "new" && <MessageSquare className="h-3 w-3 mr-1" />}
                                {report.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                                {report.status === "resolved" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                                {report.status}
                            </Badge>
                            <Badge variant="outline">{report.category}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{report.subject}</CardTitle>
                        <CardDescription className="text-base mb-4">{report.description}</CardDescription>
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span><strong>Reported by:</strong> {report.commuterName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span><strong>Route:</strong> {report.route}</span>
                            </div>
                            <div><strong>Bus:</strong> {report.jeepneyDriver}</div>
                            <div><strong>Incident:</strong> {report.incidentDate}</div>
                            <div><strong>Contact:</strong> {report.commuterContact}</div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{report.timeAgo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2">
                    {report.status === "new" && (
                        <>
                            <Button size="sm">Assign & Investigate</Button>
                            <Button size="sm" variant="outline">Contact Commuter</Button>
                            <Button size="sm" variant="ghost">Mark as Invalid</Button>
                        </>
                    )}
                    {report.status === "in-progress" && (
                        <>
                            <Button size="sm">Mark as Resolved</Button>
                            <Button size="sm" variant="outline">Add Update</Button>
                            <Button size="sm" variant="ghost">View History</Button>
                        </>
                    )}
                    {report.status === "resolved" && (
                        <>
                            <Button size="sm" variant="outline">View Resolution</Button>
                            <Button size="sm" variant="ghost">Reopen</Button>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
