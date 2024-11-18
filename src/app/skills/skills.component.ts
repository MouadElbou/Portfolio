import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="skills" class="min-h-screen bg-white dark:bg-gray-900 py-20 px-4" role="region" aria-labelledby="skills-heading">
      <div class="container mx-auto">
        <h2 scrollAnimation id="skills-heading" class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white opacity-0">
          Skills & Expertise
        </h2>
       
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-3/4 mx-auto grid grid-cols-2 gap-4">
            @for (category of skillCategories; track category.name) {
              <div scrollAnimation 
                   class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 opacity-0" 
                   role="region" 
                   [attr.aria-label]="category.name + ' skills'">
                <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {{category.name}}
                </h3>
                <ul class="space-y-2" role="list">
                  @for (skill of category.skills; track skill) {
                    <li class="flex items-center text-gray-700 dark:text-gray-300 transform transition-all duration-300 hover:translate-x-2" 
                        role="listitem">
                      <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" 
                            aria-hidden="true"></span>
                      {{skill}}
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  @ViewChild('canvas') private readonly canvasRef!: ElementRef;
  
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: TrackballControls;
  private sphere!: THREE.Mesh;

  skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL']
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git']
    },
    {
      name: 'Other',
      skills: ['UI/UX Design', 'Agile', 'Testing', 'Performance Optimization']
    }
  ];

  ngOnInit() {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
   
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true
    });
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    this.camera.position.z = 10;
   
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 2;
    this.controls.zoomSpeed = 1;
    this.controls.panSpeed = 1;
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
   
    if (this.sphere) {
      this.sphere.rotation.x += 0.005;
      this.sphere.rotation.y += 0.005;
    }
   
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
