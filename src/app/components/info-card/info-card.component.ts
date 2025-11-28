import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InfoCardType = 'info' | 'warning' | 'success' | 'error' | 'tip';

@Component({
    selector: 'app-info-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './info-card.component.html',
    styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
    @Input() type: InfoCardType = 'info';
    @Input() title?: string;

    get icon(): string {
        switch (this.type) {
            case 'info': return 'ℹ️';
            case 'warning': return '⚠️';
            case 'success': return '✅';
            case 'error': return '❌';
            case 'tip': return '💡';
            default: return 'ℹ️';
        }
    }
}
