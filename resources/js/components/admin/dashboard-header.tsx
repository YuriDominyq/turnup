import { Activity, Download, Filter, RefreshCw } from "lucide-react";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";


export default function DashboardHeader() {
    return (
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <div className='p-2.5 bg-primary rounded-xl'>
                        <Activity className='h-6 w-6 text-primary-foreground' />
                    </div>
                    <div>
                        <Text size='xl' weight='bold'>
                            Terminal Operations Dashboard
                        </Text>
                        <Text size='sm' weight='normal'>
                            Real-time monitoring and analytics for terminal operations
                        </Text>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <Badge className='bg-primary text-primary-foreground'>
                        <div className='w-2 h-2 bg-primary-foreground rounded-full mr-2 animate-pulse' />
                        Live Data
                    </Badge>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <Button variant="outline" size="sm">
                    <Filter className='h-4 w-4' />
                    Filter
                </Button>
                <Button variant="outline" size="sm">
                    <Download className='h-4 w-4' />
                    Export
                </Button>
                <Button variant="outline" size="sm">
                    <RefreshCw className='h-4 w-4' />
                    Refresh
                </Button>
            </div>
        </div>
    )
}