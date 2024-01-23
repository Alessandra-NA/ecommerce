import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../modules/user/services/user.service';
import { CartService } from '../../../modules/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
   authenticated!: boolean;
   subscription!: Subscription;
   cartSubtotal: number = 0;
   cartProductQuantity: number = 0;
   
   constructor(private userService: UserService, private cartService: CartService) {
   }

   ngOnInit(): void {
      this.subscription = this.userService.wasAuthenticated.subscribe((auth: boolean) => {
         this.authenticated = auth;
         console.log(this.authenticated)
      })
      this.checkSession()
      this.cartSubtotal = localStorage.getItem('cartSubtotal') ? Number(localStorage.getItem('cartSubtotal')) : 0
      this.cartProductQuantity = localStorage.getItem('cartQuantity') ? Number(localStorage.getItem('cartQuantity')) : 0
      this.cartService.total.subscribe((total: number) => {
         this.cartSubtotal = total
      })
      this.cartService.productsInCart.subscribe((products: number) => {
         this.cartProductQuantity = products
      })
   }

   checkSession() {
      this.userService.checkSession().subscribe({
         next: () => {
            this.userService.changeAuthenticated(true);
         },
         error: () => {
            localStorage.removeItem('userData');
         }
      })
   }

   logout() {
      this.userService.logOut().subscribe(() => {
         this.userService.changeAuthenticated(false);
         localStorage.removeItem('userData');
         window.location.reload();
      })
   }
}
