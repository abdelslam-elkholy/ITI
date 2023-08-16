import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  get allProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products`
    );
  }
  getProductByID(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.BaseApiURL}/products/${id}`
    );
  }

  searchByName(name: string): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products/search?name=${name}`
    );
  }

  getByCategory(id: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products/?categoryID=${id}`
    );
  }
}
