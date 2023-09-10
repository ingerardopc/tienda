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
  productos: Product[] = [
    {
      id: 2,
      title: 'producto2',
      price: 12000,
      description: 'este producto es muy bueno',
      category: 'AA',
      image: 'https://picsum.photos/200/200',
    },
    {
      id: 3,
      title: 'producto 3',
      price: 13000,
      description: 'este producto es muy bueno',
      category: 'A',
      image: 'https://picsum.photos/200/200',
    },
    {
      id: 4,
      title: 'producto 4',
      price: 14000,
      description: 'este producto es muy bueno',
      category: 'AAA',
      image: 'https://picsum.photos/200/200',
    },
    {
      id: 5,
      title: 'producto 5',
      price: 15000,
      description: 'este producto es muy bueno',
      category: 'AA',
      image: 'https://picsum.photos/200/200',
    },
  ];

  onloaded(img: string) {
    console.log('imagen cargada en el padre');
    console.log(img); // imprimo el valor  que recibo del hijo en consola
  }
}
