import { darkStyle, lightStyle } from "@/lib/map-styles";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { DriverLocation } from "@/types/driver-location";

const containerStyle = { width: '100%', height: '100%' }
const center = { lat: 10.6676, lng: 122.9456 };
const libraries: ('places')[] = ['places'];

interface OperatorMapProps {
    theme: "light" | "dark" | "satellite";
    drivers: DriverLocation[]
}

export default function OperatorMap({ theme, drivers }: OperatorMapProps) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })


    if (!isLoaded) return (
        <div className="relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
            <span className="absolute mt-16 text-gray-700 dark:text-gray-200">Loading map...</span>
        </div>
    );
    return (

        <div className="h-full w-full">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{
                    mapTypeId: theme === 'satellite' ? 'satellite' : 'roadmap',
                    styles: theme === 'dark' ? darkStyle : theme === 'light' ? lightStyle : [],
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: "greedy"
                }}
            >
                {drivers.map(driver => (
                    <Marker
                        key={driver.drivers_id}
                        position={{ lat: driver.latitude, lng: driver.longitude }}
                        label="🚍"
                    />
                ))}
            </GoogleMap>
        </div>
    )
}