import { Company, Route } from "@/types/company"
import CompanyCard from "./company-card";
import CompanyTable from "./company-table";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyListProps {
    companies: Company[];
    routes: Route[];
    viewMode: string;
    searchTerm: string;
    onEdit: (company: Company) => void;
    onDelete: (companyId: string) => void;
    onAdd: () => void;
}

export default function CompanyList({
    companies,
    routes,
    viewMode,
    searchTerm,
    onEdit,
    onDelete,
    onAdd,
}: CompanyListProps) {

    if (companies.length === 0) {
        return (
            <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                    <Building2 className="w-16 h-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No companies found</h3>
                    <p className="text-muted-foreground mb-6 text-center">
                        {searchTerm
                            ? "Try adjusting your search criteria"
                            : "Get started by adding your first company"}
                    </p>
                    <Button onClick={onAdd}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Company
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {companies.map(company => (
                <CompanyCard
                    key={company.company_id}
                    company={company}
                    routes={routes}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    ) : (
        <CompanyTable
            companies={companies}
            routes={routes}
            onEdit={onEdit}
            onDelete={onDelete}
        />
    )
}