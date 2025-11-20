import { Report } from "@/types/reports";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TabsReports() {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchReports = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/reports");
            setReports(res.data.reports);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    if (loading) return <p>Loading reports...</p>;

    return (
        <div className="space-y-3">
            <div className="flex justify-end">
                <button
                    onClick={fetchReports}
                    className="px-3 py-1 bg-primary text-white rounded"
                >
                    Refresh
                </button>
            </div>

            {reports.map((report) => (
                <div key={report.id} className="flex justify-between p-3 bg-muted rounded-lg">
                    <div>
                        <span className="font-medium">{report.filename}</span>
                        <br />
                        <span className="text-xs text-muted-foreground">
                            {new Date(report.created_at).toLocaleString()}
                        </span>
                    </div>
                    <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Download
                    </a>
                </div>
            ))}
        </div>
    );
}