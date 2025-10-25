import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { Building2, Grid3X3, List, Plus } from "lucide-react";

interface CompanyHeaderProps {
    viewMode: string;
    setViewMode: (mode: string) => void;
    onAdd: () => void
}

export default function CompanyHeader({ viewMode, setViewMode, onAdd }: CompanyHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary rounded-xl">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>

                <div>
                    <Text size='xl' weight='bold'>Company Management</Text>
                    <Text size='sm' weight='normal'>Manage transport companies and their route assignments</Text>
                </div>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                {/* View Mode Toggle */}
                <Tabs value={viewMode} onValueChange={setViewMode} className="w-auto">
                    <TabsList>
                        <TabsTrigger value="grid" className="flex items-center space-x-2">
                            <Grid3X3 className="w-4 h-4" />
                            <span>Grid</span>
                        </TabsTrigger>
                        <TabsTrigger value="table" className="flex items-center space-x-2">
                            <List className="w-4 h-4" />
                            <span>Table</span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <Button onClick={onAdd}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Company
                </Button>
            </div>
        </div>
    )
}