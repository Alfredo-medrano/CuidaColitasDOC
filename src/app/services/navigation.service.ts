import { Injectable, signal } from '@angular/core';

export interface NavItem {
    label: string;
    icon?: string;
    route?: string;
    children?: NavItem[];
    expanded?: boolean;
}

export interface Breadcrumb {
    label: string;
    route?: string;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    // Mobile sidebar state
    public sidebarOpen = signal(false);

    // Navigation structure
    public navItems = signal<NavItem[]>([
        {
            label: 'Inicio',
            icon: 'fa-solid fa-house',
            route: '/home'
        },
        {
            label: 'Manual de Usuario',
            icon: 'fa-solid fa-book',
            expanded: false,
            children: [
                { label: 'Para Clientes', route: '/user-manual/cliente' },
                { label: 'Para Veterinarios', route: '/user-manual/veterinario' },
                { label: 'Para Administradores', route: '/user-manual/admin' }
            ]
        },
        {
            label: 'Manual de Desarrollador',
            icon: 'fa-solid fa-code',
            expanded: false,
            children: [
                { label: 'Arquitectura', route: '/developer/architecture' },
                { label: 'Instalación', route: '/developer/installation' },
                { label: 'Estructura del Proyecto', route: '/developer/structure' },
                { label: 'API Reference', route: '/developer/api' },
                { label: 'Contribuir', route: '/developer/contributing' }
            ]
        },
        {
            label: 'Documentación Técnica',
            icon: 'fa-solid fa-server',
            expanded: false,
            children: [
                { label: 'Base de Datos', route: '/technical/database' },
                { label: 'Políticas RLS', route: '/technical/rls' },
                { label: 'Integración Gemini AI', route: '/technical/gemini' },
                { label: 'Despliegue', route: '/technical/deployment' },
                { label: 'Troubleshooting', route: '/technical/troubleshooting' }
            ]
        }
    ]);

    public breadcrumbs = signal<Breadcrumb[]>([]);

    public toggleSidebar(): void {
        this.sidebarOpen.update(open => !open);
    }

    public closeSidebar(): void {
        this.sidebarOpen.set(false);
    }

    public toggleNavItem(label: string): void {
        this.navItems.update(items =>
            items.map(item =>
                item.label === label
                    ? { ...item, expanded: !item.expanded }
                    : item
            )
        );
    }

    public setBreadcrumbs(crumbs: Breadcrumb[]): void {
        this.breadcrumbs.set(crumbs);
    }
}
