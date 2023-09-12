import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = ''; //Input recibe el valor del padre
  @Output() loaded = new EventEmitter<string>(); // emite un evento al padre
  imgNoFound: string = '../../../assets/descarga.png'; // imagen por defecto

  imgload() {
    console.log('imagen cargada');
    this.loaded.emit(this.img); // emite el evento al padre con el valor de la imagen
  }

  imgError() {
    this.img = this.imgNoFound;
  }
}
