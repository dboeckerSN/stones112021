import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NettoPipe } from 'src/app/utils/pipes/netto.pipe';
import { Product } from '../product';

import { ProductDisplayComponent } from './product-display.component';

describe('ProductDisplayComponent', () => {
  let component: ProductDisplayComponent;
  let fixture: ComponentFixture<ProductDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayComponent, NettoPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayComponent);
    component = fixture.componentInstance;
    component.product = new Product(1, 'Grabstein Marmor', 123.56, 12);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raisePrice() should raise price', () => {
    const oldVal = component.product.price;

    component.raisePrice();

    expect(oldVal).toBeLessThan(component.product.price);
  });

  it('should show name', () => {
    const nameElement = fixture.debugElement.query(By.css('.name'));

    expect(nameElement.nativeElement.textContent).toContain('Grabstein Marmor')
  });

  it('button should raise Price on Click', () => {
    const oldVal = component.product.price;
    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();

    expect(oldVal).toBeLessThan(component.product.price);
  });
});
