import { Download, Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";

interface DriverSearchFilterProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedStatus: 'all' | 'active' | 'pending' | 'inactive' | 'suspended';
    setSelectedStatus: (status: 'all' | 'active' | 'pending' | 'inactive' | 'suspended') => void;
    onExport?: () => void;
}


export default function DriverSearchFilter({
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
    onExport,
}: DriverSearchFilterProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search drivers by name, route, or terminal..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
            </Select>

            <Button variant="outline" onClick={onExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
            </Button>
        </div>
    )
}