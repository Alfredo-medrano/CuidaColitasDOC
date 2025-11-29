import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';

@Component({
  selector: 'app-veterinario',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './veterinario.component.html',
  styleUrl: './veterinario.component.css'
})
export class VeterinarioComponent { }
