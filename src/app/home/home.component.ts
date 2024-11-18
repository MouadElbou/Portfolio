import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  roles: string[] = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
  currentRole = this.roles[0];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initTypewriter();
    this.initAnimations();
  }

  private initTypewriter() {
    let currentIndex = 0;
    let charIndex = 0;

    setInterval(() => {
      if (charIndex === 0) {
        currentIndex = (currentIndex + 1) % this.roles.length;
        this.currentRole = this.roles[currentIndex];
      }
      charIndex = (charIndex + 1) % this.currentRole.length;
    }, 100);
  }

  private initAnimations() {
    gsap.from('.hero-section', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center'
      }
    });
  }
}