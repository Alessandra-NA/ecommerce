import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/services/product.service';
import { Product } from '../../../product/interfaces/product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent implements OnInit{
   featuredProducts: Product[] = []
   constructor(private productService: ProductService) { }
   ngOnInit(): void {
      this.getFeatured()
   }
   getFeatured() {
      this.productService.getFeatured().subscribe(data => {
         this.featuredProducts = data
   })
   }
}
