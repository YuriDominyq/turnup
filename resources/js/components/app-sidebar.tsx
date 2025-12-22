import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BarChart3, HelpCircleIcon, MapIcon, } from 'lucide-react';
import AppLogo from './app-logo';
import { AppVersion } from './app-version';

export function AppSidebar() {

    const { auth } = usePage().props as { auth?: { user?: { role?: string } } };
    const role = auth?.user?.role ?? null;

    if (role !== 'superadmin') return null;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/admin/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Map Route',
            href: '/admin/maproute',
            icon: MapIcon,
        },
        {
            title: 'Commuter FAQs',
            href: '/admin/faq',
            icon: HelpCircleIcon,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
                <AppVersion />
            </SidebarFooter>
        </Sidebar>
    );
}
