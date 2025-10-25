import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface Operator {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}


interface OperatorRowProps {
    operator: Operator;
}

const getInitials = (first: string, last: string) =>
    `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();

export default function OperatorRow({ operator }: OperatorRowProps) {
    return (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 p-4 rounded-lg hover:shadow-sm transition-shadow">
            {/* Operator Info */}
            <div className="md:col-span-5 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(operator.first_name, operator.last_name)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="font-medium">
                        {operator.first_name} {operator.last_name}
                    </h4>
                    <p className="text-sm md:hidden">{operator.email}</p>
                </div>
            </div>

            {/* Email */}
            <div className="md:col-span-4 hidden md:flex md:items-center">
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{operator.email}</span>
                </div>
            </div>

            {/* Status */}
            <div className="md:col-span-2 flex items-center">
                <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">
                    Active
                </Badge>
            </div>

            {/* Actions */}
            <div className="md:col-span-1 flex items-center justify-end">
                <Button variant="ghost" size="sm">
                    ⋯
                </Button>
            </div>
        </div>
    )
}