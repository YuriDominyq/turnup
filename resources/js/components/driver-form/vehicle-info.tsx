import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Car } from 'lucide-react';
import { NewDriver } from '@/types/driver';
import { Route } from '@/types/company';
import axios from 'axios';

interface VehicleInfoStepProps {
    newDriver: NewDriver;
    setNewDriver: (driver: NewDriver) => void;
}

interface Errors {
    vehicleType?: string;
    licensePlate?: string;
    route?: string;
}

export const VehicleInfoStep: React.FC<VehicleInfoStepProps> = ({ newDriver, setNewDriver }) => {
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        axios.get('/routes')
            .then(res => setRoutes(res.data))
            .catch(err => console.error(err))
    }, []);

    const validateField = (field: string, value: string) => {
        let error = '';

        switch (field) {
            case 'vehicleType':
                if (!value || value.trim() === '') {
                    error = 'Please select a jeepney type.';
                }
                break;

            case 'licensePlate':
                if (!value.trim()) {
                    error = 'License plate is required.';
                } else if (!/^[A-Z]{2,3}-?\d{3,4}$/i.test(value.replace(/\s+/g, ''))) {
                    error = 'Invalid license plate format.';
                }
                break;

            case 'route':
                if (!value || value.trim() === '') {
                    error = 'Please select a route assignment.';
                }
                break;
        }

        return error;
    };

    const handleBlur = (field: string) => {
        setTouched({ ...touched, [field]: true });
        const error = validateField(field, newDriver[field as keyof NewDriver] as string);
        setErrors({ ...errors, [field]: error });
    };

    const handleInputChange = (field: string, value: string) => {
        setNewDriver({ ...newDriver, [field]: value });

        if (touched[field]) {
            const error = validateField(field, value);
            setErrors({ ...errors, [field]: error });
        }
    }

    const handleSelectChange = (field: string, value: string) => {
        setNewDriver({ ...newDriver, [field]: value });
        setTouched({ ...touched, [field]: true });

        const error = validateField(field, value);
        setErrors({ ...errors, [field]: error });
    }
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <Car className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Vehicle & Route Details</h3>
            </div>

            <div className="space-y-2">
                <Label htmlFor="vehicleType">Jeepney Type *</Label>
                <Select
                    value={newDriver.vehicleType}
                    onValueChange={(value) => handleSelectChange('vehicleType', value)}
                >
                    <SelectTrigger
                        className={errors.vehicleType && touched.vehicleType ? 'border-red-500 focus:ring-red-500' : ''}
                    >
                        <SelectValue placeholder="Select jeepney type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="modern-jeepney">Modern Jeepney (Electric)</SelectItem>
                        <SelectItem value="euro4-jeepney">Euro 4 Jeepney</SelectItem>
                        <SelectItem value="mini-bus">Mini Bus</SelectItem>
                    </SelectContent>
                </Select>

                {errors.vehicleType && touched.vehicleType && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.vehicleType}</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="licensePlate">License Plate *</Label>
                <Input
                    id="licensePlate"
                    value={newDriver.licensePlate}
                    onChange={(e) => handleInputChange('licensePlate', e.target.value.toUpperCase())}
                    onBlur={() => handleBlur('licensePlate')}
                    placeholder="BAC-1234"
                    maxLength={8}
                    className={errors.licensePlate && touched.licensePlate ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.licensePlate && touched.licensePlate && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.licensePlate}</span>
                    </div>
                )}
                {!errors.licensePlate && (
                    <p className='text-xs text-muted-foreground'>
                        Format: ABC-1234 or AB-1234
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="route">Assigned Route *</Label>
                <Select
                    value={newDriver.route}
                    onValueChange={(value) => handleSelectChange('route', value)}
                >
                    <SelectTrigger
                        className={errors.route && touched.route ? 'border-red-500 focus:ring-red-500' : ''}
                    >
                        <SelectValue placeholder="Select route assignment" />
                    </SelectTrigger>
                    <SelectContent>
                        {routes.map((r) => (
                            <SelectItem key={r.id} value={r.id.toString()}>
                                {r.first_terminal} ↔ {r.second_terminal}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {errors.route && touched.route && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.route}</span>
                    </div>
                )}
            </div>
        </div >
    )
};