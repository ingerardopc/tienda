import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  imagen: string = 'https://picsum.photos/200/200';
  @Input() product: Product = {
    id: 1,
    title: 'producto 1',
    price: 12000,
    description: 'este producto es muy bueno',
    category: 'AAA',
    image: 'https://picsum.photos/200/200',
  };

  constructor() {}

  onloaded(img: string) {
    console.log('imagen cargada en el padre');
    console.log(img); // imprimo el valor  que recibo del hijo en consola
  }
}
