import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService, NavItem } from '../../services/navigation.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    protected navService = inject(NavigationService);

    toggleItem(label: string): void {
        this.navService.toggleNavItem(label);
    }

    onLinkClick(): void {
        // Close sidebar on mobile when a link is clicked
        if (window.innerWidth <= 768) {
            this.navService.closeSidebar();
        }
    }
}
