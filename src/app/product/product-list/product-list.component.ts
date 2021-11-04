import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);
  products!: Array<Product>;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getList();
  }

  onPriceChanged(price: number){
    alert("Neuer Preis: " + price);
  }

  onProductAdd(newProd: Product) {
    this.products.unshift(newProd);
  }

}
