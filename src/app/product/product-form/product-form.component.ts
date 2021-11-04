import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productAdd = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.productForm = fb.group({
      name: [''],
      price: [''],
      weight: [''],
    })
   }

  ngOnInit(): void {
  }

  saveProduct() {
    this.productAdd.emit({id: 1 , ...this.productForm.value});
    /*
    this.saveProduct.emit({
      0,
      this.productForm.value.name,
      this.productForm.value.price,
      this.productForm.value.weight,
    });
    //*
    this.saveProduct.emit({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
  }

}
