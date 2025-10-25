import { ReactNode } from 'react';

export interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: ReactNode;
}

export interface Report {
    id: number;
    commuterName: string;
    commuterContact: string;
    subject: string;
    description: string;
    route: string;
    busNumber: string;
    incidentDate: string;
    severity: string;
    status: string;
    category: string;
    timeAgo: string;
}
