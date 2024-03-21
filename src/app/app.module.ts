import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';//importamos CUSTOM_ELEMENTS_SCHEMA para poder usar los elementos de Swiper
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ChangeColorDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],//usamos CUSTOM_ELEMENTS_SCHEMA para poder usar los elementos de Swiper
})
export class AppModule {}
