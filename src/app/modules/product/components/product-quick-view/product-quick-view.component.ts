import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../cart/services/cart.service';

@Component({
   selector: 'app-product-quick-view',
   templateUrl: './product-quick-view.component.html',
   styleUrl: './product-quick-view.component.css'
})
export class ProductQuickViewComponent implements OnInit {
   loading = false;
   @Input() product!: Product;
   productId: number = +this.route.snapshot.paramMap.get('id')!;
   addToCartForm = new FormGroup({
      productQuantity: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
   });
   
   constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private cdr: ChangeDetectorRef) {
   }
   ngOnInit(): void {
      if (this.product === undefined) {
         this.productService.getProduct(this.productId).subscribe(data => {
            this.product = data
            this.cdr.detectChanges();
            console.log(this.product)
         });
      }
   }
   getRange(n: number): number[] {
      return Array.from({ length: n }, (_, index) => index + 1);
   }
   
   getBackgroundStyle(index: number): string {
      //return 'url(\'' + this.product.images[index] + '\')';
      return this.product.images[index]
   }

   handlePlus() {
      const quantity = this.addToCartForm.get('productQuantity')!.value!
      if (quantity < this.product.numberInStock) {
         this.addToCartForm.get('productQuantity')!.setValue(quantity + 1)
      }
   }
   handleMinus() {
      const quantity = this.addToCartForm.get('productQuantity')!.value!
      if (quantity > 1) {
         this.addToCartForm.get('productQuantity')!.setValue(this.addToCartForm.get('productQuantity')!.value! - 1)
      }
   }

   onAddToCart() {
      this.loading = true;
      const quantity = this.addToCartForm.get('productQuantity')!.value!
      this.addToCartForm.get('productQuantity')!.setValue(1)
      this.cartService.addProduct(this.product.id, quantity).subscribe({
         next: (res) => {
            this.loading = false
         },
         error: (error) => {
            console.log(error)
         }
      })     
   }
   
}
