import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  //imagen: string = 'https://picsum.photos/200/200';// imagen para local
  @Input() productF: Product = {
    id: '11',
    title: 'producto 11',
    price: 112000,
    description: '11este producto es muy bueno',
    category: {
      id: '0',
      name: 'AA',
    },
    images: [
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/300',
      'https://picsum.photos/300/200',
    ],
  };

  @Output() addToCartClick = new EventEmitter<Product>();
  @Output() addToShowDetail = new EventEmitter<string>();

  onloaded(img: string) {
    console.log('imagen cargada en el padre');
    console.log(img);
    // imprimo el valor  que recibo del hijo en consola
    this.productF.images[1] = img;
  }

  onAddToCart() {
    console.log('agregar al carrito');
    console.log(this.productF);
    this.addToCartClick.emit(this.productF);
  }

  saberSiLLego() {
    console.log('llego el valor');
    console.log(this.productF);
  }

  onShowDetail() {
    console.log('mostrar detalle');
    this.addToShowDetail.emit(this.productF.id);
  }
}
