import { Card, CardContent } from "@/components/ui/card";
import { Mail, User, Users } from "lucide-react";

interface Operator {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface StatProps {
    operators: Operator[]
}

export default function OperatorStats({ operators }: StatProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Total Operators</p>
                            <p className="text-2xl font-bold">{operators.length}</p>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Users className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Active</p>
                            <p className="text-2xl font-bold">{operators.length}</p>
                        </div>
                        <div className="p-2 bg-green-100 rounded-lg">
                            <User className="h-5 w-5 text-green-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Recent</p>
                            <p className="text-2xl font-bold">
                                {operators.slice(-3).length}
                            </p>
                        </div>
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <Mail className="h-5 w-5 text-purple-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}