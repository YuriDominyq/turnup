export interface Report {
    id: string;
    commuterName: string;
    commuterContact: string;
    subject: string;
    description: string;
    route: string;
    bus: string;
    startStop: string;
    endStop: string;
    incidentDate: string;
    severity: 'low' | 'medium' | 'high';
    status: 'new' | 'in-progress' | 'resolved';
    category: string;
    timeAgo: string;
}

export interface FeedbackResponse {
    feedback_id: string;
    rating: number;
    comment: string | null;
    created_at: string;
    commuter?: {
        first_name: string;
        last_name: string;
        phone: string;
    };
    ride?: {
        route?: { name: string };
        startStop?: { name: string };
        endStop?: { name: string };
        driver?: {
            first_name: string;
            last_name: string;
            license_plate?: string;
        };
    };
}
