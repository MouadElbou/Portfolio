import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <button
      (click)="toggleTheme()"

      class="fixed bottom-2 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-transparent dark:bg-transparent z-50 cursor-pointer text-gray-800 dark:text-white transition-all duration-500 ease-in-out"
    >
      <svg
        *ngIf="!isDark"
        class="w-6 h-6 transition-opacity duration-500 ease-in-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <svg
        *ngIf="isDark"
        class="w-6 h-6 transition-opacity duration-500 ease-in-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  `,
  styles: [
    `
      button {
        min-width: 3rem; /* Ensures a minimum size */
        min-height: 3rem;
      }

      :host {
        transition: all 0.5s ease-in-out;
      }
    `
  ]
})
export class ThemeToggleComponent {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark');
    document.documentElement.style.transition = 'all 0.5s ease-in-out';
  }
}