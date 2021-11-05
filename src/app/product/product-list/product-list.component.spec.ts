import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { MockProductService, ProductService } from '../product.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
         ProductListComponent,
          ProductDisplayComponent,
         ],
      providers: [
        {
          provide: ProductService,
          useClass: MockProductService,
        }
      ],
      imports:[
        MatCardModule,
        UtilsModule,
        MatFormFieldModule,
        MatInputModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products from service', () => {
    component.products.subscribe(products =>
      expect(products[0].id).toBe(0)
    )
  });
});
