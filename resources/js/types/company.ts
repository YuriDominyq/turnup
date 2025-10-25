export interface Company {
    company_id: string;
    company_name: string;
    route_id: number;
    created_at?: string;
    updated_at?: string;
}

export interface Route {
    id: number;
    first_terminal: string;
    second_terminal: string;
}
