import { Info, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label"; import { DriverLocation } from "@/types/driver-location";
;

interface MapSidebarProps {
    drivers: DriverLocation[];
    coverageArea: number;
    showDrivers: boolean;
    setShowDrivers: (value: boolean) => void;
}

export default function MapSidebar({ drivers, showDrivers, setShowDrivers, coverageArea }: MapSidebarProps) {

    const layers = [
        { label: 'Active Drivers', checked: showDrivers, toggle: () => setShowDrivers(!showDrivers), count: drivers.length }
    ]

    return (
        <Card className='w-80 rounded-none border-r border-t-0'>
            <CardHeader className='pb-3'>
                <CardTitle className='text-lg'>Map Layers</CardTitle>
                <CardDescription>
                    View driver locations and manage tracking layers
                </CardDescription>
            </CardHeader>
            <CardContent className='pt-0'>
                <Tabs defaultValue='layers' className='w-full'>
                    <TabsList className='grid w-full grid-cols-2'>
                        <TabsTrigger value='layers'>
                            <Layers className='h-4 w-4 mr-2' />
                            Layers
                        </TabsTrigger>
                        <TabsTrigger value='info'>
                            <Info className='h-4 w-4 mr-2' />
                            Info
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value='layers' className='mt-4'>
                        <ScrollArea className='h-64'>
                            <div className='space-y-3'>
                                {layers.map((layer) => (
                                    <div key={layer.label} className='flex items-center justify-between'>
                                        <div className='flex items-center space-x-2'>
                                            <input
                                                type='checkbox'
                                                checked={layer.checked}
                                                onChange={layer.toggle}
                                                className='rounded border-gray-300'
                                            />
                                            <Label className='text-sm font-medium'>{layer.label}</Label>
                                        </div>
                                        <Badge variant='outline' className='text-xs'>{layer.count}</Badge>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    <TabsContent value='info' className='mt-4'>
                        <ScrollArea className='h-64'>
                            <div className='space-y-3'>
                                <div className='text-sm'>
                                    <div className='font-medium mb-1'>Coverage Area</div>
                                    <div className='text-muted-foreground'>{coverageArea} km²</div>
                                </div>
                                <Separator />
                                <div className='text-sm'>
                                    <div className='font-medium mb-1'>Last Updated</div>
                                    <div className='text-muted-foreground'>2 minutes ago</div>
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}