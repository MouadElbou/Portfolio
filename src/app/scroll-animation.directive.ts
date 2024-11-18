import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { 
      threshold: 0.3,  // Increased threshold
      rootMargin: '-50px'  // Added offset
    });

    observer.observe(this.element.nativeElement);
  }
}
