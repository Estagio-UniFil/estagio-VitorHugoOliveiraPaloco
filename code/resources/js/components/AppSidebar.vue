<script setup lang="ts">
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard, usuariosIndex, materiasIndex, turmasIndex, solicitacoesIndex } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { BookOpen, Folder, LayoutGrid, Home, AlarmClock, BookText, Bell, User } from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';
import { computed } from 'vue';

const page = usePage();
const accessibleRoutes = computed<string[]>(() => 
    page.props.auth?.accessible_routes || []
);

const allNavItemsWithRoutes = [
    {
        title: 'Home',
        href: dashboard(),
        icon: Home,
        routeName: 'dashboard',
    },
    {
        title: 'Turmas',
        href: turmasIndex(),
        icon: AlarmClock,
        routeName: 'turmasIndex',
    },
    {
        title: 'Matérias',
        href: materiasIndex(),
        icon: BookText,
        routeName: 'materiasIndex',
    },
    {
        title: 'Solicitações',
        href: solicitacoesIndex(),
        icon: Bell,
        routeName: 'solicitacoesIndex',
    },
    {
        title: 'Usuários',
        href: usuariosIndex(), 
        icon: User,
        routeName: 'usuariosIndex',
    }
];

const mainNavItems = computed<NavItem[]>(() => {
    return allNavItemsWithRoutes.filter(item => 
        accessibleRoutes.value.includes(item.routeName)
    );
});

const footerNavItems: NavItem[] = [
    {
        title: 'Github Repo',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard()">
                           <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>