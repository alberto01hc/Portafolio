import { Component } from '@angular/core';
import { Job } from '../models/job.model';
import { JobItemComponent } from "../job-item/job-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [JobItemComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      title: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      url: 'https://www.klaviyo.com',
      duration: '2024 — Present',
      description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
    },
    {
      title: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      url: 'https://www.klaviyo.com',
      duration: '2024 — Present',
      description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
    },
    {
      title: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      url: 'https://www.klaviyo.com',
      duration: '2024 — Present',
      description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
    },
    {
      title: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      url: 'https://www.klaviyo.com',
      duration: '2024 — Present',
      description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
    }
    // Puedes añadir más trabajos aquí
  ];
}
