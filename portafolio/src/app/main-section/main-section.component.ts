import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section',
  imports: [AboutComponent, ProjectsComponent,ExperienceComponent, CommonModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  selectedTab: string = 'about';  // Valor inicial

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
