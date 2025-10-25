export interface Driver {
    drivers_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    avatar_url?: string;
    status: 'active' | 'pending' | 'inactive' | 'suspended';
    joinDate: string;
    vehicle_type?: string;
    license_plate: string;
    route: { first_terminal: string; second_terminal: string } | null;
    rating: number;
    total_trips: number;
    documents: {
        license: boolean;
        registration: boolean;
        insurance: boolean;
        franchise: boolean;
    };
}

export interface NewDriver {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    vehicleType: string;
    licensePlate: string;
    route: string;
    documents?: {
        driverLicense?: File | null;
        vehicleRegistration?: File | null;
        insurance?: File | null;
        franchise?: File | null;
    };
}

export interface Route {
    id: number;
    first_terminal: string;
    second_terminal: string;
}
