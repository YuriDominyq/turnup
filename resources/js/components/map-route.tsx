import { useAppearance } from "@/hooks/use-appearance";
import { darkStyle, lightStyle } from "@/lib/map-styles";
import { GoogleMap, Marker, Polyline, useLoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const containerStyle = { width: '100%', height: '450px' }
const center = { lat: 10.6676, lng: 122.9456 };

const libraries: ('places' | 'drawing')[] = ['places', 'drawing'];

type Stop = { name: string; position: google.maps.LatLngLiteral };

export type PolylineData = {
    id: number;
    path: google.maps.LatLngLiteral[];
    color: string
}

interface MapProps {
    stops: Stop[];
    setStops: React.Dispatch<React.SetStateAction<Stop[]>>;
    clearTrigger?: boolean;
    polylines: PolylineData[];
    setPolylines: React.Dispatch<React.SetStateAction<PolylineData[]>>;
    savedPolylines?: PolylineData[];
    routeColor: string;
    snapToRoad: (path: { lat: number; lng: number }[]) => Promise<google.maps.LatLngLiteral[]>;
}

export default function Map({ stops, setStops, clearTrigger, polylines, setPolylines, savedPolylines, routeColor }: MapProps) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    const { appearance } = useAppearance();
    const [darkMode, setDarkMode] = useState(false);
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [newStop, setNewStop] = useState<Stop | null>(null);
    const polylinesRefs = useRef<google.maps.Polyline[]>([]);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(appearance === 'dark' || appearance === 'system' && systemPrefersDark)
    }, [appearance])

    useEffect(() => {
        if (!savedPolylines || savedPolylines.length === 0) return;

        setPolylines(prev => {
            const isSame =
                prev.length === savedPolylines.length &&
                prev.every((poly, i) => {
                    const saved = savedPolylines[i];

                    return (
                        poly.id === saved.id &&
                        poly.path.length === saved.path.length &&
                        poly.path.every((p, j) =>
                            p.lat === saved.path[j].lat && p.lng === saved.path[j].lng
                        )
                    )
                })

            return isSame ? prev : savedPolylines;
        })
    }, [savedPolylines]);

    useEffect(() => {
        if (clearTrigger) {

            setPolylines([]);
            setStops([]);
        }
    }, [clearTrigger, setStops])


    useEffect(() => {
        if (!map || !savedPolylines || savedPolylines.length === 0) return;

        polylinesRefs.current.forEach(p => p.setMap(null));
        polylinesRefs.current = [];

        const bounds = new google.maps.LatLngBounds();

        savedPolylines.forEach(poly => {
            const parsedPath = poly.path.map((p: { lat: number | string; lng: number | string }) => {
                const lat = typeof p.lat === "string" ? parseFloat(p.lat) : p.lat;
                const lng = typeof p.lng === "string" ? parseFloat(p.lng) : p.lng;
                bounds.extend({ lat, lng });
                return { lat, lng };
            });

            const polyline = new google.maps.Polyline({
                path: parsedPath,
                strokeColor: poly.color,
                strokeWeight: 3,
                editable: false,
                map: map,
            });

            polylinesRefs.current.push(polyline);
        });

        if (!bounds.isEmpty()) {
            map.fitBounds(bounds);
        }
    }, [map, savedPolylines]);


    const handleMapClick = (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;

        const position = { lat: e.latLng.lat(), lng: e.latLng.lng() };

        setNewStop({ position, name: "" })
        setModalOpen(true)
    };

    const handleSaveStop = () => {
        if (newStop && newStop.name.trim()) {
            setStops([...stops, { name: newStop.name, position: newStop.position }])
            setModalOpen(false)
            setNewStop(null)
        }
    }

    const onMapLoad = (mapInstance: google.maps.Map) => {
        setMap(mapInstance)

        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYLINE,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT,
                drawingModes: [
                    google.maps.drawing.OverlayType.POLYLINE,
                    google.maps.drawing.OverlayType.MARKER,
                ]
            },
            polylineOptions: {
                strokeColor: "#3b82f6",
                strokeWeight: 3,
                editable: true,
                geodesic: true,
            }
        })

        drawingManager.setMap(mapInstance)
        google.maps.event.addListener(
            drawingManager,
            "overlaycomplete",
            async (event: google.maps.drawing.OverlayCompleteEvent) => {
                if (event.type === google.maps.drawing.OverlayType.POLYLINE) {
                    const polyline = event.overlay as google.maps.Polyline;
                    const path: google.maps.LatLngLiteral[] = polyline
                        .getPath()
                        .getArray()
                        .map((latLng: google.maps.LatLng) => ({
                            lat: latLng.lat(),
                            lng: latLng.lng(),
                        }));

                    const newRoute: PolylineData = {
                        id: Date.now(),
                        path,
                        color: routeColor,
                    }

                    setPolylines((prev) => [...prev, newRoute]);

                    polyline.setMap(null);
                }
            });
    }

    return (
        <div className="flex justify-center py-6">
            <div className="w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">

                {!isLoaded && (
                    <div className="relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                        <span className="absolute mt-16 text-gray-700 dark:text-gray-200">Loading map...</span>
                    </div>
                )}

                {isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                        onClick={handleMapClick}
                        onLoad={onMapLoad}
                        options={{
                            styles: darkMode ? darkStyle : lightStyle,
                            disableDefaultUI: true,
                            zoomControl: true,
                            gestureHandling: "greedy"
                        }}
                    >
                        {stops.map((stop, idx) => (
                            <Marker
                                key={idx}
                                position={stop.position}
                                title={stop.name}
                                label={{
                                    text: `${idx + 1}`,
                                    color: darkMode ? "#000000" : "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                }}
                                icon={{
                                    path: google.maps.SymbolPath.CIRCLE,
                                    scale: 12,
                                    fillColor: darkMode ? "#FFD700" : "#2196F3",
                                    fillOpacity: 1,
                                    strokeWeight: 2,
                                    strokeColor: darkMode ? "#fff" : "#000",
                                }}
                            />
                        ))}

                        {polylines.map((route, idx) => {
                            return (
                                <Polyline
                                    key={idx}
                                    path={route.path}
                                    options={{
                                        strokeColor: route.color,
                                        strokeOpacity: 1,
                                        strokeWeight: 3,
                                        editable: true,
                                        geodesic: true,
                                    }}
                                />

                            )
                        })}

                    </GoogleMap>
                )}
            </div>

            <Dialog
                open={modalOpen}
                onOpenChange={(open) => {
                    setModalOpen(open)
                    if (!open) setNewStop(null)
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Stop</DialogTitle>
                    </DialogHeader>
                    <Input
                        placeholder="Enter stop name"
                        value={newStop?.name || ""}
                        onChange={(e) =>
                            setNewStop((prev) => (prev ? { ...prev, name: e.target.value } : null))
                        }
                    />
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setModalOpen(false)
                                setNewStop(null)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSaveStop}
                            disabled={!newStop?.name.trim()}
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}