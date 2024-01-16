import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
   cardType: string = 'vertical';

   @Input() product!: Product

   getRange(n: number): number[] {
      return Array.from({ length: n }, (_, index) => index + 1);
   }

   viewProduct() {
      
   }
}
