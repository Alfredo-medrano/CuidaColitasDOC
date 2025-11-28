import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';

@Component({
    selector: 'app-cliente',
    standalone: true,
    imports: [CommonModule, InfoCardComponent],
    templateUrl: './cliente.component.html',
    styleUrl: './cliente.component.css'
})
export class ClienteComponent { }
