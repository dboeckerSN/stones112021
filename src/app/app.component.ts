import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);

  onPriceChanged(price: number){
    alert("Neuer Preis: " + price);
  }

  changePrice(price: string) {
    this.productParent.price = Number(price);
    alert("Neuer Preis: " + this.productParent.price);
  }
}
