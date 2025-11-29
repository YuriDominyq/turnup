import { Eye, MapPin, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export interface Route {
    id: number;
    firstTerminal: string;
    secondTerminal: string;
    stops: Stop[];
    polyline: { lat: number; lng: number }[];
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
    if (routes.length === 0) {
        return (
            <div className="text-center py-8">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-semibold text-foreground">No Routes</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    Get started by creating your first route.
                </p>
            </div>
        );
    }

    // Group by terminal pair: T1 → T2
    const groupedRoutes = routes.reduce<Record<string, Route[]>>((acc, route) => {
        const key = `${route.firstTerminal}→${route.secondTerminal}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(route);
        return acc;
    }, {});

    const allTypes: RouteType[] = ["main", "festival", "detour", "emergency"];

    return (
        <div className="space-y-6">
            {Object.entries(groupedRoutes).map(([terminals, variants]) => {
                if (variants.length === 0) return null;

                // Default selected tab = first available variant for this terminal group
                const defaultVariant = variants[0].type;

                return (
                    <Card
                        key={terminals}
                        className="shadow-md max-w-5xl mx-auto"
                        style={{ borderLeft: `6px solid ${variants[0].color}` }}
                    >
                        <CardHeader>
                            <CardTitle className="text-lg">{terminals}</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Tabs defaultValue={defaultVariant} className="w-full">

                                {/* ROUTE TYPE TABS */}
                                <TabsList className="grid grid-cols-4 w-full mb-4">
                                    {allTypes.map(type =>
                                        variants.some(v => v.type === type) && (
                                            <TabsTrigger key={type} value={type} className="capitalize">
                                                {type}
                                            </TabsTrigger>
                                        )
                                    )}
                                </TabsList>

                                {/* CONTENT FOR EACH VARIANT */}
                                {variants.map(route => (
                                    <TabsContent key={route.id} value={route.type}>

                                        {/* HEADER: stops + buttons */}
                                        <div className="flex justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">{route.stops.length} stops</Badge>
                                                <div
                                                    className="w-4 h-4 rounded-full border"
                                                    style={{ backgroundColor: route.color }}
                                                />
                                            </div>

                                            <div className="flex gap-2">
                                                {onView && (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => onView(route)}
                                                    >
                                                        <Eye className="w-4 h-4 mr-1" /> View
                                                    </Button>
                                                )}

                                                {onToggleDisable && (
                                                    <Button
                                                        size="sm"
                                                        variant={route.disabled ? "outline" : "secondary"}
                                                        onClick={() => onToggleDisable(route.id)}
                                                    >
                                                        {route.disabled ? "Enable" : "Disable"}
                                                    </Button>
                                                )}

                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => onDelete(route.id)}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                                                </Button>
                                            </div>
                                        </div>

                                        {/* TABLE */}
                                        <div className="rounded-md border max-h-64 overflow-y-auto">
                                            <Table>
                                                <TableHeader className="sticky top-0 z-10 bg-background">
                                                    <TableRow className="bg-muted/30">
                                                        <TableHead>#</TableHead>
                                                        <TableHead>Stop Name</TableHead>
                                                        <TableHead>Coordinates</TableHead>
                                                    </TableRow>
                                                </TableHeader>

                                                <TableBody>
                                                    {route.stops.map((stop, idx) => (
                                                        <TableRow key={idx} className="hover:bg-muted/20">
                                                            <TableCell className="text-muted-foreground">
                                                                {idx + 1}
                                                            </TableCell>
                                                            <TableCell>{stop.name || "Unnamed Stop"}</TableCell>
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

                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
