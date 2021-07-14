import { Component } from '@angular/core';

import { Product, AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  currentProduct: Product;

  constructor(service: AppService) {
      this.products = service.getProducts();
      this.currentProduct = this.products[0];
  }

  selectProduct(e) {
      this.currentProduct = e.itemData;
  }
}
