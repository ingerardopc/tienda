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
  shoppingCart: Product[] = [];
  products: Product[] = []; //para traer los productos de la api en una array
  total: number = 0; //para sumar el total de los productos
  date: Date = new Date(); //para mostrar la fecha de este momento
  showProductDetail = false; //para mostrar el carrito de compras
  productChosen: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: '0',
      name: '',
    },
    images: [],
  }; //para mostrar el detalle del producto

  constructor(
    private serviceStore: ServiceStoreService, //inyectamos el servicio.
    private productsService: ProductsService //inyectamos el servicio.
  ) {
    this.shoppingCart = this.serviceStore.getShoppingCart(); //traemos el carrito de compras del servicio
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      //vamos a traer de products.service.ts que nos trae los productos de la api
      this.products = data;
      console.log('productos');
      console.log(this.products);
    });
  }

  onAddToShoppingCart(product: Product) {
    console.log('producto agregado al carrito');
    console.log(product);
    //this.shoppingCart.push(product); //agrego el producto al carrito, este lo teníamos para local sin utilizar el servicio
    this.serviceStore.addProduct(product); //agrego el producto al carrito usando el servicio
    //this.total+=product.price;//sumo el precio del producto al total de una forma sencilla sin usar el servicio
    //this.total = this.shoppingCart.reduce((acc, prod) => acc + prod.price, 0); //sumo el precio del producto al total sin usar el servicio
    this.total = this.serviceStore.getTotal(); //sumo el precio del producto al total usando el servicio
  }

  toggleProductDetail() {
    //para mostrar el detalle del producto
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    //para mostrar el detalle del producto a la derecha de la pantalla
    console.log('mostrar detallessssss');
    this.productsService.getProduct(id).subscribe((data) => {
      //vamos a traer de products.service.ts de la api
      console.log(data);
      this.toggleProductDetail(); //desplegar el detalle del producto a la derecha de la pantalla
      this.productChosen = data;
    });
  }

  //como vamos a traer los productos desde una api y ya no lo vamos a hacer en local
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
