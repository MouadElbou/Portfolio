import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-cv-download',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div scrollAnimation class="max-w-3xl mx-auto text-center opacity-0">
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-xl">
            <h2 class="text-3xl font-bold text-white mb-4">
              Download My CV
            </h2>
            <p class="text-gray-100 mb-8">
              Get a detailed look at my experience and skills
            </p>
            <a href="assets/cv.pdf"
               download="YourName_CV.pdf"
               class="group inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg
                      hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <span>Download CV</span>
              <svg
                class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3">
                </path>
              </svg>
            </a>
            <div class="mt-6 flex justify-center gap-4 text-sm text-gray-100">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
                PDF Format
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                1.2 MB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CvDownloadComponent {}
