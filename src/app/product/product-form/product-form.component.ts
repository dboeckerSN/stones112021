import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/utils/validators/custom-validators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id = 0;

  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.route.paramMap.subscribe(paramMap => {
      const id = Number(paramMap.get('id'));
      if (id) {
        this.id = id;
      }
   });
    this.productForm = fb.group({
      name: ['', [Validators.required, CustomValidators.alphaNum]],
      price: ['', [CustomValidators.positiv]],
      weight: [''],
    })
   }

  ngOnInit(): void {
  }

  saveProduct() {
    if(this.productForm.valid) {
      // this.productAdd.emit({id: this.id , ...this.productForm.value});
      const product = {id: this.id , ...this.productForm.value}
      this.productService.newProduct(product);
      this.productForm.reset();
    }
  }

  isSaved(): boolean {
    const formValue = this.productForm.value;
    if(!formValue.name && !formValue.price && !formValue.weight) {
      return true;
    } else {
      return confirm('Sie haben ungespeicherte Einträge. Wollen Sie wirklich fortfahren?');
    }
  }

}
