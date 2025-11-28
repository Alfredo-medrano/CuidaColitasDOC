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
            icon: '📖',
            title: 'Manual de Usuario',
            description: 'Guías paso a paso para clientes, veterinarios y administradores',
            route: '/user-manual/cliente',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            icon: '👨‍💻',
            title: 'Manual de Desarrollador',
            description: 'Documentación técnica, arquitectura y guías de instalación',
            route: '/developer/architecture',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            icon: '📋',
            title: 'Documentación Técnica',
            description: 'Base de datos, RLS policies, deployment y troubleshooting',
            route: '/technical/database',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        }
    ];

    protected quickLinks = [
        { label: 'Instalación Rápida', route: '/developer/installation' },
        { label: 'Arquitectura del Sistema', route: '/developer/architecture' },
        { label: 'API Reference', route: '/developer/api' },
        { label: 'Guía de Deployment', route: '/technical/deployment' }
    ];
}
