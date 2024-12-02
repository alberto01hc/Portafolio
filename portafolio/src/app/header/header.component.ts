import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedTab: string = ''; // Para manejar la pestaña seleccionada
  sectionOffsets: { [key: string]: HTMLElement | null } = {}; // Para guardar las secciones

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Configurar el IntersectionObserver solo si estamos en el navegador
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // La sección debe estar al menos al 60% visible
      };

      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(`.nav-link[data-target="${entry.target.id}"]`);
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add('selected');
              this.selectedTab = entry.target.id; // Actualiza la pestaña seleccionada
            } else {
              navLink.classList.remove('selected');
            }
          }
        });
      };

      // Crear el IntersectionObserver
      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observar todas las secciones
      const sections = document.querySelectorAll('.container3 section');
      sections.forEach((section) => observer.observe(section));
    }
  }

  // Método para cambiar la sección al hacer clic
  scrollToSection(section: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
      }
    }
  }

  setActiveTab(tab: string): void {
    this.selectedTab = tab; // Establece la pestaña activa al hacer clic
  }

}