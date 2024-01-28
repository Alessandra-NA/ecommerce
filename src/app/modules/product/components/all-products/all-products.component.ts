import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
   products: Product[] = []
   category = 'All'
   minPrice = 0
   maxPrice = 999
   minRating = 0
   sortingOrder = 'Latest'
   showNotFound = false

   constructor(private productService: ProductService) { }
   ngOnInit(): void {
      if (window.history.state.category) {
         this.setCategory(window.history.state.category)
      }
      else this.getFeatured()
   }
   getFeatured() {
      this.productService.getAllProducts().subscribe(data => {
         this.products = data
         if (this.products.length === 0) this.showNotFound = true
      })
   }

   setCategory(category: string) {
      this.category = category
      this.updateProductList();
   }

   setPriceRange(min: number, max: number) {
      this.minPrice = min
      this.maxPrice = max
      this.updateProductList();
   }

   setMinRating(rating: number) {
      this.minRating = rating
      this.updateProductList();
   }
   
   setSortBy(sortBy: string) {
      this.sortingOrder = sortBy
      this.updateProductList();
   }

   updateProductList() {
      this.productService.getFilteredProducts(this.category, this.minPrice, this.maxPrice, this.minRating, this.sortingOrder).subscribe(data => {
         this.products = data
         if (this.products.length === 0) this.showNotFound = true
      })
   }
}
