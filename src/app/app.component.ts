import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tienda';
  imagenPadre: string = 'https://picsum.photos/200/200';

  onloaded(img: string) {
    console.log('imagen cargada en el padre');
    console.log(img); // imprimo el valor  que recibo del hijo en consola
  }
}
