import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
   relatedProducts: Product[] = []
   productId: number = +this.route.snapshot.paramMap.get('id')!;
   @Input() product!: Product;
   
   constructor(private productService: ProductService, private route: ActivatedRoute) {}
   ngOnInit(): void {
      this.product = window.history.state.product
      if (this.product === undefined) {
         this.productService.getProduct(this.productId).subscribe(data => {
            this.product = data
            this.getRelatedProducts();
         });
      }
      else this.getRelatedProducts();
   }

   getRelatedProducts() {
      this.productService.getRelatedProducts(this.product.category).subscribe(data => {
         this.relatedProducts = data
      })
   }
}
