import { RefreshCw, Truck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export default function DashboardHeader() {
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
                <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                </Button>
            </div>
        </div>
    )
}