import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-api',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="doc-page"><h1>API Reference</h1><p class="lead">Documentación en desarrollo...</p></div>`,
    styles: [`.doc-page { animation: fadeIn 0.5s ease-out; } .lead { font-size: 1.25rem; color: var(--text-secondary); }`]
})
export class ApiComponent { }
