import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { CodeBlockComponent } from '../../../components/code-block/code-block.component';

@Component({
    selector: 'app-installation',
    standalone: true,
    imports: [CommonModule, InfoCardComponent, CodeBlockComponent],
    template: `
    <div class="doc-page">
      <h1>Guía de Instalación</h1>
      <p class="lead">Configura tu entorno de desarrollo para CuidaColitas</p>

      <app-info-card type="warning" title="Prerrequisitos">
        <p>Antes de comenzar, asegúrate de tener instalado:</p>
        <ul>
          <li>Node.js (v18 o superior)</li>
          <li>npm o yarn</li>
          <li>Git</li>
          <li>Android Studio (para desarrollo Android)</li>
        </ul>
      </app-info-card>

      <section class="doc-section">
        <h2>📦 Instalación del Proyecto Mobile</h2>
        <app-code-block
          language="bash"
          [code]="'git clone https://github.com/tu-usuario/CuidaColitasAPP.git\\ncd CuidaColitasAPP\\nnpm install\\n# Configura las variables de entorno\\ncp .env.example .env\\n# Edita .env con tus credenciales de Supabase\\nnpm start'"
        ></app-code-block>
      </section>

      <section class="doc-section">
        <h2>🔑 Variables de Entorno</h2>
        <p>Crea un archivo <code>.env</code> con:</p>
        <app-code-block
          filename=".env"
          [code]="'SUPABASE_URL=tu-url-de-supabase\\nSUPABASE_ANON_KEY=tu-anon-key\\nGEMINI_API_KEY=tu-gemini-api-key'"
        ></app-code-block>
      </section>

      <app-info-card type="success" title="¡Listo!">
        <p>Tu entorno de desarrollo está configurado. Ahora puedes ejecutar <code>npm start</code> y escanear el código QR con Expo Go.</p>
      </app-info-card>
    </div>
  `,
    styles: [`
    .doc-page { animation: fadeIn 0.5s ease-out; }
    .lead { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem; }
    .doc-section { margin-bottom: 3rem; }
    .doc-section h2 { font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border-color); }
    code { background: var(--bg-tertiary); padding: 0.2rem 0.4rem; border-radius: 4px; }
  `]
})
export class InstallationComponent { }
