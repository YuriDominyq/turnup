import { SystemLog } from "@/types/systemlog";
import { FC } from "react";

interface FullLogsModalProps {
    logs: SystemLog[];
    onClose: () => void;
}

const FullLogsModal: FC<FullLogsModalProps> = ({ logs, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-background rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[80%] overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Full System Logs</h2>
                    <button className="text-muted-foreground" onClick={onClose}>✕</button>
                </div>
                <div className="space-y-2">
                    {logs.map((log) => (
                        <div key={log.id} className='flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors'>
                            <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${log.type === 'login'
                                    ? 'bg-green-500 animate-pulse'
                                    : log.type === 'login'
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
                                    }`}
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
            </div>
        </div>
    );
};

export default FullLogsModal;
