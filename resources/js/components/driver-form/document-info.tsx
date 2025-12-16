import React from 'react';
import { CheckCircle } from 'lucide-react';
import { NewDriver } from '@/types/driver';
import { Button } from '@/components/ui/button';

interface ConfirmationStepProps {
    newDriver: NewDriver;
    onRegister: () => void;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onRegister }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-36 w-36 bg-green-100 rounded-full"></div>
                <CheckCircle className="h-28 w-28 text-green-600 relative" />
            </div>

            <h2 className="text-3xl font-bold text-green-700 text-center">
                Driver is Ready to Register
            </h2>

            <Button size="lg" onClick={onRegister}>
                Register Driver
            </Button>
        </div>
    );
};
