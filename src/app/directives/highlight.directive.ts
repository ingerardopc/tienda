//Manipulando estilos
/* import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'blue';
  }
} */

//Escuchando eventos; cuando el mouse pase por encima
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'rgba(0,0,128,0.5)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
  }

  constructor(private element: ElementRef) {}
}

//Pasando datos a la directiva
// directives/change-color.directive.ts (activar)
/* import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input() color!: string;

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.color = this.color;
  }
} */
