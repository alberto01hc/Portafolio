import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-item',
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() project!: Project; 
}
