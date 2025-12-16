import React, { useEffect, useState } from 'react';
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
            case 'route':
                if (!value || value.trim() === '') {
                    error = 'Please select a route assignment.';
                }
                break;
        }

        return error;
    };

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
                <h3 className="text-lg font-semibold">Route Details</h3>
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