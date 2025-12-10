import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BreadcrumbItem } from "@/types";
import AppLayout from "@/layouts/app-layout";
import { toast } from "react-toastify";
import { HelpCircle, Search, Plus, Edit2, Trash2, X, Save } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Label } from "@/components/ui/label";

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

    const [faqToDelete, setFaqToDelete] = useState<FAQ | null>(null);
    const [faqToUpdate, setFaqToUpdate] = useState<FAQ | null>(null);

    const filteredFaqs = localFaqs
        .filter(
            (f) =>
                f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.keywords?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => b.id - a.id);

    const categories = Array.from(new Set(localFaqs.map((f) => f.category)));

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
            keywords: newKeywords.trim(),
        };

        if (editingId !== null) {
            Inertia.put(route("operator.faq.update", editingId), data, {
                preserveState: true,
                preserveScroll: true,
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
            Inertia.post(route("operator.faq.store"), data, {
                preserveState: true,
                preserveScroll: true,
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
        setNewKeywords(faq.keywords || "");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const confirmDelete = (faq: FAQ) => setFaqToDelete(faq);
    const handleDeleteConfirmed = () => {
        if (!faqToDelete) return;
        Inertia.delete(route("operator.faq.destroy", faqToDelete.id), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setLocalFaqs((prev) => prev.filter((f) => f.id !== faqToDelete.id));
                toast.success("FAQ deleted successfully!");
                setFaqToDelete(null);
            },
        });
    };

    const confirmUpdate = () => setFaqToUpdate({ id: editingId!, question: newQuestion, answer: newAnswer, category: newCategory, keywords: newKeywords });
    const handleUpdateConfirmed = () => {
        handleSave();
        setFaqToUpdate(null);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="FAQs" />
            <div className="space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-primary rounded-xl">
                            <HelpCircle className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                            <Text size="xl" weight="bold" className="text-gray-900 dark:text-gray-100">
                                FAQ Management
                            </Text>
                            <Text size="sm" className="text-gray-600 dark:text-gray-400 mt-1">
                                Manage frequently asked questions for the commuter chatbot
                            </Text>
                        </div>
                    </div>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                        {localFaqs.length} Total FAQs
                    </Badge>
                </div>

                {/* Add/Edit Form */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                {editingId !== null ? (
                                    <>
                                        <Edit2 className="h-5 w-5" /> Edit FAQ
                                    </>
                                ) : (
                                    <>
                                        <Plus className="h-5 w-5" /> Add New FAQ
                                    </>
                                )}
                            </CardTitle>
                            {editingId !== null && (
                                <Button variant="ghost" size="sm" onClick={resetForm}>
                                    <X className="h-4 w-4 mr-1" /> Cancel
                                </Button>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Question *</Label>
                                <Input value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} placeholder="Enter the question..." />
                            </div>
                            <div className="space-y-2">
                                <Label>Category *</Label>
                                <Input
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    placeholder="e.g., Routes, Fares, Schedule"
                                    list="categories"
                                />
                                <datalist id="categories">
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat} />
                                    ))}
                                </datalist>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Answer *</Label>
                            <Textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} placeholder="Enter the answer..." />
                        </div>
                        <div className="space-y-2">
                            <Label>Keywords (comma-separated)</Label>
                            <Input value={newKeywords} onChange={(e) => setNewKeywords(e.target.value)} placeholder="e.g., bus, train, payment" />
                        </div>
                        <div className="flex gap-2 pt-2">
                            {editingId !== null ? (
                                <Button onClick={confirmUpdate} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Update FAQ
                                </Button>
                            ) : (
                                <Button onClick={handleSave} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Add FAQ
                                </Button>
                            )}
                            {editingId !== null && <Button variant="outline" onClick={resetForm}>Cancel</Button>}
                        </div>
                    </CardContent>
                </Card>

                {/* Search and List */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <CardTitle>FAQ List ({filteredFaqs.length})</CardTitle>
                            <div className="relative w-full sm:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search FAQs..." className="pl-10" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                                <HelpCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                <Text size="lg" weight="medium">No FAQs found</Text>
                                <Text size="sm" className="mt-1">
                                    {searchQuery ? "Try adjusting your search" : "Add your first FAQ to get started"}
                                </Text>
                            </div>
                        ) : (
                            <ScrollArea className="h-[600px] pr-4">
                                <div className="space-y-3">
                                    {filteredFaqs.map((faq) => (
                                        <Card key={faq.id} className={`transition-all duration-300 hover:shadow-md ${highlightedId === faq.id ? "bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700 shadow-md" : "border-gray-200 dark:border-gray-700"}`}>
                                            <CardContent className="p-5">
                                                <div className="flex justify-between items-start gap-4">
                                                    <div className="flex-1 space-y-3">
                                                        <div className="flex items-start gap-3">
                                                            <Badge variant="outline" className="mt-0.5">{faq.category}</Badge>
                                                            <div className="flex-1">
                                                                <Text size="base" weight="bold">{faq.question}</Text>
                                                            </div>
                                                        </div>
                                                        <Text size="sm">{faq.answer}</Text>
                                                        {faq.keywords && (
                                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                                {faq.keywords.split(",").map((k, i) => (
                                                                    <Badge key={i} variant="secondary" className="px-2 py-0.5">{k.trim()}</Badge>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <Button variant="outline" size="sm" onClick={() => handleEdit(faq)} className="w-full">
                                                            <Edit2 className="h-3.5 w-3.5 mr-1.5" /> Edit
                                                        </Button>
                                                        <Button variant="outline" size="sm" onClick={() => confirmDelete(faq)} className="w-full">
                                                            <Trash2 className="h-3.5 w-3.5 mr-1.5" /> Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </ScrollArea>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Delete Modal */}
            {faqToDelete && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
                    <Card className="max-w-md w-full p-6">
                        <CardTitle>Confirm Delete</CardTitle>
                        <CardContent className="space-y-4">
                            <Text>Are you sure you want to delete the FAQ:</Text>
                            <Text weight="bold">{faqToDelete.question}</Text>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setFaqToDelete(null)}>Cancel</Button>
                                <Button variant="destructive" onClick={handleDeleteConfirmed}>Delete</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Update Confirmation Modal */}
            {faqToUpdate && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
                    <Card className="max-w-md w-full p-6">
                        <CardTitle>Confirm Update</CardTitle>
                        <CardContent className="space-y-4">
                            <Text>Are you sure you want to update this FAQ?</Text>
                            <Text weight="bold">{faqToUpdate.question}</Text>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setFaqToUpdate(null)}>Cancel</Button>
                                <Button onClick={handleUpdateConfirmed}>Update</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </AppLayout>
    );
}
