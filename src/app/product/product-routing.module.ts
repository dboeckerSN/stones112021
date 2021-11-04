import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveFormsGuardGuard } from '../utils/guards/save-forms-guard.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {
    path: 'products/new/:id',
    component: ProductFormComponent,
    canDeactivate: [SaveFormsGuardGuard],
  },
  {
    path: 'products/new',
     component: ProductFormComponent,
     canDeactivate: [SaveFormsGuardGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
