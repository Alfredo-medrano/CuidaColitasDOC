import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FeatureCard {
    icon: string;
    title: string;
    description: string;
    route: string;
    gradient: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    protected features: FeatureCard[] = [
        {
            icon: 'fa-solid fa-book',
            title: 'Manual de Usuario',
            description: 'Guías completas para clientes, veterinarios y administradores del sistema',
            route: '/user-manual/cliente',
            gradient: 'linear-gradient(135deg, #0A8A7B 0%, #43C0AF 100%)'
        },
        {
            icon: 'fa-solid fa-code',
            title: 'Manual de Desarrollador',
            description: 'Documentación técnica, arquitectura y guías de implementación',
            route: '/developer/architecture',
            gradient: 'linear-gradient(135deg, #027A74 0%, #0A8A7B 100%)'
        },
        {
            icon: 'fa-solid fa-server',
            title: 'Documentación Técnica',
            description: 'Base de datos, seguridad RLS, deployment y solución de problemas',
            route: '/technical/database',
            gradient: 'linear-gradient(135deg, #E07856 0%, #CDA37B 100%)'
        }
    ];

    protected quickLinks = [
        { label: 'Instalación Rápida', route: '/developer/installation' },
        { label: 'Arquitectura del Sistema', route: '/developer/architecture' },
        { label: 'API Reference', route: '/developer/api' },
        { label: 'Guía de Deployment', route: '/technical/deployment' }
    ];
}
