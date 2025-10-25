import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { NewDriver } from '@/types/driver';
import { StepIndicator } from './step-indicator';
import { PersonalInfoStep } from './driver-form/personal-info';
import { VehicleInfoStep } from './driver-form/vehicle-info';
import { DocumentsStep } from './driver-form/document-info';
import axios from 'axios';
import { toast } from 'react-toastify';

interface CreateDriverDialogProps {
    onCreateDriver: (driver: NewDriver) => void;
}

export const CreateDriverDialog: React.FC<CreateDriverDialogProps> = ({ onCreateDriver }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [newDriver, setNewDriver] = useState<NewDriver>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        vehicleType: '',
        licensePlate: '',
        route: ''
    });

    const handleCreateDriver = async (driver: NewDriver) => {
        try {
            const formData = new FormData();
            formData.append('first_name', driver.firstName);
            formData.append('last_name', driver.lastName);
            formData.append('email', driver.email);
            formData.append('phone', driver.phone);
            formData.append('password', driver.password);
            formData.append('password_confirmation', driver.confirmPassword);
            formData.append('vehicle_type', driver.vehicleType);
            formData.append('license_plate', driver.licensePlate);
            formData.append('route_id', driver.route);

            if (driver.documents?.driverLicense) {
                formData.append('driver_license', driver.documents.driverLicense);
            }
            if (driver.documents?.vehicleRegistration) {
                formData.append('vehicle_registration', driver.documents.vehicleRegistration);
            }
            if (driver.documents?.insurance) {
                formData.append('insurance', driver.documents.insurance);
            }
            if (driver.documents?.franchise) {
                formData.append('franchise', driver.documents.franchise);
            }

            await axios.post('/operator/driver', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success('Driver Creation Successfully');
            onCreateDriver(driver);
            setIsOpen(false);
            setCurrentStep(0);
        } catch (error) {
            console.error(error);
            toast.error('Error Driver Creation');
        }
    };

    const nextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const isStepValid = (step: number) => {
        switch (step) {
            case 0:
                return newDriver.firstName && newDriver.lastName && newDriver.email && newDriver.phone && newDriver.password && newDriver.confirmPassword;
            case 1:
                return newDriver.vehicleType && newDriver.licensePlate && newDriver.route;
            case 2:
                return true;
            default:
                return false;
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfoStep newDriver={newDriver} setNewDriver={setNewDriver} />;
            case 1:
                return <VehicleInfoStep newDriver={newDriver} setNewDriver={setNewDriver} />;
            case 2:
                return <DocumentsStep newDriver={newDriver} setNewDriver={setNewDriver} />;
            default:
                return null;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Driver
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Register New Jeepney Driver</DialogTitle>
                    <DialogDescription>
                        Complete the registration process in 3 simple steps
                    </DialogDescription>
                </DialogHeader>

                <StepIndicator currentStep={currentStep} totalSteps={3} />

                {renderStep()}

                <div className="flex justify-between pt-4">
                    <div>
                        {currentStep > 0 && (
                            <Button variant="outline" onClick={prevStep}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Previous
                            </Button>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>

                        {currentStep < 2 ? (
                            <Button
                                onClick={nextStep}
                                disabled={!isStepValid(currentStep)}
                            >
                                Next
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={() => handleCreateDriver(newDriver)}>
                                Register Driver
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};