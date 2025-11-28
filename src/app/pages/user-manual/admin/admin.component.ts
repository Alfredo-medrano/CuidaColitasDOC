import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule, InfoCardComponent],
    template: `
    <div class="doc-page">
      <h1>Manual de Usuario - Administrador</h1>
      <p class="lead">Guía completa para administradores del sistema CuidaColitas</p>

      <app-info-card type="info" title="Documentación en Desarrollo">
        <p>Esta sección está siendo desarrollada. Próximamente encontrarás información detallada sobre:</p>
        <ul>
          <li>Panel de administración</li>
          <li>Gestión de usuarios (CRUD)</li>
          <li>Reportes y estadísticas</li>
          <li>Configuración del sistema</li>
          <li>Auditoría de acciones</li>
        </ul>
      </app-info-card>

      <section class="doc-section">
        <h2>📊 Próximas Secciones</h2>
        <ul>
          <li>Dashboard Administrativo</li>
          <li>Gestión de Veterinarios</li>
          <li>Gestión de Clientes</li>
          <li>Reportes Avanzados</li>
          <li>Logs del Sistema</li>
        </ul>
      </section>
    </div>
  `,
    styles: [`
    .doc-page { animation: fadeIn 0.5s ease-out; }
    .lead { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem; }
    .doc-section { margin-bottom: 3rem; }
    .doc-section h2 { font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border-color); }
    ul { margin-left: 1.5rem; margin-bottom: 1rem; }
    li { margin-bottom: 0.5rem; line-height: 1.6; }
  `]
})
export class AdminComponent { }
