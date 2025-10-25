import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, User } from 'lucide-react';
import { NewDriver } from '@/types/driver';

interface PersonalInfoStepProps {
    newDriver: NewDriver;
    setNewDriver: (driver: NewDriver) => void;
}

interface Errors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ newDriver, setNewDriver }) => {

    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (field: string, value: string) => {
        let error = '';

        switch (field) {
            case 'firstName':
                if (!value.trim()) {
                    error = 'First name is required';
                } else if (value.trim().length < 2) {
                    error = 'Name must be at least 2 characters';
                }
                break;

            case 'lastName':
                if (!value.trim()) {
                    error = 'Last name is required';
                } else if (value.trim().length < 2) {
                    error = 'Name must be at least 2 characters';
                }
                break;

            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Please enter a valid email address';
                }
                break;

            case 'phone':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!/^(\+63|0)?[0-9]{10}$/.test(value.replace(/\s+/g, ''))) {
                    error = 'Please enter a valid Philippine phone number';
                }
                break;

            case 'password':
                if (!value) {
                    error = 'Password is required';
                } else if (value.length < 8) {
                    error = 'Password must be at least 8 characters';
                } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(value)) {
                    error = 'Password must contain both letters and numbers';
                }
                break;

            case 'confirmPassword':
                if (!value) {
                    error = 'Please confirm your password';
                } else if (value !== newDriver.password) {
                    error = 'Passwords do not match';
                }
                break;
        }
        return error;
    };

    const handleBlur = (field: string) => {
        setTouched({ ...touched, [field]: true });
        const error = validateField(field, newDriver[field as keyof NewDriver] as string);
        setErrors({ ...errors, [field]: error });
    }

    const handleChange = (field: string, value: string) => {
        setNewDriver({ ...newDriver, [field]: value });

        if (touched[field]) {
            const error = validateField(field, value);
            setErrors({ ...errors, [field]: error });
        }

        if (field === 'password' && touched['confirmPassword']) {
            const confirmError = validateField('confirmPassword', newDriver.confirmPassword);
            setErrors({ ...errors, [field]: '', confirmPassword: confirmError });
        }
    };


    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                    id="firstName"
                    value={newDriver.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    onBlur={() => handleBlur('firstName')}
                    placeholder="Enter first name"
                    className={errors.firstName && touched.firstName ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.firstName && touched.firstName && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.firstName}</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                    id="lastName"
                    value={newDriver.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    onBlur={() => handleBlur('lastName')}
                    placeholder="Enter last name"
                    className={errors.lastName && touched.lastName ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />

                {errors.lastName && touched.lastName && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.lastName}</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                    id="email"
                    type="email"
                    value={newDriver.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="Enter email address"
                    className={errors.email && touched.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />

                {errors.email && touched.email && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.email}</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                    id="phone"
                    value={newDriver.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+63 917 123 4567"
                    className={errors.phone && touched.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />

                {errors.phone && touched.phone && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.phone}</span>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                    id="password"
                    type="password"
                    value={newDriver.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder="Create password"
                    className={errors.password && touched.password ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.password && touched.password ? (
                    <div className="flex items-center gap-1 text-sm text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.password}</span>
                    </div>
                ) : (
                    <p className="text-xs text-muted-foreground">
                        Min. 8 characters with letters and numbers
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    value={newDriver.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    onBlur={() => handleBlur('confirmPassword')}
                    placeholder="Confirm password"
                    className={errors.confirmPassword && touched.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />

                {errors.confirmPassword && touched.confirmPassword && (
                    <div className='flex items-center gap-1 text-sm text-red-500'>
                        <AlertCircle className='h-3 w-3' />
                        <span>{errors.confirmPassword}</span>
                    </div>
                )}
            </div>
        </div>
    )
};