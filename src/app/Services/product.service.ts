import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product>{
    return this.http.get<Product>("/assets/fakeBackendApi/products.json");
  }

  getNewCollection():Observable<Product>{
    return this.http.get<Product>("/assets/fakeBackendApi/new-collection.json");

  }
}
