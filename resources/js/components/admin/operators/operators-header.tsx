import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Plus, Users } from "lucide-react";

interface HeaderProps {
    onAdd: () => void;
}

export default function Header({ onAdd }: HeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary rounded-xl">
                    <Users className="h-6 w-6 text-primary-foreground" />
                </div>

                <div>
                    <Text size='xl' weight='bold'>Operators</Text>
                    <Text size='sm' weight='normal'>
                        Manage your system operators and their permissions
                    </Text>
                </div>
            </div>

            <Button
                onClick={onAdd}
                className="flex items-center gap-2"
            >
                <Plus className="h-4 w-4" />
                Add Operator
            </Button>
        </div>
    )
}