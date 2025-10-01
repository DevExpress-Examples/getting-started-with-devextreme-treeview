import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { Product } from './app.types';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[];

  currentProduct: Product | null = null;

  constructor(private readonly productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  selectProduct(e: DxTreeViewTypes.ItemSelectionChangedEvent): void {
    const selectedProduct = e.itemData as Product;
    if (selectedProduct?.price) {
      this.currentProduct = selectedProduct;
      notify(`Product selected: ${selectedProduct.name}`, 'success', 2000);
    } else {
      this.currentProduct = null;
    }
  }
}
