import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div class="fixed inset-0 z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/20">
        <div class="absolute inset-0" id="particles-background"></div>
      </div>
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  `,
  styles: [`
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
    }

    :host {
      display: block;
      pointer-events: none;
    }
  `]
})
export class AnimatedBackgroundComponent implements OnInit {
  ngOnInit() {
    this.initParticles();
  }

  private initParticles() {
    const particlesConfig = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {

          value: 0.8,
          random: false
        },
        size: {

          value: 4,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",


          opacity: 0.6,
          width: 1.5
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        }
      },
      retina_detect: true
    };

    // @ts-ignore
    particlesJS('particles-background', particlesConfig);
  }

}