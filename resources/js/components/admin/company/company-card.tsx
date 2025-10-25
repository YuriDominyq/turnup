import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Company, Route } from "@/types/company";
import { Building2, Calendar, Edit, Eye, MapPin, MoreHorizontal, Trash2 } from "lucide-react";


interface CompanyCardProps {
    company: Company;
    routes: Route[];
    onEdit: (company: Company) => void;
    onDelete: (companyId: string) => void;
}


export default function CompanyCard({ company, routes, onEdit, onDelete }: CompanyCardProps) {

    const route = routes.find(r => r.id === company.route_id)

    const formatDate = (dateString?: string) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-lg font-semibold">{company.company_name}</CardTitle>
                            <Badge variant="secondary" className="text-xs font-mono">
                                {company.company_id}
                            </Badge>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => { onEdit(company) }}>
                                <Edit className="w-4 h-4 mr-2" />
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="text-destructive" onClick={() => onDelete(company.company_id)}>
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-3 text-primary" />
                        <div>
                            <div className="font-medium text-foreground">Assigned Route</div>
                            <div>{route ? `${route.first_terminal} → ${route.second_terminal}` : 'No route assigned'}</div>
                        </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-3 text-green-600" />
                        <div>
                            <div className="font-medium text-foreground">Created</div>
                            <div>{formatDate(company.created_at)}</div>
                        </div>
                    </div>
                </div>

                {route && <Badge variant="outline" className="w-fit">Route #{route.id}</Badge>}
            </CardContent>
        </Card>
    )
}