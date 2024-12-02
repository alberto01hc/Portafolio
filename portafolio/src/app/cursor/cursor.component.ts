import { Component, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements AfterViewInit {

  @ViewChild('cursor') cursorElement!: ElementRef;  // Usamos '!' para indicar que se inicializará después

  ngAfterViewInit(): void {
    // Ahora podemos acceder a cursorElement sin errores
    const cursor = this.cursorElement.nativeElement;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.cursorElement) {
      // Obtener la posición del mouse y mover el cursor
      this.cursorElement.nativeElement.style.left = `${event.clientX - this.cursorElement.nativeElement.offsetWidth / 2}px`;
      this.cursorElement.nativeElement.style.top = `${event.clientY - this.cursorElement.nativeElement.offsetHeight / 2}px`;
    }
  }
}
