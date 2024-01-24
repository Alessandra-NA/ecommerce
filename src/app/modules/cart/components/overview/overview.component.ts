import { Component, OnInit } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../product/interfaces/product';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
   cart: Cart = JSON.parse(localStorage.getItem('cart')!)
   saved = true;
   cartSubTotal = localStorage.getItem('cartSubtotal')
   loading = false;

   constructor(private cartService: CartService) {
      
   }
   ngOnInit(): void {
      this.cartService.getCart().subscribe({
         next: (resp) => {
            this.cart = resp
         }, error: (err) => {
            console.log(err)
         }
      })
      this.cart.products.forEach(product => {
         
      });
   }

   handlePlus(product: Product) {
      const quantity = product.ShoppingCartProduct!.quantity
      if (quantity < product.numberInStock) {
         this.cart.products.find(p => p.id === product.id)!.ShoppingCartProduct!.quantity++
         this.saved = false
      }
   }
   handleMinus(product: Product) {
      const quantity = product.ShoppingCartProduct!.quantity
      if (quantity > 1) {
         this.cart.products.find(p => p.id === product.id)!.ShoppingCartProduct!.quantity--
         this.saved = false
      }
   }
   deleteProduct(product: Product) {
      this.cart.products.filter(p => p.id === product.id)[0].ShoppingCartProduct!.quantity = 0
      this.saved = false
   }
   updateCart() {
      this.loading = true
      this.cartService.updateCartQuantity(this.cart).subscribe({
         next: (resp) => {
            this.cart = resp
            this.cartSubTotal = localStorage.getItem('cartSubtotal')
            this.saved = true
            this.loading = false
         }, error: (err) => {
            console.log(err)
         }
      })
   }
}
