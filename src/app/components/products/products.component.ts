import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  shoppingCart: Product[] = [];
  total: number = 0;
  productos: Product[] = [
    {
      id: 1,
      title: 'producto1',
      price: 11000,
      description: 'este producto es muy bueno',
      category: 'AA',
      image: 'https://picsum.photos/200/200',
    },
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
  onAddToShoppingCart(product: Product) {
    console.log('producto agregado');
    console.log(product);
    this.shoppingCart.push(product); //agrego el producto al carrito
    //this.total+=product.price;//sumo el precio del producto al total
    this.total = this.shoppingCart.reduce((acc, prod) => acc + prod.price, 0); //sumo el precio del producto al total
  }
}
