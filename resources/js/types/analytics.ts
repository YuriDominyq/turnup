export interface TopDriver {
    drivers_id: number;
    first_name: string;
    last_name: string;
    rating: number;
}

export interface DriversPerRoute {
    route_name: string;
    driverCount: number;
}

export interface DriverStatus {
    name: string;
    value: number;
}
