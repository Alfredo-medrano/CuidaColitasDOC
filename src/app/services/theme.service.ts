import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly STORAGE_KEY = 'cuida-colitas-theme';

    // Signal for reactive theme state
    public theme = signal<Theme>(this.getInitialTheme());

    constructor() {
        // Apply theme whenever it changes
        effect(() => {
            this.applyTheme(this.theme());
        });
    }

    private getInitialTheme(): Theme {
        // Check localStorage first
        const stored = localStorage.getItem(this.STORAGE_KEY) as Theme;
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    private applyTheme(theme: Theme): void {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
    }

    public toggleTheme(): void {
        this.theme.update(current => current === 'light' ? 'dark' : 'light');
    }

    public setTheme(theme: Theme): void {
        this.theme.set(theme);
    }
}
