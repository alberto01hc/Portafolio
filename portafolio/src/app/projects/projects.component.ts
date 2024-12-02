import { Component } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectItemComponent } from "../project-item/project-item.component";

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Build a Spotify Connected App',
      company: 'Newline',
      description: 'Video course that teaches how to build a web app with the Spotify Web API...,Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...',
      duration: '3 months',
      url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      technologies: ['Node', 'React', 'Express', 'Spotify API'],
      imageUrl: 'ooto.png' // Asegúrate de colocar la imagen en tu carpeta de assets
    },
    {
      title: 'Build a Spotify Connected App',
      company: 'Newline',
      description: 'Video course that teaches how to build a web app with the Spotify Web API...,Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...',
      duration: '3 months',
      url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      technologies: ['Node', 'React', 'Express', 'Spotify API'],
      imageUrl: 'ooto.png' // Asegúrate de colocar la imagen en tu carpeta de assets
    },
    {
      title: 'Build a Spotify Connected App',
      company: 'Newline',
      description: 'Video course that teaches how to build a web app with the Spotify Web API...,Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...',
      duration: '3 months',
      url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      technologies: ['Node', 'React', 'Express', 'Spotify API'],
      imageUrl: 'ooto.png' // Asegúrate de colocar la imagen en tu carpeta de assets
    },
    {
      title: 'Build a Spotify Connected App',
      company: 'Newline',
      description: 'Video course that teaches how to build a web app with the Spotify Web API...,Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...Video course that teaches how to build a web app with the Spotify Web API...',
      duration: '3 months',
      url: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      technologies: ['Node', 'React', 'Express', 'Spotify API'],
      imageUrl: 'ooto.png' // Asegúrate de colocar la imagen en tu carpeta de assets
    },
    // Más trabajos...
  ];
}
