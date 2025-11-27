import Map, { PolylineData } from "@/components/map-route";
import TableRoute, { Route } from "@/components/route-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, MapPin, RouteIcon, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MapGuideModal from "@/components/map-guide-modal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BackendStop {
    name: string;
    lat: string | number;
    lng: string | number;
}

interface BackendRoute {
    id: number;
    first_terminal: string;
    second_terminal: string;
    polyline: string | { lat: string | number; lng: string | number } | { lat: string | number; lng: string | number }[];
    stops: BackendStop[];
    color?: string;
    type?: "main" | "festival" | "detour" | "emergency";
}

interface SnappedPoint {
    location: {
        latitude: number
        longitude: number
    }
    originalIndex?: number
    placeId?: string
}

interface SnapToRoadResponse {
    snappedPoints?: SnappedPoint[];
}

interface LatLng {
    lat: number;
    lng: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Map Route',
        href: '/maproute',
    },
];

export default function MapRoute() {

    const [routes, setRoutes] = useState<Route[]>([])
    const [firstTerminal, setFirstTerminal] = useState("")
    const [secondTerminal, setSecondTerminal] = useState("")
    const [stops, setStops] = useState<{ name: string; position: google.maps.LatLngLiteral }[]>([]);
    const [showTable, setShowTable] = useState(true);
    const [clearMap, setClearMap] = useState(false)
    const [polylines, setPolylines] = useState<PolylineData[]>([])
    const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
    const [routeColor, setRouteColor] = useState("#3388ff");
    const [routeType, setRouteType] = useState("main");


    useEffect(() => {
        axios.get('https://turnup-admin.com/sanctum/csrf-cookie', { withCredentials: true })
            .then(() => console.log('CSRF cookie set'))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const res = await fetch('/routes');
                const data: BackendRoute[] = await res.json();

                const formattedData = await Promise.all(data.map(async (route, index) => {

                    let polyline: LatLng[] = [];

                    if (typeof route.polyline === "string") {
                        try {
                            const parsed: BackendStop[] = JSON.parse(route.polyline);
                            polyline = parsed.map(p => ({ lat: Number(p.lat), lng: Number(p.lng) }));
                        } catch {
                            polyline = [];
                        }
                    } else if (Array.isArray(route.polyline)) {
                        polyline = route.polyline.map(p => ({ lat: Number(p.lat), lng: Number(p.lng) }));
                    } else if (route.polyline) {
                        polyline = [{ lat: Number((route.polyline as BackendStop).lat), lng: Number((route.polyline as BackendStop).lng) }];
                    }

                    const snappedPolyline = await snapToRoad(
                        polyline.map(p => ({ lat: Number(p.lat), lng: Number(p.lng) }))
                    )

                    return {
                        id: route.id ?? index,
                        firstTerminal: route.first_terminal,
                        secondTerminal: route.second_terminal,
                        polyline: snappedPolyline,
                        stops: route.stops.map(stop => ({
                            name: stop.name,
                            lat: Number(stop.lat),
                            lng: Number(stop.lng)
                        })),
                        color: route.color ?? "#3388ff",
                        type: route.type ?? "main",
                    }
                }))

                setRoutes(formattedData)
            } catch (err) {
                console.error("Failed to fetch routes", err)
            }
        }

        fetchRoutes();
    }, [])

    const addRoute = async () => {
        if (!firstTerminal || !secondTerminal) {
            toast.error("Please fill in both terminals");
            return;
        }

        if (stops.length < 2) {
            toast.error("Please add at least 2 stops before saving the route");
            return;
        }

        try {

            await axios.get("https://turnup-admin.com/sanctum/csrf-cookie", { withCredentials: true });

            const body = {
                first_terminal: firstTerminal,
                second_terminal: secondTerminal,
                polyline: polylines[0]?.path ?? [],
                stops: stops.map(s => ({ name: s.name, lat: s.position.lat, lng: s.position.lng })),
                color: routeColor,
                type: routeType,
            }

            const response = await axios.post<BackendRoute>("https://turnup-admin.com/routes", body, { withCredentials: true });

            let polyline: LatLng[] = [];

            if (typeof response.data.polyline === "string") {
                try {
                    const parsed: BackendStop[] = JSON.parse(response.data.polyline);
                    polyline = parsed.map(p => ({ lat: Number(p.lat), lng: Number(p.lng) }));
                } catch {
                    polyline = [];
                }
            } else if (Array.isArray(response.data.polyline)) {
                polyline = response.data.polyline.map(p => ({ lat: Number(p.lat), lng: Number(p.lng) }));
            } else if (response.data.polyline) {
                polyline = [{ lat: Number((response.data.polyline as BackendStop).lat), lng: Number((response.data.polyline as BackendStop).lng) }];
            }

            const formattedRoute: Route = {
                id: response.data.id ?? Date.now(),
                firstTerminal: response.data.first_terminal,
                secondTerminal: response.data.second_terminal,
                polyline: polyline.map(p => ({
                    lat: Number(p.lat),
                    lng: Number(p.lng),
                })),
                stops: response.data.stops.map(s => ({
                    name: s.name,
                    lat: Number(s.lat),
                    lng: Number(s.lng),
                })),
                color: "#3388ff",
                type: response.data.type ?? "main",
            };

            setRoutes(prev => [...prev, formattedRoute])

            setFirstTerminal("")
            setSecondTerminal("")
            setStops([])

            toast.success("Route added successfully")
        } catch (err) {
            toast.error("Failed to save route.")
            console.log(err)
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`https://turnup-admin.com/routes/${id}`, { withCredentials: true })
            setRoutes((prev) => prev.filter((r) => r.id !== id))

            if (selectedRoute?.id === id) {
                setSelectedRoute(null)
                setStops([])
                setPolylines([])
            }

            toast.success("Delete Route Successfully")
        } catch (err) {
            console.error("Failed to delete route", err)
            toast.error("Failed to delete route.")
        }
    }

    const snapToRoad = async (path: { lat: number; lng: number }[]) => {
        if (path.length === 0) return [];

        const validPath = path.filter(p => !isNaN(p.lat) && !isNaN(p.lng));
        if (validPath.length === 0) return [];

        const chunkArray = (arr: { lat: number; lng: number }[], size: number) => {
            const chunks: { lat: number; lng: number }[][] = [];
            for (let i = 0; i < arr.length; i += size) {
                chunks.push(arr.slice(i, i + size));
            }
            return chunks;
        };

        const chunks = chunkArray(validPath, 100);

        let snappedResults: { lat: number; lng: number }[] = [];

        for (const chunk of chunks) {
            const locations = chunk.map(p => `${p.lat},${p.lng}`).join('|');

            const url = `https://roads.googleapis.com/v1/snapToRoads?path=${locations}&interpolate=true&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;

            const res = await fetch(url);
            const data: SnapToRoadResponse = await res.json();

            if (data.snappedPoints) {
                const mapped = data.snappedPoints.map(p => ({
                    lat: p.location.latitude,
                    lng: p.location.longitude,
                }));
                snappedResults = [...snappedResults, ...mapped];
            }
        }

        return snappedResults;
    };

    const handleToggleDisable = async (routeId: number) => {
        try {
            await axios.patch(`https://turnup-admin.com/routes/${routeId}/toggle-disable`, {}, { withCredentials: true });

            setRoutes(prev =>
                prev.map(r =>
                    r.id === routeId ? { ...r, disabled: !r.disabled } : r
                )
            );

            toast.success("Route status updated");
        } catch (err) {
            console.error(err);
            toast.error("Failed to update route status");
        }
    };


    const isFormValid = firstTerminal && secondTerminal && stops.length >= 2;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Map Route" />

            {/* Route Name Inputs */}
            <Card className="w-full max-w-4xl mx-auto m-6">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        Create Route
                        <Badge variant={isFormValid ? "default" : "secondary"}>
                            {stops.length} stops
                        </Badge>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first_terminal">First Terminal</Label>
                            <Input
                                id="first_terminal"
                                name="firstTerminal"
                                placeholder="First Terminal"
                                value={firstTerminal}
                                onChange={(e) => setFirstTerminal(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="second_terminal">Second Terminal</Label>
                            <Input
                                id="second_terminal"
                                name="secondTerminal"
                                placeholder="Second Terminal"
                                value={secondTerminal}
                                onChange={(e) => setSecondTerminal(e.target.value)}
                            />

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="route_color">Route Color</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="color"
                                    id="route_color"
                                    value={routeColor}
                                    onChange={(e) => setRouteColor(e.target.value)}
                                    className="w-12 h-10 p-1 cursor-pointer"
                                />
                                <Input
                                    type="text"
                                    value={routeColor}
                                    onChange={(e) => setRouteColor(e.target.value)}
                                    placeholder="#3b82f6"
                                    className="flex-1"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Route Type</Label>
                            <Select value={routeType} onValueChange={(value) => setRouteType(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select route type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="main">Main Route</SelectItem>
                                    <SelectItem value="festival">Festival Route</SelectItem>
                                    <SelectItem value="detour">Detour Route</SelectItem>
                                    <SelectItem value="emergency">Emergency Route</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Status Message */}
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                        <div className={`w-2 h-2 rounded-full ${stops.length < 2 ? 'bg-orange-400' : 'bg-green-400'}`}></div>
                        <p className="text-sm text-muted-foreground">
                            {stops.length < 2
                                ? 'Add at least 2 stops to save and draw routes.'
                                : 'Ready to save the route'
                            }
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            onClick={addRoute}
                            disabled={!firstTerminal || !secondTerminal || stops.length < 2}
                        >
                            Save Route
                        </Button>

                        <Button
                            variant="destructive"
                            onClick={() => setClearMap(prev => !prev)}
                            disabled={stops.length === 0}
                        >
                            Clear Route
                        </Button>
                        <MapGuideModal />
                    </div>

                </CardContent>
            </Card>

            {selectedRoute && (
                <Card className="w-full max-w-4xl mx-auto mt-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="text-blue-500" size={18} />
                            Route: {selectedRoute.firstTerminal} → {selectedRoute.secondTerminal}
                        </CardTitle>
                    </CardHeader>
                </Card>
            )}

            {/* Map */}
            <div className="mt-6">
                <Map
                    stops={stops}
                    setStops={setStops}
                    clearTrigger={clearMap}
                    polylines={polylines}
                    setPolylines={setPolylines}
                    savedPolylines={selectedRoute ? [{
                        id: selectedRoute.id,
                        path: selectedRoute.polyline,
                        color: selectedRoute.color ?? "#3388ff"
                    }] : []}
                    snapToRoad={snapToRoad}
                    routeColor={routeColor}
                />
            </div>

            <div className="m-4">
                <Button onClick={() => setShowTable(!showTable)}>
                    {showTable ? "Hide Routes Table" : "Show Routes Table"}
                </Button>
            </div>

            {/* Table */}
            {showTable &&
                <TableRoute
                    routes={routes}
                    onView={(route) => {
                        if (selectedRoute?.id === route.id) {
                            setSelectedRoute(null)
                            setStops([])
                            setPolylines([])
                        } else {
                            setStops(route.stops.map(s => ({
                                name: s.name,
                                position: { lat: s.lat, lng: s.lng }
                            })))
                            setPolylines([{ id: route.id, path: route.polyline, color: route.color }])
                            setSelectedRoute(route)
                        }
                    }}
                    onDelete={handleDelete}
                    onToggleDisable={handleToggleDisable}
                />
            }

            {/* Help Section */}
            <Card className="m-10">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Info size={18} />
                        Quick Start Guide
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin size={16} className="text-blue-500" />
                                <h3 className="font-medium text-base">Creating a Route</h3>
                            </div>
                            <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground ml-6">
                                <li>Enter start and end terminal names in the form</li>
                                <li>Choose a color for your route visualization</li>
                                <li>Click on the map to add stops along your route</li>
                                <li>Drag stops to adjust their positions if needed</li>
                                <li>Click "Save Route" when you have at least 2 stops</li>
                            </ol>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-3">
                                <Settings size={16} className="text-green-500" />
                                <h3 className="font-medium text-base">Managing Routes</h3>
                            </div>
                            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground ml-6">
                                <li>Use "Show Routes" to view all your saved routes</li>
                                <li>Click "View" to display a specific route on the map</li>
                                <li>Use "Delete" to remove routes you no longer need</li>
                                <li>Routes are displayed with your chosen color on the map</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center gap-2 mb-3">
                            <RouteIcon size={16} className="text-purple-500" />
                            <h3 className="font-medium text-base">Tips & Best Practices</h3>
                        </div>
                        <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li>Add descriptive terminal names for easy identification</li>
                            <li>Use different colors for each route to distinguish them</li>
                            <li>Place stops in logical order along your intended path</li>
                            <li>Test your route by viewing it before finalizing</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </AppLayout >
    )
}