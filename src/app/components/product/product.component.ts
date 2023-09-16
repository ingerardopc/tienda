import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  //imagen: string = 'https://picsum.photos/200/200';// imagen para local
  @Input() product: Product = {
    id: 11,
    title: 'producto 11',
    price: 112000,
    description: '11este producto es muy bueno',
    category: '11AAA',
    image: '11https://picsum.photos/200/200',
  };

  @Output() addToCartClick = new EventEmitter<Product>();

  constructor() {}

  onloaded(img: string) {
    console.log('imagen cargada en el padre');
    console.log(img);
    // imprimo el valor  que recibo del hijo en consola
    this.product.image = img;
  }

  onAddToCart() {
    this.addToCartClick.emit(this.product);
  }
}
