import { Activity } from "lucide-react";
import { Text } from "../ui/text";


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
            </div>
        </div>
    )
}