import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
   selector: 'app-product-quick-view',
   templateUrl: './product-quick-view.component.html',
   styleUrl: './product-quick-view.component.css'
})
export class ProductQuickViewComponent implements OnInit {
   @Input() product!: Product;
   productId: number = +this.route.snapshot.paramMap.get('id')!;
   addCartQuantity: number = 1;
   
   constructor(private route: ActivatedRoute, private productService: ProductService, private cdr: ChangeDetectorRef) {
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
      if(this.addCartQuantity < this.product.numberInStock) {
         this.addCartQuantity++
      }
   }
   handleMinus() {
      if(this.addCartQuantity > 1) {
         this.addCartQuantity--
      }
   }
   
}