import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
   
export class CartService {
   private apiUrl = 'http://localhost:3000/cart';
   constructor(private http: HttpClient) { }
   total = new BehaviorSubject<number>(localStorage.getItem('cartSubtotal') ? Number(localStorage.getItem('cartSubtotal')) : 0);
   productsInCart = new BehaviorSubject<number>(localStorage.getItem('cartQuantity') ? Number(localStorage.getItem('cartQuantity')) : 0);
   
   addProduct(productId: number, quantity: number) {
      const url = this.apiUrl + '/addProduct';
      const body = { productId, quantity }
      return this.http.post<Cart>(url, body, { withCredentials: true }).pipe(
         map((resp) => {
            let audio = new Audio();
            audio.src = '../../../assets/success-sound-final.mp3';
            audio.load();
            audio.play();
            this.updateCartSubtotal(resp)
            this.updateCartNumberOfProducts(resp)
            localStorage.setItem('cart', JSON.stringify(resp))
            return resp
         })
      )
   }

   getCart() {
      const url = this.apiUrl;
      return this.http.get<Cart>(url, { withCredentials: true }).pipe(
         map((resp) => {
            this.updateCartSubtotal(resp)
            this.updateCartNumberOfProducts(resp)
            localStorage.setItem('cart', JSON.stringify(resp))
            return resp
         })
      )
   }

   updateCartQuantity(cart: Cart) {
      const url = this.apiUrl + '/updateQuantity';
      return this.http.post<Cart>(url, {cart: cart}, { withCredentials: true }).pipe(
         map((resp) => {
            this.updateCartSubtotal(resp)
            this.updateCartNumberOfProducts(resp)
            localStorage.setItem('cart', JSON.stringify(resp))
            console.log(resp)
            return resp
         })
      )
   }

   updateCartSubtotal(resp: Cart) {
      var subtotal = 0
      resp.products.forEach(product => {
         const productPrice = (product.discountPrice == 0) ? product.price : product.discountPrice
         subtotal += productPrice * product.ShoppingCartProduct!.quantity
      });
      localStorage.setItem('cartSubtotal', subtotal.toString())
      this.total.next(subtotal)
   }
   updateCartNumberOfProducts(resp: Cart) {
      localStorage.setItem('cartQuantity', resp.products.length.toString())
      this.productsInCart.next(resp.products.length)
   }
}
