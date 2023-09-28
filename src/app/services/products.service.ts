import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'; //importamos el modulo para hacer peticiones http
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlApi = 'https://young-sands-07814.herokuapp.com/api/products';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    // para traer todo los productos
    return this.http.get<Product[]>(this.urlApi);
  }
  getProduct(id: string) {
    // par atraer 1 producto por id
    return this.http.get<Product>(`${this.urlApi}/${id}`);
  }
}
