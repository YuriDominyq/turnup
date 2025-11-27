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
    color: string,
    type: "main" | "festival" | "detour" | "emergency";
}

export interface Stop {
    name: string;
    lat: number;
    lng: number;
}

interface TableRoutesProps {
    routes: Route[];
    onView?: (route: Route) => void
    onDelete: (id: number) => void
}


type RouteType = "main" | "festival" | "detour" | "emergency";

export default function TableRoute({ routes, onView, onDelete }: TableRoutesProps) {
    const [selectedType, setSelectedType] = useState<RouteType>("main");

    const filteredRoutes = routes.filter(route => route.type === selectedType);

    if (routes.length === 0) {
        return (
            <div className="text-center py-8">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-semibold text-foreground">No Routes</h3>
                <p className="mt-1 text-sm text-muted-foreground">Get started by creating your first route.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">

            {/* Dropdown to select route type */}
            <div className="max-w-4xl mx-auto">
                <Select value={selectedType} onValueChange={(val) => setSelectedType(val as RouteType)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Route Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="main">Main</SelectItem>
                        <SelectItem value="festival">Festival</SelectItem>
                        <SelectItem value="detour">Detour</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {filteredRoutes.length === 0 && (
                <div className="text-center py-8">
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-sm font-semibold text-foreground">No Routes</h3>
                    <p className="mt-1 text-sm text-muted-foreground">No {selectedType} routes available.</p>
                </div>
            )}
            {filteredRoutes.map((route) => (
                <Card
                    key={route.id}
                    className="shadow-md max-w-5xl mx-auto"
                    style={{ borderLeftColor: route.color }}
                >
                    <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <span className="truncate">{route.firstTerminal}</span>
                                    <span className="text-muted-foreground">→</span>
                                    <span className="truncate">{route.secondTerminal}</span>
                                </CardTitle>
                                <div className="flex items-center gap-2 mt-2">
                                    <Badge variant='secondary' className="text-xs">
                                        {route.stops.length} stops
                                    </Badge>
                                    <div
                                        className="w-4 h-4 rounded-full border border-border"
                                        style={{ backgroundColor: route.color }}
                                        aria-label={`Route color: ${route.color}`}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-shrink-0 gap-2">
                                {onView && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => onView(route)}
                                        className="whitespace-nowrap"
                                    >
                                        <Eye className="w-4 h-4 mr-1" />
                                        View
                                    </Button>
                                )}
                                <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => onDelete(route.id)}
                                    className="whitespace-nowrap"
                                >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/30">
                                        <TableHead className="font-semibold">#</TableHead>
                                        <TableHead className="font-semibold">Stop Name</TableHead>
                                        <TableHead className="font-semibold">Coordinates</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {route.stops.map((stop, idx) => (
                                        <TableRow key={idx} className="hover:bg-muted/20">
                                            <TableCell className="font-medium text-muted-foreground">
                                                {idx + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {stop.name || 'Unnamed Stop'}
                                            </TableCell>
                                            <TableCell className="font-mono text-sm">
                                                {stop.lat != null && stop.lng != null
                                                    ? `${Number(stop.lat).toFixed(5)}, ${Number(stop.lng).toFixed(5)}`
                                                    : 'No coordinates'
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}