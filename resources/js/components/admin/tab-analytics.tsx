import { useEffect, useState } from "react";
import { Activity, Filter, RefreshCw } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import axios from "axios";
import { SystemLog } from "@/types/systemlog";
import FullLogsModal from "./full-logs-modal";

type TabType = 'overview' | 'checkins' | 'terminals' | 'drivers' | 'reports';

export default function TabAnalytics() {
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [logs, setLogs] = useState<SystemLog[]>([]);
    const [hasNewLog, setHasNewLog] = useState(false);
    const [lastLogId, setLastLogId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const tabs: { id: TabType; label: string }[] = [
        { id: 'overview', label: 'Overview' },
        { id: 'checkins', label: 'Check-ins' },
        { id: 'terminals', label: 'Terminals' },
        { id: 'drivers', label: 'Drivers' },
        { id: 'reports', label: 'Reports' },
    ];

    const fetchLogs = async () => {
        try {
            const response = await axios.get("https://turnup-admin.com/api/system-logs");
            const fetchedLogs: SystemLog[] = response.data.systemLogs;

            if (fetchedLogs.length > 0 && fetchedLogs[0].id !== lastLogId) {
                setHasNewLog(true);
                setLastLogId(fetchedLogs[0].id);

                setTimeout(() => setHasNewLog(false), 2000);
            }

            setLogs(fetchedLogs);
        } catch (error) {
            console.error("Error fetching logs:", error);
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await fetchLogs();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchLogs();
        }, 5000);

        fetchLogs();
        return () => clearInterval(interval);
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Loading dashboard</p>
                </div>
            </div>
        );
    }

    return (
        <div className='space-y-6'>
            {/* Tab Navigation */}
            <Card>
                <CardContent className='p-4'>
                    <div className='flex flex-col gap-4'>
                        {/* Mobile: Dropdown, Desktop: Tabs */}
                        <div className='flex items-center justify-between gap-4'>
                            {/* Desktop Tabs */}
                            <div
                                role="tablist"
                                aria-label="Super Admin Sections"
                                className='hidden sm:flex items-center gap-1 bg-muted p-1 rounded-lg'
                            >
                                {tabs.map((tab) => (
                                    <Button
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={activeTab === tab.id}
                                        aria-controls={`${tab.id}-panel`}
                                        onClick={() => setActiveTab(tab.id)}
                                        size="sm"
                                        variant={activeTab === tab.id ? "default" : "ghost"}
                                        className={cn(
                                            "transition-all",
                                            activeTab === tab.id && "bg-primary text-primary-foreground shadow-sm"
                                        )}
                                    >
                                        {tab.label}
                                    </Button>
                                ))}
                            </div>

                            {/* Mobile Dropdown */}
                            <select
                                className='sm:hidden flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm'
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value as TabType)}
                                aria-label="Select analytics section"
                            >
                                {tabs.map((tab) => (
                                    <option key={tab.id} value={tab.id}>
                                        {tab.label}
                                    </option>
                                ))}
                            </select>

                            {/* Action Buttons */}
                            <div className='flex items-center gap-2'>
                                <Badge className='hidden sm:inline-flex bg-green-500 text-white'>
                                    Live Updates
                                </Badge>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleRefresh}
                                    disabled={isRefreshing}
                                    aria-label="Refresh data"
                                >
                                    <RefreshCw className={cn('h-4 w-4', isRefreshing && 'animate-spin')} />
                                </Button>
                                <Button variant="outline" size="sm" className='gap-2'>
                                    <Filter className='h-4 w-4' />
                                    <span className="hidden md:inline">Filters</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tab Content */}
            <div
                role="tabpanel"
                id={`${activeTab}-panel`}
                aria-labelledby={`${activeTab}-tab`}
            >
                {activeTab === 'overview' && (
                    <div className="space-y-6">


                        {/* System Logs */}
                        <Card>
                            <CardHeader className='pb-4'>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                    <div>
                                        <CardTitle className='text-lg font-bold'>
                                            System Logs
                                        </CardTitle>
                                        <p className='text-sm text-muted-foreground mt-1'>
                                            Recent system events and activity logs
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Badge variant="outline" className="gap-1">
                                            <div className={`w-2 h-2 rounded-full ${hasNewLog ? "bg-green-500 animate-pulse" : "bg-green-500"}`} />
                                            Real-time
                                        </Badge>
                                        <Button
                                            variant="outline"
                                            size="sm" className='gap-2'
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            View Full Logs
                                            <Activity className='h-4 w-4' />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className='pt-4'>
                                <div className='space-y-3'>
                                    {logs.slice(0, 5).map((log) => (
                                        <div key={log.id} className='flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors'>
                                            <div
                                                className={cn(
                                                    'w-2 h-2 rounded-full flex-shrink-0',
                                                    log.type === 'login'
                                                        ? 'bg-green-500 animate-pulse'
                                                        : log.type === 'logout'
                                                            ? 'bg-yellow-500'
                                                            : log.type === 'error'
                                                                ? 'bg-red-500 animate-pulse'
                                                                : log.type === 'create'
                                                                    ? 'bg-blue-500 animate-pulse'
                                                                    : log.type === 'update'
                                                                        ? 'bg-indigo-500'
                                                                        : log.type === 'delete'
                                                                            ? 'bg-rose-500'
                                                                            : 'bg-muted-foreground'
                                                )}
                                            ></div>
                                            <div className='flex-1 min-w-0'>
                                                <p className='text-sm font-medium truncate'>{log.title}</p>
                                                <p className='text-xs text-muted-foreground truncate'>{log.description}</p>
                                            </div>
                                            <span className='text-xs text-muted-foreground whitespace-nowrap'>
                                                {new Date(log.created_at).toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {activeTab !== 'overview' && (
                    <Card>
                        <CardContent className="flex items-center justify-center min-h-[400px]">
                            <div className="text-center space-y-4">
                                <div className="text-4xl">🚧</div>
                                <h3 className="text-lg font-semibold">Coming Soon</h3>
                                <p className="text-sm text-muted-foreground max-w-md">
                                    The {tabs.find(t => t.id === activeTab)?.label} section is currently under development.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {isModalOpen && <FullLogsModal logs={logs} onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
}