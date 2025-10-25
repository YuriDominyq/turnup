import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "@inertiajs/react";
import React from "react";


interface Route {
    id: number;
    first_terminal: string;
    second_terminal: string;
}

interface Company {
    company_id: string;
    company_name: string;
    route_id: number;
    created_at?: string;
    updated_at?: string;
}

interface CompanyFormModalProps {
    routes: Route[];
    company: Company | null;
    isOpen: boolean;
    onClose: () => void;
    onAdd: (company: Company) => void;
    onEdit: (company: Company) => void;
}

export default function CompanyFormModal({
    routes,
    company,
    isOpen,
    onClose,
    onAdd,
    onEdit }: CompanyFormModalProps) {

    const { data, setData, post, put, processing, reset, errors } = useForm({
        company_name: "",
        route_id: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = { ...data, route_id: Number(data.route_id) };

        if (company) {
            // Editing
            put(`/admin/company/${company.company_id}`, {
                onSuccess: () => {
                    onEdit({ ...payload, company_id: company.company_id });
                    reset();
                    onClose();
                },
                preserveScroll: true,
            });
        } else {
            // Creating
            post("/admin/company", {
                onSuccess: () => {
                    onAdd({ ...payload } as Company);
                    reset();
                    onClose();
                },
            });
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{company ? "Edit Company" : "Create Company"}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Company Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Company Name</label>
                        <Input
                            placeholder="Enter company name"
                            value={data.company_name}
                            onChange={(e) => setData("company_name", e.target.value)}
                            required
                        />
                        {errors.company_name && (
                            <p className="text-sm text-red-500">{errors.company_name}</p>
                        )}
                    </div>

                    {/* Route Select */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select Route</label>
                        <Select
                            onValueChange={(val) => setData("route_id", val)}
                            value={data.route_id}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a route" />
                            </SelectTrigger>
                            <SelectContent>
                                {routes.map((route) => (
                                    <SelectItem key={route.id} value={String(route.id)}>
                                        {route.first_terminal} → {route.second_terminal}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.route_id && (
                            <p className="text-sm text-red-500">{errors.route_id}</p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={processing}>
                            {processing ? "Saving..." : "Save"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}