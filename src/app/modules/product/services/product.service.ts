import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private apiUrl = 'http://localhost:3000';
   constructor(private http: HttpClient) { }

   createProduct(name: string, price: number, discountPrice: number, category: string, images: string[], numberInStock: number, active: boolean, rating: number, tags: string[], brand: string, description: string, SKU: string) {
      const url = this.apiUrl + '/product/create';
      const data = {
         name, price, discountPrice, category, images, numberInStock, active, rating, tags, brand, description, SKU
      }
      return this.http.post<Product>(url, data);
   }
}
