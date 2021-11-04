import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { UtilsModule } from '../utils/utils.module';
import {MatButtonModule} from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductDisplayComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UtilsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductDisplayComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }
