import React from 'react';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => (
    <div className="flex items-center justify-center mb-6">
        {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${i <= currentStep
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                    {i + 1}
                </div>
                {i < totalSteps - 1 && (
                    <div className={`w-12 h-0.5 mx-2 ${i < currentStep ? 'bg-primary' : 'bg-muted'
                        }`} />
                )}
            </div>
        ))}
    </div>
);