import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Company, Route } from "@/types/company"
import { Building2, Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";

interface CompanyTableProps {
    companies: Company[];
    routes: Route[];
    onEdit: (company: Company) => void;
    onDelete: (companyId: string) => void;
}

export default function CompanyTable({ companies, routes, onEdit, onDelete }: CompanyTableProps) {

    const getRoute = (routeId: number) => routes.find(r => r.id === routeId);

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
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {companies.map(company => {
                    const route = getRoute(company.route_id);
                    return (
                        <TableRow key={company.company_id}>
                            <TableCell>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{company.company_name}</div>
                                        <Badge variant="secondary" className="text-xs font-mono">{company.company_id}</Badge>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <div className="font-medium">{route ? `${route.first_terminal} → ${route.second_terminal}` : 'No route'}</div>
                                    <div className="text-sm text-muted-foreground">Route #{company.route_id}</div>
                                </div>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">{formatDate(company.created_at)}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{formatDate(company.updated_at)}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => onEdit(company)}>
                                            <Edit className="w-4 h-4 mr-2" /> Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Eye className="w-4 h-4 mr-2" /> View
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive" onClick={() => onDelete(company.company_id)}>
                                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}