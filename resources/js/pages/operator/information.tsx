import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BreadcrumbItem } from "@/types";
import AppLayout from "@/layouts/app-layout";
import { toast } from "react-toastify";
import { HelpCircle } from "lucide-react";
import { Text } from "@/components/ui/text";

const breadcrumbs: BreadcrumbItem[] = [{ title: "FAQs", href: "/information" }];

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
    keywords?: string;
}

interface InformationProps {
    faqs: FAQ[];
}

export default function Information({ faqs }: InformationProps) {
    const [localFaqs, setLocalFaqs] = useState<FAQ[]>(faqs);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [highlightedId, setHighlightedId] = useState<number | null>(null);
    const [newKeywords, setNewKeywords] = useState<string>("");

    const filteredFaqs = localFaqs
        .filter(
            (f) =>
                f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.keywords?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => b.id - a.id);

    const resetForm = () => {
        setNewQuestion("");
        setNewAnswer("");
        setNewCategory("");
        setNewKeywords("");
        setEditingId(null);
    };

    const handleSave = () => {
        if (!newQuestion.trim() || !newAnswer.trim() || !newCategory.trim()) {
            toast.error("Please fill out all fields!");
            return;
        }

        setLoading(true);
        const data = {
            question: newQuestion.trim(),
            answer: newAnswer.trim(),
            category: newCategory.trim(),
        };

        if (editingId !== null) {
            Inertia.put(route("faqs.update", editingId), data, {
                onSuccess: () => {
                    setLocalFaqs((prev) =>
                        prev.map((f) => (f.id === editingId ? { ...f, ...data } : f))
                    );
                    setHighlightedId(editingId);
                    resetForm();
                    toast.success("FAQ updated successfully!");
                    setLoading(false);

                    setTimeout(() => setHighlightedId(null), 2000);
                },
                onError: () => setLoading(false),
            });
        } else {
            Inertia.post(route("faqs.store"), data, {
                onSuccess: (page) => {
                    const { faq } = (page.props as unknown) as { faq?: FAQ };
                    if (faq) {
                        setLocalFaqs((prev) => [...prev, faq]);
                        setHighlightedId(faq.id);
                        resetForm();
                        toast.success("FAQ added successfully!");
                        setLoading(false);

                        setTimeout(() => setHighlightedId(null), 2000);
                    } else {
                        setLoading(false);
                    }
                },
                onError: () => setLoading(false),
            });
        }
    };

    const handleEdit = (faq: FAQ) => {
        setEditingId(faq.id);
        setNewQuestion(faq.question);
        setNewAnswer(faq.answer);
        setNewCategory(faq.category);
        setNewKeywords("");
    };

    const handleDelete = (faq: FAQ) => {
        if (!confirm("Are you sure you want to delete this FAQ?")) return;
        Inertia.delete(route("faqs.destroy", faq.id), {
            onSuccess: () => setLocalFaqs((prev) => prev.filter((f) => f.id !== faq.id)),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="FAQs" />

            <div className="space-y-6 p-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-primary rounded-xl">
                        <HelpCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                        <Text size="xl" weight="bold">
                            FAQs
                        </Text>
                        <Text size="sm" weight="normal" className="text-gray-500">
                            Manage frequently asked questions for the commuter chatbot
                        </Text>
                    </div>
                </div>

                {/* Add/Edit FAQ Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId !== null ? "Edit FAQ" : "Add New FAQ"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Input
                            placeholder="Question"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                        <Input
                            placeholder="Answer"
                            value={newAnswer}
                            onChange={(e) => setNewAnswer(e.target.value)}
                        />
                        <Input
                            placeholder="Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <Input
                            placeholder="Keywords (comma-separated)"
                            value={newKeywords}
                            onChange={(e) => setNewKeywords(e.target.value)}
                        />
                        <Button onClick={handleSave} disabled={loading}>
                            {loading
                                ? editingId !== null
                                    ? "Updating..."
                                    : "Adding..."
                                : editingId !== null
                                    ? "Update FAQ"
                                    : "Add FAQ"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Search Input */}
                <Input
                    placeholder="Search FAQs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-2"
                />

                {/* FAQ List */}
                <Card>
                    <CardHeader>
                        <CardTitle>FAQ List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-64">
                            {filteredFaqs.map((faq) => (
                                <Card
                                    key={faq.id}
                                    className={`mb-2 p-3 transition-colors ${highlightedId === faq.id ? "bg-yellow-100" : ""
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{faq.question}</p>
                                            <p>{faq.answer}</p>
                                            <p className="text-sm text-gray-500">Category: {faq.category}</p>
                                        </div>
                                        <div className="space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(faq)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(faq)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
