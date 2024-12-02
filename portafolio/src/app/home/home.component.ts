import { Component } from '@angular/core';
import { MainSectionComponent } from '../main-section/main-section.component';
import { HeaderComponent } from '../header/header.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedTab: string = 'about'; // Valor por defecto, puede ser 'about', 'experience', 'projects', 'contact'

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
