import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
   constructor(private router: Router) {}
   ngOnInit(): void {
      if (this.router.url === '/') {
         document.getElementById('list')?.classList.remove('flex-wrap')
      }
   }
   @Input() products: Product[] = []
}
