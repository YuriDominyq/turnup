import OperatorForm, { OperatorFormData } from "@/components/operator-form";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import Header from "@/components/admin/operators/operators-header";
import OperatorStats from "@/components/admin/operators/operator-stats";
import OperatorList from "@/components/admin/operators/operator-list";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Operators',
        href: '/operators',
    },
];

interface Operator {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface OperatorProps {
    operators: Operator[];
}

export default function Operators({ operators }: OperatorProps) {

    const [open, setOpen] = useState(false)

    const handleSubmit = (data: OperatorFormData) => {
        Inertia.post("/admin/operators", { ...data }, {
            onSuccess: () => setOpen(false),
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Operators" />

            <div className="container mx-auto p-6 space-y-6">
                {/* Header Section */}
                <Header onAdd={() => setOpen(true)} />

                {/* Stats Card */}
                <OperatorStats operators={operators} />

                {/* Operators List */}
                <OperatorList operators={operators} onAdd={() => setOpen(true)} />

                <OperatorForm
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSubmit}
                />
            </div>
        </AppLayout>
    )
}