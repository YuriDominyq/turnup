import { Report } from "@/types/commuter-problem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle2, Clock, MapPin, MessageSquare, User, Phone, Calendar, Navigation } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
        <Card className="hover:shadow-lg transition-all hover:scale-[1.01] duration-200">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant={getSeverityColor(report.severity)} className="uppercase text-xs font-semibold">
                            {report.severity}
                        </Badge>
                        <Badge variant={getStatusColor(report.status)} className="text-xs">
                            {report.status === "new" && <MessageSquare className="h-3 w-3 mr-1" />}
                            {report.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                            {report.status === "resolved" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {report.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">{report.category}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                        <Clock className="h-3 w-3" />
                        <span>{report.timeAgo}</span>
                    </div>
                </div>

                <CardTitle className="text-2xl font-bold mb-2 leading-tight">
                    {report.subject}
                </CardTitle>

                {report.description && (
                    <CardDescription className="text-base leading-relaxed">
                        {report.description}
                    </CardDescription>
                )}
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Commuter Info */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Commuter Information
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{report.commuterName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{report.commuterContact}</span>
                    </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Trip Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-xs text-muted-foreground">Route</p>
                                <p className="font-medium">{report.route}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-xs text-muted-foreground">Driver</p>
                                <p className="font-medium">{report.jeepneyDriver}</p>
                            </div>
                        </div>
                        {(report.startStop !== 'N/A' || report.endStop !== 'N/A') && (
                            <>
                                <div className="flex items-start gap-2 text-sm">
                                    <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Start Stop</p>
                                        <p className="font-medium">{report.startStop}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 text-sm">
                                    <Navigation className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0 rotate-180" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">End Stop</p>
                                        <p className="font-medium">{report.endStop}</p>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="flex items-start gap-2 text-sm col-span-full">
                            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-xs text-muted-foreground">Incident Date</p>
                                <p className="font-medium">{report.incidentDate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                    {report.status === "new" && (
                        <>
                            <Button size="sm" className="flex-1 min-w-[140px]">
                                Assign & Investigate
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 min-w-[140px]">
                                Contact Commuter
                            </Button>
                            <Button size="sm" variant="ghost">
                                Mark as Invalid
                            </Button>
                        </>
                    )}
                    {report.status === "in-progress" && (
                        <>
                            <Button size="sm" className="flex-1 min-w-[140px]">
                                Mark as Resolved
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 min-w-[140px]">
                                Add Update
                            </Button>
                            <Button size="sm" variant="ghost">
                                View History
                            </Button>
                        </>
                    )}
                    {report.status === "resolved" && (
                        <>
                            <Button size="sm" variant="outline" className="flex-1 min-w-[140px]">
                                View Resolution
                            </Button>
                            <Button size="sm" variant="ghost">
                                Reopen
                            </Button>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}