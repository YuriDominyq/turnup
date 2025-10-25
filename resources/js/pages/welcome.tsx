import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BarChart3, BusFront, ChevronRight, Clock, MapPin, Shield, Users, Zap } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const features = [
        {
            icon: MapPin,
            title: "Route Administration",
            description: "Create, Modify, and oversee all jeepney routes across the entire network"
        },
        {
            icon: Users,
            title: "Operator Management",
            description: "Super Admins can create operator accounts. Operators can manage drivers and monitor their own performance."
        },
        {
            icon: Clock,
            title: "System Monitoring",
            description: "Monitor platform health, track usage metrics, and ensure optimal performance"
        },
        {
            icon: BarChart3,
            title: "Network Analytics",
            description: "Displays summary data of routes, operators, and trips within the system",
        },
    ];


    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            {/* Navigation */}
            <div className="min-h-screen bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a]">
                <header className="relative z-10 w-full px-4 py-6 lg:px-8">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className='flex items-center space-x-3'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-900 transition-colors duration-200'>
                                <BusFront className='h-6 w-6 text-black dark:text-white' />
                            </div>
                            <span className='text-xl font-bold dark:text-[#EDEDEC]'>TurnUp</span>
                        </div>

                        <div className='flex items-center space-x-4'>
                            {auth.user ? (
                                <Link
                                    href={auth.user.role === 'superadmin' ? route('admin.dashboard') : route('operator.dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative px-4 py-20 lg:px-8 transition-all duration-1000 opacity-100 translate-y-0" >
                    <div className='mx-auto max-w-7xl text-center'>
                        <div className='mb-6 inline-flex items-center rounded-full bg-white/80 dark:bg-black/80 px-4 py-2 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-gray-700 backdrop-blur-sm'>
                            <Zap className='mr-2 h-4 w-4' />
                            Modernizing Public Transportation
                        </div>

                        <h1 className='mb-6 text-5xl font-bold text-gray-900 dark:text-white lg:text-6xl'>
                            Super Admin
                            <span className='bg-gradient-to-r from-[#FF2D20] to-[#FF6B61] bg-clip-text text-transparent'> Dashboard</span>
                            <br />Control Center
                        </h1>

                        <p className='mx-auto mb-10 max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
                            Comprehensive platform for super administrators to manage jeepney operations, create operator accounts, and oversee the entire transportation network.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className='px-4 py-20 lg:px-8'>
                    <div className='mx-auto max-w-7xl'>
                        <div className='mb-16 text-center'>
                            <h2 className='mb-4 text-4xl font-bold text-black dark:text-white'>
                                Super Admin Tools & Features
                            </h2>
                            <p className='mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300'>
                                Powerful administrative tools to manage the entire jeepney transportation network.
                            </p>
                        </div>

                        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group cursor-pointer rounded-2xl bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-200/70 dark:hover:bg-gray-800/70"
                                >
                                    <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-black/10 dark:bg-white-10 border border-gray-300 dark:border-gray-600 transition-all duration-300 group-hover:bg-black/20 dark:group-hover:bg-white/20'>
                                        <feature.icon className='h-7 w-7 text-black dark:text-white transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100' />
                                    </div>
                                    <h3 className='mb-3 text-xl font-bold text-black dark:text-white'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-700 dark:text-gray-300'>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Admin & Operator Quick Actions */}
                <section className='px-4 py-20 lg:px-8'>
                    <div className='mx-auto max-w-4xl'>
                        <div className='rounded-3xl bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 p-12 shadow-2xl'>

                            <div className='mb-8 text-center'>
                                <h2 className='mb-4 text-3xl font-bold text-black dark:text-white'>
                                    {auth.user ? 'Administrative Controls' : 'Authorized Access Only'}
                                </h2>
                                <p className='text-lg text-gray-700 dark:text-gray-300'>
                                    {auth.user
                                        ? 'Core management functions for super admins and operators'
                                        : 'This system is restricted to super administrators and authorized operators'
                                    }
                                </p>
                            </div>

                            <div className='space-y-4'>
                                <div className='group flex items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 p-6 transition-all hover:border-black/50 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-gray-800'>

                                    <div className='flex items-center space-x-4'>

                                        <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600'>
                                            <MapPin className='h-6 w-6 text-black dark:text-white' />
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-black dark:text-white'>
                                                {auth.user ? 'Route Management System' : 'Route Administration'}
                                            </h3>
                                            <p className='text-sm text-gray-700 dark:text-gray-300'>
                                                {auth.user
                                                    ? 'Create and update routes across the network'
                                                    : 'Super admin required for route management'
                                                }
                                            </p>
                                            <div className="mt-1 flex items-center space-x-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                                <span className="text-xs text-gray-700 dark:text-gray-300">Super Admin Level</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={auth.user ? route('admin.maproute') : route('login')}
                                        className='flex items-center space-x-2 rounded-lg bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200'
                                    >
                                        <span>{auth.user ? 'Access Routes' : 'Admin Access'}</span>
                                        <ChevronRight className='h-4 w-4' />
                                    </Link>
                                </div>

                                <div className='group flex items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 p-6 transition-all hover:border-black/50 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-gray-800'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600'>
                                            <Users className='h-6 w-6 text-black dark:text-white' />
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-black dark:text-white'>
                                                {auth.user ? 'Operator Management Hub' : 'Super Admin Only'}
                                            </h3>
                                            <p className='text-sm text-gray-700 dark:text-gray-300'>
                                                {auth.user
                                                    ? 'Create operator accounts, assign permissions, and monitor activity'
                                                    : 'Super administrator privileges required to manage operators'
                                                }
                                            </p>
                                            <div className="mt-1 flex items-center space-x-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                                <span className="text-xs text-gray-700 dark:text-gray-300">Super Admin Level</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={auth.user ? route('admin.operators.index') : route('login')}
                                        className='flex items-center space-x-2 rounded-lg bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200'
                                    >
                                        <span>{auth.user ? 'Manage Operators' : 'Admin Access'}</span>
                                        <ChevronRight className='h-4 w-4' />
                                    </Link>
                                </div>

                                <div className="group flex items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 p-6 transition-all hover:border-black/50 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-gray-800">

                                    <div className="flex items-center space-x-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600">
                                            <Users className="h-6 w-6 text-black dark:text-white" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-black dark:text-white">
                                                {auth.user ? 'Driver Account Management' : 'Operator: Driver Creation'}
                                            </h3>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {auth.user
                                                    ? 'Operators create driver accounts and manage their fleet operations'
                                                    : 'Operators create and manage accounts for their drivers'
                                                }
                                            </p>
                                            <div className="mt-1 flex items-center space-x-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                                <span className="text-xs text-gray-700 dark:text-gray-300">Operator Level</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href={auth.user ? route('operator.driver.index') : route('login')}
                                        className="flex items-center space-x-2 rounded-lg bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
                                    >
                                        <span>{auth.user ? 'Manage Drivers' : 'Operator Access'}</span>
                                        <ChevronRight className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="group flex items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 p-6 transition-all hover:border-black/50 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-gray-800">
                                    <div className="flex items-center space-x-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600">
                                            <BarChart3 className="h-6 w-6 text-black dark:text-white" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-black dark:text-white">
                                                {auth.user ? 'Driver Tracking System' : 'Operator: Driver Tracking'}
                                            </h3>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {auth.user
                                                    ? 'Operators create driver accounts and track fleet performance across all routes.'
                                                    : 'Operators create and monitor driver accounts to manage fleet operations.'
                                                }
                                            </p>
                                            <div className="mt-1 flex items-center space-x-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                                <span className="text-xs text-gray-700 dark:text-gray-300">Operator Level</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href={auth.user ? route('operator.map') : route('login')}
                                        className="flex items-center space-x-2 rounded-lg bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
                                    >
                                        <span>{auth.user ? 'Manage Drivers' : 'Operator Access'}</span>
                                        <ChevronRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            {!auth.user && (
                                <div className="mt-8 p-6 rounded-xl bg-white/80 dark:bg-black/80 border border-gray-300 dark:border-gray-700">

                                    <div className="flex items-center space-x-3 mb-4">
                                        <Shield className="h-6 w-6 text-black dark:text-white" />
                                        <h3 className="font-semibold text-black dark:text-white">System Hierarchy</h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-900">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-black dark:bg-white">
                                                <span className="text-xs font-bold text-white dark:text-black">1</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-black dark:text-white">Super Admin</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-300">Draws routes, creates operator accounts</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-900">
                                            <div className="flex h-8 w-8 items-center justify-center rounded bg-black dark:bg-white">
                                                <span className="text-xs font-bold text-white dark:text-black">2</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-black dark:text-white">Operators</p>
                                                <p className="text-xs text-gray-700 dark:text-gray-300">Fleet managers who create driver accounts and driver tracking</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 rounded-lg bg-gray-100/60 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700">
                                        <p className="text-xs text-gray-700 dark:text-gray-300">
                                            <strong>Chain of Management:</strong> Super Admins manage the system and create Operators. Operators act as fleet managers who create and supervise Driver accounts and tracking.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className='border-t border-gray-300 dark:border-gray-700 px-4 py-12 lg:px-8'>
                    <div className='mx-auto max-w-7xl text-center'>

                        <div className='mb-6 flex items-center justify-center space-x-3'>
                            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-900 transition-colors duration-200'>
                                <BusFront className='h-5 w-5 text-black dark:text-white' />
                            </div>
                            <span className='text-lg font-bold text-black dark:text-white'>TurnUp</span>
                        </div>

                        <p className='text-gray-700 dark:text-gray-300'>
                            © 2025 TurnUp. Modernizing public transportation, one route at a time.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}