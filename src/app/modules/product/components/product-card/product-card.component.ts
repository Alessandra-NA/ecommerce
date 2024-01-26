import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../../cart/services/cart.service';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
   cardType: string = 'vertical';
   @Input() product!: Product
   loading = false;
   logged = false;

constructor(private cartService: CartService, private userService: UserService) { }
   ngOnInit(): void {
      this.userService.authenticated.subscribe((auth: boolean) => {
         this.logged = auth
      })
   }

   getRange(n: number): number[] {
      return Array.from({ length: n }, (_, index) => index + 1);
   }

   addProductToCart(event: Event) {
      this.loading = true;
      event.stopPropagation();
      this.cartService.addProduct(this.product.id, 1).subscribe({
         next: (res) => {
            this.loading = false
         },
         error: (error) => {
            console.log(error)
         }
      })
   }
}
