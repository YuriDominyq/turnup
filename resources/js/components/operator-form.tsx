import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { toast } from "react-toastify";

interface OperatorFormModalProps {
    open: boolean
    onClose: () => void
    onSubmit: (data: OperatorFormData) => void
}

export interface OperatorFormData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}


export default function OperatorForm({ open, onClose, onSubmit }: OperatorFormModalProps) {
    const [form, setForm] = useState<OperatorFormData>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = () => {
        onSubmit(form)
        onClose()

        toast.success('Operator Creation Successfully');
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="border-0 shadow-2xl">
                <DialogHeader>
                    <DialogTitle>Add Operator</DialogTitle>
                </DialogHeader>

                <div className="grid gap-5 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="first_name" className="text-sm font-semibold mb-2 block">First Name</Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                value={form.first_name}
                                onChange={handleChange}
                                className="h-10 border-2 border-transparent"
                                placeholder="Enter first name"
                            />
                        </div>
                        <div>
                            <Label htmlFor="last_name" className="text-sm font-semibold mb-2 block">Last Name</Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                value={form.last_name}
                                onChange={handleChange}
                                className="h-10 border-2 border-transparent"
                                placeholder="Enter last name"
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email" className="text-sm font-semibold mb-2 block">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="h-10 border-2 border-transparent"
                            placeholder="Enter email address"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password" className="text-sm font-semibold mb-2 block">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="h-10 border-2 border-transparent"
                            placeholder="Enter password"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password_confirmation" className="text-sm font-semibold mb-2 block">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={form.password_confirmation}
                            onChange={handleChange}
                            className="h-10 border-2 border-transparent"
                            placeholder="Confirm password"
                        />
                    </div>
                </div>

                <DialogFooter className="gap-3">
                    <Button variant='outline' onClick={onClose} className="hover:bg-opacity-80 transition-all">Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}