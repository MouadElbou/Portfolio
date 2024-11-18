import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CvDownloadComponent } from "./cv-download-component/cv-download-component.component";
import { AnimatedBackgroundComponent } from "./animated-background/animated-background.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent, ProjectsComponent, SkillsComponent, ContactComponent, HomeComponent, CvDownloadComponent, AnimatedBackgroundComponent, ToolbarComponent],
  template: `
     <app-animated-background />
     <app-toolbar/>
    <div class="relative z-9">
      <app-theme-toggle />
      <app-home />
      <app-projects />
      <app-skills />
      <app-cv-download />
      <app-contact />
    </div>
  `
})
export class AppComponent {}
