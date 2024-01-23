import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private apiUrl = 'http://localhost:3000/product';
   constructor(private http: HttpClient) { }

   createProduct(name: string, price: number, discountPrice: number, category: string, images: string[], numberInStock: number, active: boolean, rating: number, tags: string[], brand: string, description: string, SKU: string) {
      const url = this.apiUrl + '/create';
      const data = {
         name, price, discountPrice, category, images, numberInStock, active, rating, tags, brand, description, SKU
      }
      return this.http.post<Product>(url, data, { withCredentials: true });
   }

   getProduct(id: number) {
      const url = this.apiUrl + '/get/' + id;
      return this.http.get<Product>(url);
   }

   getRelatedProducts(category: string) {
      const url = this.apiUrl + '/category/' + category;
      return this.http.get<Product[]>(url);
   }

   getFeatured() {
      const url = this.apiUrl + '/featured';
      return this.http.get<Product[]>(url);
   }

   getFilteredProducts(category: string, minPrice: number, maxPrice: number, minRating: number, sortingOrder: string) {
      const url = this.apiUrl + '/filter'
      const body = { category, minPrice, maxPrice, minRating, sortingOrder }
      console.log(body)
      return this.http.post<Product[]>(url, body);
   }
}
