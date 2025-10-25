import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Activity, AlertTriangle, BarChart3, Building, Map, MapIcon, Users } from 'lucide-react';
import AppLogo from './app-logo';
import { AppVersion } from './app-version';

export function AppSidebar() {

    const { auth } = usePage().props as { auth?: { user?: { role?: string } } };

    const role = auth?.user?.role ?? null;

    const mainNavItems: NavItem[] = role === 'superadmin' ? [
        {
            title: 'Dashboard',
            href: '/admin/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Company',
            href: '/admin/company',
            icon: Building,
        },
        {
            title: 'Operators',
            href: '/admin/operators',
            icon: Users,
        },
        {
            title: 'Map Route',
            href: '/admin/maproute',
            icon: MapIcon,
        },
    ] : role === 'operator' ? [
        {
            title: 'Dashboard',
            href: '/operator/dashboard',
            icon: BarChart3,
        },
        {
            title: 'Driver',
            href: '/operator/driver',
            icon: Users,
        },
        {
            title: 'Driver Tracking',
            href: '/operator/map',
            icon: Map,
        },
        {
            title: 'Commuter Problems',
            href: '/operator/problems',
            icon: AlertTriangle,
        },
        {
            title: 'Check-ins',
            href: '/operator/checkin',
            icon: Activity,
        },
    ] : [];

    const dashboardLink =
        role === 'superadmin'
            ? '/admin/dashboard'
            : role === 'operator'
                ? '/operator/dashboard'
                : '/';
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardLink} prefetch>
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
