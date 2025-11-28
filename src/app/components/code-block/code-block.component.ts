import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-code-block',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './code-block.component.html',
    styleUrl: './code-block.component.css'
})
export class CodeBlockComponent {
    @Input() code: string = '';
    @Input() language: string = '';
    @Input() filename?: string;

    protected copied = false;

    copyCode(): void {
        navigator.clipboard.writeText(this.code);
        this.copied = true;
        setTimeout(() => {
            this.copied = false;
        }, 2000);
    }
}
