import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseApi = 'http://10.10.2.47:3000/';

  constructor(
    private http: HttpClient,
  ) { }

  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApi + 'products');
  }

  newProduct(newProd: Product): Observable<any> {
    return this.http.post(this.baseApi + 'products', newProd);
  }
}

export class MockProductService {
  getList(): Observable<Product[]> {
    return of([
      new Product('test', 1, 2, 0),
      new Product('test1', 2, 3, 0),
    ]);
  }

  newProduct(product: Product): void {
  }
}
