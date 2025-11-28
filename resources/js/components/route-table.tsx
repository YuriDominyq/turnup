import { Eye, MapPin, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export interface Route {
    id: number;
    firstTerminal: string;
    secondTerminal: string;
    stops: Stop[];
    polyline: { lat: number, lng: number }[];
    color: string;
    type: "main" | "festival" | "detour" | "emergency";
    disabled?: boolean;
}

export interface Stop {
    name: string;
    lat: number;
    lng: number;
}

interface TableRoutesProps {
    routes: Route[];
    onView?: (route: Route) => void;
    onDelete: (id: number) => void;
    onToggleDisable?: (id: number) => void;
}

type RouteType = "main" | "festival" | "detour" | "emergency";

export default function TableRoute({ routes, onView, onDelete, onToggleDisable }: TableRoutesProps) {

    // Group routes by terminal pair
    const groupedRoutes = routes.reduce<Record<string, Route[]>>((acc, route) => {
        const key = `${route.firstTerminal}→${route.secondTerminal}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(route);
        return acc;
    }, {});

    // Global selected variant
    const [globalVariant, setGlobalVariant] = useState<RouteType>("main");

    if (routes.length === 0) {
        return (
            <div className="text-center py-8">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-semibold text-foreground">No Routes</h3>
                <p className="mt-1 text-sm text-muted-foreground">Get started by creating your first route.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">

            {/* GLOBAL SELECT */}
            <div className="flex justify-end max-w-5xl mx-auto mb-4">
                <Select value={globalVariant} onValueChange={(value) => setGlobalVariant(value as RouteType)}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Route Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="main">Main Route</SelectItem>
                        <SelectItem value="festival">Festival Route</SelectItem>
                        <SelectItem value="detour">Detour Route</SelectItem>
                        <SelectItem value="emergency">Emergency Route</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {Object.entries(groupedRoutes).map(([terminals, variants]) => {
                if (variants.length === 0) return null;

                // Pick variant based on global select OR default to first variant
                const currentRoute =
                    variants.find(v => v.type === globalVariant) ||
                    variants[0];

                return (
                    <Card
                        key={terminals}
                        className="shadow-md max-w-5xl mx-auto"
                        style={{ borderLeft: `6px solid ${currentRoute.color}` }}
                    >
                        <CardHeader className="pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <span className="truncate">{currentRoute.firstTerminal}</span>
                                    <span className="text-muted-foreground">→</span>
                                    <span className="truncate">{currentRoute.secondTerminal}</span>
                                </CardTitle>

                                <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="secondary" className="text-xs">{currentRoute.stops.length} stops</Badge>
                                    <div
                                        className="w-4 h-4 rounded-full border border-border"
                                        style={{ backgroundColor: currentRoute.color }}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                {onView && (
                                    <Button size="sm" variant="outline" onClick={() => onView(currentRoute)}>
                                        <Eye className="w-4 h-4 mr-1" /> View
                                    </Button>
                                )}

                                {onToggleDisable && (
                                    <Button
                                        size="sm"
                                        variant={currentRoute.disabled ? "outline" : "secondary"}
                                        onClick={() => onToggleDisable(currentRoute.id)}
                                    >
                                        {currentRoute.disabled ? "Enable" : "Disable"}
                                    </Button>
                                )}

                                <Button size="sm" variant="destructive" onClick={() => onDelete(currentRoute.id)}>
                                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                                </Button>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/30">
                                            <TableHead>#</TableHead>
                                            <TableHead>Stop Name</TableHead>
                                            <TableHead>Coordinates</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {currentRoute.stops.map((stop, idx) => (
                                            <TableRow key={idx} className="hover:bg-muted/20">
                                                <TableCell className="font-medium text-muted-foreground">{idx + 1}</TableCell>
                                                <TableCell className="font-medium">{stop.name || "Unnamed Stop"}</TableCell>
                                                <TableCell className="font-mono text-sm">
                                                    {stop.lat && stop.lng
                                                        ? `${stop.lat.toFixed(5)}, ${stop.lng.toFixed(5)}`
                                                        : "No coordinates"}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
