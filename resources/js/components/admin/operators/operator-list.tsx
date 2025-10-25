import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import OperatorRow from "./operator-row";

interface Operator {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface ListProps {
    operators: Operator[];
    onAdd: () => void;
}

export default function OperatorList({ operators, onAdd }: ListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Operators List</span>
                    <Badge variant="secondary" className="ml-2">
                        {operators.length} total
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {operators.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="p-4 rounded-full mb-4">
                            <Users className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No operators yet
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-md">
                            Get started by adding your first operator to the system. They'll
                            be able to access and manage various operations.
                        </p>
                        <Button onClick={onAdd} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add Your First Operator
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Table Header - Hidden on mobile */}
                        <div className="hidden md:grid md:grid-cols-12 gap-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div className="col-span-5">Operator</div>
                            <div className="col-span-4">Email</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-1">Actions</div>
                        </div>

                        <div className="space-y-3">
                            {operators.map((op) => (
                                <OperatorRow key={op.id} operator={op} />
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
