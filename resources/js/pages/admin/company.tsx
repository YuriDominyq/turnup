import CompanyFormModal from "@/components/admin/company/company-form";
import CompanyHeader from "@/components/admin/company/company-header";
import CompanyList from "@/components/admin/company/company-list";
import CompanySearch from "@/components/admin/company/company-search";
import CompanyStats from "@/components/admin/company/company-stats";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Company, Route } from "@/types/company";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Company',
        href: '/company',
    },
];


interface CompanyProps {
    routes: Route[];
    companies: Company[];
}

export default function CompanyDashboard({ routes, companies: initialCompanies }: CompanyProps) {

    const [companies, setCompanies] = useState<Company[]>(initialCompanies);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [viewMode, setViewMode] = useState('grid');

    const filteredCompanies = companies.filter(company => {
        const matchesSearch = company.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.company_id.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const handleAddCompany = (newCompany: Company) => {
        setCompanies(prev => [newCompany, ...prev]);

        toast.success('Add Company Successfully');
    };

    const handleEditCompany = (company: Company) => {
        setSelectedCompany(company);
        setShowModal(true);

        toast.success('Edit Company Successfully');
    };

    const handleDeleteCompany = async (companyId: string) => {
        try {
            const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content;

            const response = await fetch(`/admin/company/${companyId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                }
            });

            if (!response.ok) throw new Error('Failed to delete company');

            setCompanies(prev => prev.filter(c => c.company_id !== companyId));

            toast.success("Delete Company Successfully")
        } catch (error) {
            console.error(error);
            toast.error("Error Delete Company")
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Company" />
            <div className="min-h-screen bg-background">
                {/* Breadcrumb */}

                <div className="flex h-full flex-1 flex-col gap-8 rounded-xl p-4 lg:p-8 overflow-x-auto min-h-screen">
                    {/* Header */}
                    <CompanyHeader
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        onAdd={() => setShowModal(true)}
                    />

                    {/* Stats Cards */}
                    <CompanyStats
                        companiesLength={companies.length}
                        assignedRoutes={new Set(companies.map(c => c.route_id)).size}
                        availableRoutes={routes.length}
                        unassignedRoutes={routes.length - new Set(companies.map(c => c.route_id)).size}
                    />

                    {/* Search */}
                    <CompanySearch
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        filteredLength={filteredCompanies.length}
                        totalLength={companies.length}
                    />

                    {/* Content */}
                    <CompanyList
                        companies={filteredCompanies}
                        routes={routes}
                        viewMode={viewMode}
                        searchTerm={searchTerm}
                        onEdit={handleEditCompany}
                        onDelete={handleDeleteCompany}
                        onAdd={() => {
                            setSelectedCompany(null)
                            setShowModal(true)
                        }}
                    />

                    <CompanyFormModal
                        routes={routes}
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        company={selectedCompany}
                        onAdd={handleAddCompany}
                        onEdit={handleEditCompany}
                    />
                </div>
            </div>
        </AppLayout>
    )
}