import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
   cardType: string = 'vertical';
   imgUrl: string = 'https://cdn.discordapp.com/attachments/1191538444468490342/1192870036851937330/green-apple.png?ex=65aaa5cb&is=659830cb&hm=7aaf2223ea5701a8b08049e3b2ff07db51f359c16ba1ec1d8d5cbb3f7ed8e6b6&';
   productName: string = 'Green Apple';
   productPrice: number = 14.99;
   stars: number = 4;

   getRange(n: number): number[] {
      return Array.from({ length: n }, (_, index) => index + 1);
   }
}
