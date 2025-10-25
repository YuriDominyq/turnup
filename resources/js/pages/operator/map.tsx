import MapContainer from '@/components/map-container';
import MapHeader from '@/components/map-header';
import MapSidebar from '@/components/map-sidebar';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { DriverLocation } from '@/types/driver-location';
import { Head } from '@inertiajs/react';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebaseConfig';
import * as turf from "@turf/turf";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Map',
        href: '/map',
    },
];


export default function Maps() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark" | "satellite">("light");

    const [drivers, setDrivers] = useState<DriverLocation[]>([]);
    const [showDrivers, setShowDrivers] = useState(true)
    const [coverageArea, setCoverageArea] = useState<number>(0);

    useEffect(() => {
        const driversRef = ref(db, "drivers");

        const unsubscribe = onValue(driversRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                const list: DriverLocation[] = Object.keys(data).map((drivers_id) => ({
                    drivers_id,
                    latitude: data[drivers_id].location.latitude,
                    longitude: data[drivers_id].location.longitude,
                }));

                setDrivers(list);

                const area = calculateCoverageArea(list);
                setCoverageArea(area);
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    function calculateCoverageArea(drivers: DriverLocation[]) {
        const minLat = 10.6390;
        const maxLat = 10.7060;
        const minLng = 122.9350;
        const maxLng = 122.9800;

        const driversInCity = drivers.filter(d =>
            d.latitude >= minLat &&
            d.latitude <= maxLat &&
            d.longitude >= minLng &&
            d.longitude <= maxLng
        );

        if (driversInCity.length === 0) return 0;

        const points = driversInCity.map(d => turf.point([d.longitude, d.latitude]));
        const hull = turf.convex(turf.featureCollection(points));

        if (!hull) return 0;

        const areaM2 = turf.area(hull);
        return Math.round(areaM2 / 1_000_000);
    }

    const handleFullscreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen()
                .then(() => setIsFullscreen(true))
                .catch((err) => {
                    console.error(`Error attempting fullscreen: ${err.message}`)
                })
        } else {
            document.exitFullscreen()
                .then(() => setIsFullscreen(false))
                .catch((err) => {
                    console.error(`Error exiting fullscreen: ${err.message}`)
                })
        }
    }

    const handleRefresh = () => {

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Map" />

            <div className='flex flex-col h-full'>
                {/* Header Controls */}
                <MapHeader
                    isFullScreen={isFullscreen}
                    handleFullscreen={handleFullscreen}
                    handleRefresh={handleRefresh}
                    theme={theme}
                    setTheme={setTheme}
                />

                {/* Main Content */}
                <div className='flex flex-1 overflow-hidden'>
                    {/* Sidebar */}
                    <MapSidebar drivers={drivers} showDrivers={showDrivers} setShowDrivers={setShowDrivers} coverageArea={coverageArea} />

                    {/* Map Container */}
                    <MapContainer theme={theme} drivers={drivers} showDrivers={showDrivers} />
                </div>
            </div>
        </AppLayout>
    );
}
