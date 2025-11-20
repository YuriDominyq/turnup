import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    UserCheck,
    Clock,
    CheckCircle,
    AlertCircle,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import DriverList from '@/components/driver-list';
import DriverSearchFilter from '@/components/driver-search-filter';
import StatCard from '@/components/stat-card';
import { CreateDriverDialog } from '@/components/create-driver';
import { Driver, NewDriver } from '@/types/driver';
import { Text } from '@/components/ui/text';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Driver',
        href: '/driver',
    },
];

interface DriversProps {
    drivers: Driver[]
}

export default function Drivers({ drivers }: DriversProps) {
    const [driverList, setDriverList] = useState<Driver[]>(drivers);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'pending' | 'inactive' | 'suspended'>('all');

    const getStatusBadge = (status: string) => {
        const variants: { [key: string]: { variant: 'default' | 'secondary' | 'destructive' | 'outline', color: string } } = {
            'active': { variant: 'default', color: 'bg-green-100 text-green-800' },
            'pending': { variant: 'secondary', color: 'bg-yellow-100 text-yellow-800' },
            'suspended': { variant: 'destructive', color: 'bg-red-100 text-red-800' },
            'inactive': { variant: 'outline', color: 'bg-gray-100 text-gray-800' }
        };
        return variants[status] || variants['inactive'];
    };

    const handleCreateDriver = (newDriver: NewDriver) => {
        console.log('Create Driver', newDriver)
    };

    const handleExport = () => {
        if (!driverList || driverList.length === 0) return;

        const exportData = driverList.map(driver => ({
            ID: driver.drivers_id,
            'First Name': driver.first_name,
            'Last Name': driver.last_name,
            Email: driver.email,
            Phone: driver.phone || "",
            Status: driver.status,
            Route: driver.route ? `${driver.route.first_terminal} ↔ ${driver.route.second_terminal}` : "",
            'License Plate': driver.license_plate,
            'Vehicle Type': driver.vehicle_type || "",
            Rating: driver.rating,
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Drivers");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(dataBlob, `drivers_export_${new Date().toISOString()}.xlsx`);
    }

    const handleUpdateDriverStatus = (updatedDriver?: Driver & { deleted?: boolean }) => {
        if (!updatedDriver) return;

        if (updatedDriver.deleted) {
            setDriverList(prev => prev.filter(d => d.drivers_id !== updatedDriver.drivers_id));
        } else {
            setDriverList(prev =>
                prev.map(d => d.drivers_id === updatedDriver.drivers_id ? updatedDriver : d)
            );
        }
    };

    const filteredDrivers = driverList.filter(driver => {
        const firstName = driver.first_name ?? '';
        const lastName = driver.last_name ?? '';
        const email = driver.email ?? '';
        const phone = driver.phone ?? '';
        const status = (driver.status ?? '').toLowerCase();

        const matchesSearch =
            firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            phone.includes(searchQuery);

        const matchesStatus =
            selectedStatus === 'all' || status === selectedStatus.toLowerCase();

        return matchesSearch && matchesStatus;
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Driver Management" />
            <div className="flex flex-col gap-6 p-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <div className="p-2.5 bg-primary rounded-xl">
                            <Users className="h-6 w-6 text-primary-foreground" />
                        </div>

                        <div>
                            <Text size='xl' weight='bold'>
                                Modern Jeepney Driver Management
                            </Text>
                            <Text size='sm' weight='normal'>
                                Manage modernized jeepney drivers in Bacolod City
                            </Text>
                        </div>
                    </div>

                    {/* Create Driver Modal */}
                    <CreateDriverDialog onCreateDriver={handleCreateDriver} />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <StatCard
                        title='Total Jeepney Drivers'
                        icon={<UserCheck className='h-4 w-4 text-muted-foreground' />}
                        count={drivers.length}
                        description='+2 this week'
                    />
                    <StatCard
                        title='Active on Routes'
                        icon={<CheckCircle className='h-4 w-4 text-green-500' />}
                        count={drivers.filter(d => d.status === "active").length}
                        description='Operating Routes'
                    />
                    <StatCard
                        title='Pending Approval'
                        icon={<Clock className='h-4 w-4 text-yellow-500' />}
                        count={drivers.filter(d => d.status === "pending").length}
                        description='Awaiting verification'
                    />
                    <StatCard
                        title='Issues'
                        icon={<AlertCircle className='h-4 w-4 text-red-400' />}
                        count={drivers.filter(d => d.status === "suspended").length}
                        description='Need Attention'
                    />
                </div>

                {/* Search and Filter */}
                <DriverSearchFilter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    onExport={handleExport}
                />

                {/* Driver List */}
                <DriverList
                    filteredDrivers={filteredDrivers}
                    getStatusBadge={getStatusBadge}
                    onUpdateDriver={handleUpdateDriverStatus}
                />

            </div>
        </AppLayout>
    );
}