import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CompanySearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    filteredLength: number;
    totalLength: number;
}

export default function CompanySearch({
    searchTerm,
    setSearchTerm,
    filteredLength,
    totalLength,
}: CompanySearchProps) {
    return (
        <Card className="mb-6">
            <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search companies or company IDs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full sm:w-80"
                        />
                    </div>

                    <div className="text-sm text-muted-foreground">
                        Showing {filteredLength} of {totalLength} companies
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}