import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, FileText, Upload, X } from 'lucide-react';
import { NewDriver } from '@/types/driver';
import { Input } from '../ui/input';

interface DocumentsStepProps {
    newDriver: NewDriver;
    setNewDriver: (driver: NewDriver) => void;
}

interface UploadedFile {
    file: File;
    preview?: string;
    error?: string;
}

interface Documents {
    driverLicense?: UploadedFile;
    vehicleRegistration?: UploadedFile;
    insurance?: UploadedFile;
    franchise?: UploadedFile;
}

export const DocumentsStep: React.FC<DocumentsStepProps> = ({ newDriver, setNewDriver }) => {
    const [documents, setDocuments] = useState<Documents>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const driverLicenseRef = useRef<HTMLInputElement>(null);
    const vehicleRegistrationRef = useRef<HTMLInputElement>(null);
    const insuranceRef = useRef<HTMLInputElement>(null);
    const franchiseRef = useRef<HTMLInputElement>(null);

    const validateFile = (file: File): string | null => {
        const maxSize = 5 * 1024 * 1024;
        const allowedTypes = ['application/pdf', 'image/jpg', 'image/jpeg', 'image/png'];

        if (!allowedTypes.includes(file.type)) {
            return 'Invalid file type. Only PDF, JPG, PNG are allowed.';
        }

        if (file.size > maxSize) {
            return 'File size exceeds the maximum limit of 5MB. Please upload a smaller file.';
        }

        return null;
    };

    const handleFileSelect = (documentType: keyof Documents, file: File | null) => {
        if (!file) return;

        const error = validateFile(file);

        if (error) {
            setErrors({ ...errors, [documentType]: error });
            return;
        }

        const newErrors = { ...errors };
        delete newErrors[documentType];
        setErrors(newErrors);

        let preview: string | undefined;
        if (file.type.startsWith('image/')) {
            preview = URL.createObjectURL(file);
        }

        setDocuments({
            ...documents,
            [documentType]: { file, preview }
        })

        setNewDriver({
            ...newDriver,
            documents: {
                ...newDriver.documents,
                [documentType]: file
            }
        });
    };

    const handleRemoveFile = (documentType: keyof Documents) => {
        const newDocs = { ...documents };

        if (newDocs[documentType]?.preview) {
            URL.revokeObjectURL(newDocs[documentType]!.preview!);
        }

        delete newDocs[documentType];
        setDocuments(newDocs);

        const newErrors = { ...errors };
        delete newErrors[documentType];
        setErrors(newErrors);

        const newDriverDocs = { ...newDriver.documents };
        delete newDriverDocs[documentType];
        setNewDriver({
            ...newDriver,
            documents: newDriverDocs
        });
    };

    const renderUpLoadButton = (
        title: string,
        description: string,
        documentType: keyof Documents,
        inputRef: React.RefObject<HTMLInputElement | null>
    ) => {
        const uploadedFile = documents[documentType];
        const error = errors[documentType];
        const isUploaded = !!uploadedFile && !error;

        return (
            <div className='space-y-2'>
                <Input
                    ref={inputRef}
                    type='file'
                    accept='.pdf, .jpg, .jpeg, .png'
                    className='hidden'
                    onChange={(e) => handleFileSelect(documentType, e.target.files?.[0] || null)}
                />

                <Button
                    type='button'
                    variant='outline'
                    className={`h-16 w-full flex items-center justify-between gap-3 ${isUploaded ? 'border-green-500 bg-green-50' : error ? 'border-red-500 bg-red-50' : ''
                        }`}
                    onClick={() => inputRef.current?.click()}
                >
                    <div className='flex items-center gap-3'>
                        {isUploaded ? (
                            <CheckCircle className='h-5 w-5 text-green-600' />
                        ) : error ? (
                            <AlertCircle className='h-5 w-5 text-red-600' />
                        ) : (
                            <Upload className='h-5 w-5' />
                        )}

                        <div className='text-left'>
                            <div className='font-medium'>{title}</div>
                            <div className='text-xs text-muted-foreground'>{description}</div>
                        </div>
                    </div>

                    {isUploaded && (
                        <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            className='h-8 w-8 p-0'
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFile(documentType);
                            }}
                        >
                            <X className='h-4 w-4' />
                        </Button>
                    )}
                </Button>

                {isUploaded && (
                    <div className='flex items-center gap-2 text-sm text-green-600 pl-2'>
                        <CheckCircle className='h-4 w-4' />
                        <span className='truncate'>{uploadedFile?.file.name}</span>
                        <span className='text-xs text-muted-foreground'>
                            ({(uploadedFile.file.size / 1024).toFixed(0)} KB)
                        </span>
                    </div>
                )}

                {error && (
                    <div className='flex items-center gap-2 text-sm text-red-600 pl-2'>
                        <AlertCircle className='h-4 w-4' />
                        <span>{error}</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Required Documents</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
                Upload the required documents. You can also upload these later from the driver profile.
            </p>

            <div className="grid grid-cols-1 gap-3">
                {renderUpLoadButton(
                    "Professional Driver's License",
                    "PDF, JPG, PNG (Max 5MB)",
                    "driverLicense",
                    driverLicenseRef
                )}

                {renderUpLoadButton(
                    "Vehicle Registration (CR/OR)",
                    "PDF, JPG, PNG (Max 5MB)",
                    "vehicleRegistration",
                    vehicleRegistrationRef
                )}

                {renderUpLoadButton(
                    "TPL Insurance",
                    "PDF, JPG, PNG (Max 5MB)",
                    "insurance",
                    insuranceRef
                )}

                {renderUpLoadButton(
                    "Franchise Certificate",
                    "PDF, JPG, PNG (Max 5MB)",
                    "franchise",
                    franchiseRef
                )}
            </div>

            <div className='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
                <p className='text-sm text-blue-800'>
                    <strong>Note:</strong> All documents are optional at this stage. You can upload them later, but having complete documentation helps speed up the approval process.
                </p>
            </div>
        </div>
    )
};