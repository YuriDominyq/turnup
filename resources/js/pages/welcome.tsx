import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BusFront, HelpCircle, MapPin, Zap } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const features = [
        {
            icon: MapPin,
            title: "Route Management",
            description: "Create, edit, and view jeepney routes."
        },
        {
            icon: HelpCircle,
            title: "Information Log Management",
            description: "Manage FAQs and information used by the commuter chatbot."
        }
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
                                    href={auth.user.role === 'superadmin' ? route('admin.dashboard') : '#'}
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

                        <div className='grid gap-8 md:grid-cols-1 lg:grid-cols-2'>
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