import { Product } from 'src/app/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ServiceStoreService } from 'src/app/services/service-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  counter: number = 0;

  constructor(private serviceStore: ServiceStoreService) {}
  ngOnInit(): void {
    this.serviceStore.mycar$.subscribe((Product) => {
      this.counter = Product.length; //para que el contador de productos se actualice en tiempo real escuchando el cambio en el servicio
    });
  }

  /* activa y desactivar menu lateral */
  activeMenu = false;
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
  /* ---------------------------------- */
}
