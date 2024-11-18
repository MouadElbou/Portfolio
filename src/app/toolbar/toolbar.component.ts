import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full z-30 bg-transparent backdrop-blur-md">
      <div class="container mx-auto px-6">


        <div class="flex items-center justify-between h-14">
          <div class="flex-shrink-0">
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
             PORTFOLIO
            </span>
          </div>



          <div class="hidden md:flex items-center justify-between flex-1 px-60">
            <a *ngFor="let item of menuItems"
               (click)="scrollToSection(item.href)"
               class="cursor-pointer text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400
                      transition-colors duration-200 font-medium mx-2">
              {{ item.label }}
            </a>
          </div>


          <div class="md:hidden">
            <button (click)="toggleMobileMenu()"
                    class="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path [attr.d]="isMobileMenuOpen ? 
                  'M6 18L18 6M6 6l12 12' : 
                  'M4 6h16M4 12h16M4 18h16'" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div *ngIf="isMobileMenuOpen" 
             class="md:hidden"
             [@slideInOut]>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a *ngFor="let item of menuItems"
               (click)="scrollToSection(item.href)"
               class="cursor-pointer block px-3 py-2 rounded-md text-black dark:text-white
                      hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800
                      transition-colors duration-200">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class ToolbarComponent {
  isMobileMenuOpen = false;

  menuItems = [
    { label: 'Home', href: 'home' },
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'Contact', href: 'contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }
}