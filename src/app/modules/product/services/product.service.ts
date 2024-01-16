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

   getProduct(id: number) {
      const url = this.apiUrl + '/product/get/' + id;
      return this.http.get<Product>(url);
   }

   getRelatedProducts(category: string) {
      const url = this.apiUrl + '/product/category/' + category;
      return this.http.get<Product[]>(url);
   }

   getFeatured() {
      const url = this.apiUrl + '/product/featured';
      return this.http.get<Product[]>(url);
   }
}
