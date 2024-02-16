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

   updateProduct(id: number, name: string, price: number, discountPrice: number, category: string, images: string[], numberInStock: number, active: boolean, rating: number, tags: string[], brand: string, description: string, SKU: string) {
      const url = this.apiUrl + '/update';
      const data = {
         id, name, price, discountPrice, category, images, numberInStock, active, rating, tags, brand, description, SKU
      }
      return this.http.post<Product>(url, data, { withCredentials: true });
   }

   deleteProduct(id: number) {
      const url = this.apiUrl + '/delete';
      const data = {
         id
      }
      return this.http.post<Product>(url, data, { withCredentials: true });
   }

   getAllProducts() {
      const url = this.apiUrl;
      return this.http.get<Product[]>(url);
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
      return this.http.post<Product[]>(url, body);
   }

   getProductsFromSearch(searchString: string) {
      const url = this.apiUrl + '/search';
      const body = { searchString }
      return this.http.post<Product[]>(url, body);
   }
}
