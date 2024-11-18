import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="projects" class="min-h-screen bg-white dark:bg-gray-900 py-20 px-4">
      <div class="container mx-auto">
        <h2 scrollAnimation class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white opacity-0">
          My Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <div scrollAnimation
              class="project-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 opacity-0"
            >
              <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{project.title}}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{project.description}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                      {{tech}}
                    </span>
                  }
                </div>
                <div class="flex gap-4">
                  <a [href]="project.demo" target="_blank"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Live Demo
                  </a>
                  <a [href]="project.github" target="_blank"
                    class="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory and payment processing',
      image: 'assets/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/yourusername/project'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'assets/projects/taskapp.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/yourusername/project'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps',
      image: 'assets/projects/weather.jpg',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/yourusername/project'
    }
  ];
}
