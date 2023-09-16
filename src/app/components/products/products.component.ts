import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ServiceStoreService } from 'src/app/services/service-store.service'; // importamos nuestro servcio
import { ProductsService } from 'src/app/services/products.service'; // importamos nuestro servcio para traer los productos de la api.
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(
    private serviceStore: ServiceStoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = this.serviceStore.getShoppingCart(); //inyectamos el servicio
  } //inyectamos el servicio
  shoppingCart: Product[] = [];
  //migramos a service-store
  total: number = 0;
  date: Date = new Date();
  productos: Product[] = []; //vamos a traer de products.service.ts que nos trae los productos de la api
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.productos = data;
    });
  }
  onAddToShoppingCart(product: Product) {
    console.log('producto agregado');
    //this.shoppingCart.push(product); //agrego el producto al carrito, este lo teniamos para local sin utilizar el servicio
    this.serviceStore.addProduct(product); //agrego el producto al carrito usando el servicio
    //this.total+=product.price;//sumo el precio del producto al total de una forma sencilla sin usar el servicio
    //this.total = this.shoppingCart.reduce((acc, prod) => acc + prod.price, 0); //sumo el precio del producto al total sin usar el servicio
    this.total = this.serviceStore.getTotal(); //sumo el precio del producto al total usando el servicio
  }

  //como vamos a traer los productos desde una api y ano lo vamos a hacer en local
  /* [
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
  ]; */
}
