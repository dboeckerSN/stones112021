import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  styleConfig = {
    borderStyle: 'dashed',
  }

  showWeight = true;

  constructor() { }

  ngOnInit(): void {
  }

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

  toggleWeight() {
    this.showWeight = !this.showWeight;
  }

}
