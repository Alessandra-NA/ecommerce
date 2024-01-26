import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent implements OnInit {
   searchString = ''	
   products: Product[] = []
   showNotFound = false
   constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
   ngOnInit(): void {
      if (window.history.state.searchString) {
         this.searchString = window.history.state.searchString;
      }
      else if (this.route.snapshot.paramMap.get('searchString')) {
         this.searchString = this.route.snapshot.paramMap.get('searchString')!
      }
      else this.router.navigate(['/'])
      this.getProductsFromSearch();
   }
   getProductsFromSearch() {
      this.productService.getProductsFromSearch(this.searchString).subscribe({
         next: (res) => {
            this.products = res
            if (this.products.length === 0) this.showNotFound = true
         },
         error: (error) => {
            console.log(error)
         }
      })
   }
   

}
