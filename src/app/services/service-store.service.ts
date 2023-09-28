import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs'; // rxjs es una librería para programación reactiva  rxjsP0
@Injectable({
  // Decorador para inyectar el servicio en el componente
  providedIn: 'root',
})
export class ServiceStoreService {
  private shoppingCart: Product[] = []; //variable para almacenar el carrito tipo array de productos

  //variable para almacenar el carrito tipo array de productos con BehaviorSubject para que se actualice en tiempo real
  private myCar = new BehaviorSubject<Product[]>([]); //rxjsP2
  mycar$ = this.myCar.asObservable(); //rxjsP3

  constructor() {}

  getShoppingCart() {
    //método para obtener el carrito
    return this.shoppingCart;
  }

  addProduct(product: Product) {
    //metodo para agregar un producto al carrito
    this.shoppingCart.push(product);
    this.myCar.next(this.shoppingCart); //para que todo el que este subscrito reciba esta actualización rxjsP4
    //en este caso en el navbar el contador de productos esta escuchando este cambio.
  }

  getTotal() {
    //método para obtener el total del carrito, cuantos productos tiene
    return this.shoppingCart.reduce((acc, prod) => acc + prod.price, 0);
  }
}
