import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Injectable({
  // Decorador para inyectar el servicio en el componente
  providedIn: 'root',
})
export class ServiceStoreService {
  private shoppingCart: Product[] = []; //variable para almacenar el carrito tipo array de productos

  constructor() {}

  getShoppingCart() {
    //metodo para obtener el carrito
    //metodo para obtener el carrito
    return this.shoppingCart;
  }

  addProduct(product: Product) {
    //metodo para agregar un producto al carrito
    this.shoppingCart.push(product);
  }
  getTotal() {
    //metodo para obtener el total del carrito, cuantos productos tiene
    return this.shoppingCart.reduce((acc, prod) => acc + prod.price, 0);
  }
}
