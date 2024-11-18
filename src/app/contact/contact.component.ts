import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ScrollAnimationDirective],
  template: `
  
  <section id="contact" class="min-h-screen py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div scrollAnimation class="opacity-0">
      <h2 class="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p class="text-center mb-12 text-gray-600 dark:text-gray-300">
        Have a question or want to work together?
      </p>
    </div>

    <div scrollAnimation class="max-w-lg mx-auto opacity-0">
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()"
            class="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input type="text" formControlName="name"
                 class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input type="email" formControlName="email"
                 class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea formControlName="message" rows="5"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
          </textarea>
        </div>

        <button type="submit"
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full py-3 px-6 text-white bg-blue-600 rounded-lg
                       hover:bg-blue-700 transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>

        @if (submitStatus) {
          <div [ngClass]="submitStatus.success ? 'text-green-500' : 'text-red-500'"
               class="text-center mt-4">
            {{ submitStatus.message }}
          </div>
        }
      </form>
    </div>
  </div>
</section>
  `
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: { success: boolean; message: string } | null = null;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    emailjs.init("DQq24yYlUO4oOTz40");
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        await emailjs.send(
          "service_tg7le9i",
          "template_jqnx5qj",
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          }
        );

        this.submitStatus = {
          success: true,
          message: 'Message sent successfully!'
        };
        this.contactForm.reset();
      } catch (error) {
        this.submitStatus = {
          success: false,
          message: 'Failed to send message. Please try again.'
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}