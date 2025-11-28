import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';

@Component({
    selector: 'app-veterinario',
    standalone: true,
    imports: [CommonModule, InfoCardComponent],
    template: `
    <div class="doc-page">
      <h1>Manual de Usuario - Veterinario</h1>
      <p class="lead">Guía completa para veterinarios usando CuidaColitas</p>

      <app-info-card type="info" title="Documentación en Desarrollo">
        <p>Esta sección está siendo desarrollada. Próximamente encontrarás información detallada sobre:</p>
        <ul>
          <li>Gestión de citas</li>
          <li>Creación de registros médicos</li>
          <li>Subida de archivos y resultados de exámenes</li>
          <li>Comunicación con clientes vía chat</li>
          <li>Panel de control veterinario</li>
        </ul>
      </app-info-card>

      <section class="doc-section">
        <h2>📋 Próximas Secciones</h2>
        <ul>
          <li>Dashboard del Veterinario</li>
          <li>Gestión de Citas</li>
          <li>Historiales Médicos</li>
          <li>Prescripciones y Tratamientos</li>
          <li>Chat con Clientes</li>
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
export class VeterinarioComponent { }
