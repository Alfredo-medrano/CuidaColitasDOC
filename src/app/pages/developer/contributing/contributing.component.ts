import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contributing',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="doc-page"><h1>Guía de Contribución</h1><p class="lead">Documentación en desarrollo...</p></div>`,
    styles: [`.doc-page { animation: fadeIn 0.5s ease-out; } .lead { font-size: 1.25rem; color: var(--text-secondary); }`]
})
export class ContributingComponent { }
