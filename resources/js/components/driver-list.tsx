import { Edit, Eye, Mail, MapPin, Phone, Star, Trash2, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Driver } from "@/types/driver";
import axios from "axios";
import { toast } from "react-toastify";
;

interface DriverListProps {
    filteredDrivers: Driver[];
    getStatusBadge: (status: Driver["status"]) => { color: string };
    onUpdateDriver: (updatedDriver: Driver) => void;
}

const getInitials = (first?: string, last?: string) =>
    `${first?.charAt(0) || ''}${last?.charAt(0) || ''}`.toUpperCase();

export default function DriverList({ filteredDrivers, getStatusBadge, onUpdateDriver }: DriverListProps) {

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/operator/driver/${id}`);
            onUpdateDriver({ drivers_id: id } as Driver);

            toast.success('Delete Driver Successfully');
        } catch (error) {
            console.error("Failed to delete driver", error);
        }
    }

    const handleApprove = async (id: string) => {
        try {
            const response = await axios.post(`/operator/driver/${id}/approve`);
            onUpdateDriver(response.data.driver);

            toast.success('Approve Driver Successfully');
        } catch (error) {
            console.error("Failed to approve driver", error);
        }
    };

    const handleReject = async (id: string) => {
        try {
            const response = await axios.post(`/operator/driver/${id}/reject`);
            onUpdateDriver(response.data.driver);

            toast.success('Reject Driver Successfully');
        } catch (error) {
            console.error("Failed to reject driver", error);
        }
    };

    if (filteredDrivers.length === 0) {
        return (
            <div className="p-12 text-center text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No drivers found matching your search or filter</p>
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Jeepney Drivers ({filteredDrivers.length})</CardTitle>
                <CardDescription>Manage modernized jeepney drivers and route assignments</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {filteredDrivers.map((driver) => (
                        <div key={driver.drivers_id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={driver.avatar_url} />
                                    <AvatarFallback className="bg-primary text-primary-foreground">
                                        {getInitials(driver.first_name, driver.last_name)}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{driver.first_name} {driver.last_name}</h3>
                                        <Badge className={getStatusBadge(driver.status).color}>
                                            {driver.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Mail className="h-3 w-3" />
                                            {driver.email}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Phone className="h-3 w-3" />
                                            {driver.phone}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {driver.route?.first_terminal} ↔ {driver.route?.second_terminal}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-sm font-medium">{driver.license_plate}</div>
                                </div>

                                {driver.status === 'active' && (
                                    <div className="text-right">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-500" />
                                            <span className="text-sm font-medium">{driver.rating}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">{driver.total_trips} trips</div>
                                    </div>
                                )}

                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost" size="sm">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Delete Driver Account</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you sure you want to delete {driver.first_name} {driver.last_name}'s account? This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleDelete(driver.drivers_id)}
                                                >
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    {driver.status === 'pending' && (
                                        <div className="flex items-center gap-2">
                                            <Button variant="default" size="sm" onClick={() => handleApprove(driver.drivers_id)}>Approve</Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleReject(driver.drivers_id)}>Reject</Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}