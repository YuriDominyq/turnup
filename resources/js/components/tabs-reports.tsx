import { Report } from "@/types/reports";
import axios from "axios";
import { Calendar, Download, FileText, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function TabsReports() {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchReports = async () => {
        setRefreshing(true);
        setLoading(true);
        try {
            const res = await axios.get("/api/reports");
            setReports(res.data.reports);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-3">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
                    <p className="text-muted-foreground">Loading reports...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b">
                <div>
                    <h2 className="text-xl font-semibold">Reports</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        {reports.length} {reports.length === 1 ? 'report' : 'reports'} available
                    </p>
                </div>
                <button
                    onClick={fetchReports}
                    disabled={refreshing}
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-lg transition-colors shadow-sm font-medium"
                >
                    <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Reports List */}
            {reports.length === 0 ? (
                <div className="text-center py-12 bg-muted/50 rounded-lg border-2 border-dashed">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="font-medium">No reports available</p>
                    <p className="text-sm text-muted-foreground mt-1">Reports will appear here once generated</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="group flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200"
                        >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium truncate">
                                        {report.filename}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(report.created_at).toLocaleString('en-PH', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>
                            <a
                                href={report.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors ml-4"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}