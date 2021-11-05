import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { UtilsModule } from '../utils/utils.module';
import {MatButtonModule} from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductDisplayComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UtilsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ProductDisplayComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }
