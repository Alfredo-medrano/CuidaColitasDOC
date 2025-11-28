import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            // User Manual Routes
            {
                path: 'user-manual',
                children: [
                    {
                        path: 'cliente',
                        loadComponent: () => import('./pages/user-manual/cliente/cliente.component').then(m => m.ClienteComponent)
                    },
                    {
                        path: 'veterinario',
                        loadComponent: () => import('./pages/user-manual/veterinario/veterinario.component').then(m => m.VeterinarioComponent)
                    },
                    {
                        path: 'admin',
                        loadComponent: () => import('./pages/user-manual/admin/admin.component').then(m => m.AdminComponent)
                    }
                ]
            },
            // Developer Manual Routes
            {
                path: 'developer',
                children: [
                    {
                        path: 'architecture',
                        loadComponent: () => import('./pages/developer/architecture/architecture.component').then(m => m.ArchitectureComponent)
                    },
                    {
                        path: 'installation',
                        loadComponent: () => import('./pages/developer/installation/installation.component').then(m => m.InstallationComponent)
                    },
                    {
                        path: 'structure',
                        loadComponent: () => import('./pages/developer/structure/structure.component').then(m => m.StructureComponent)
                    },
                    {
                        path: 'api',
                        loadComponent: () => import('./pages/developer/api/api.component').then(m => m.ApiComponent)
                    },
                    {
                        path: 'contributing',
                        loadComponent: () => import('./pages/developer/contributing/contributing.component').then(m => m.ContributingComponent)
                    }
                ]
            },
            // Technical Documentation Routes
            {
                path: 'technical',
                children: [
                    {
                        path: 'database',
                        loadComponent: () => import('./pages/technical/database/database.component').then(m => m.DatabaseComponent)
                    },
                    {
                        path: 'rls',
                        loadComponent: () => import('./pages/technical/rls/rls.component').then(m => m.RlsComponent)
                    },
                    {
                        path: 'gemini',
                        loadComponent: () => import('./pages/technical/gemini/gemini.component').then(m => m.GeminiComponent)
                    },
                    {
                        path: 'deployment',
                        loadComponent: () => import('./pages/technical/deployment/deployment.component').then(m => m.DeploymentComponent)
                    },
                    {
                        path: 'troubleshooting',
                        loadComponent: () => import('./pages/technical/troubleshooting/troubleshooting.component').then(m => m.TroubleshootingComponent)
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
