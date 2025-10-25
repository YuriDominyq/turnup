import { Car, Users } from "lucide-react";
import OperatorMap from "./operator-map";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { DriverLocation } from "@/types/driver-location";

interface MapContainerProps {
    theme: "light" | "dark" | "satellite";
    drivers: DriverLocation[];
    showDrivers: boolean
}

export default function MapContainer({ theme, drivers, showDrivers }: MapContainerProps) {
    return (
        <div className='flex-1 relative'>
            <Card className='h-full rounded-none border-t-0 border-r-0'>
                <CardContent className='p-0 h-full'>
                    <OperatorMap theme={theme} drivers={showDrivers ? drivers : []} />
                </CardContent>
            </Card>

            {/* Map Overlay Controls */}
            <div className='absolute top-4 right-4 flex flex-col gap-2'>
                <Button size='sm' variant='secondary' className='shadow-lg'>
                    <Car className='h-4 w-4' />
                </Button>
                <Button size='sm' variant='secondary' className='shadow-lg'>
                    <Users className='h-4 w-4' />
                </Button>
            </div>
        </div>
    )
}