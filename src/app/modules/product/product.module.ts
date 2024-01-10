import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
   declarations: [
      ProductCardComponent,
      ProductListComponent,
      CreateProductComponent,
      ProductDetailsComponent
   ],
  imports: [
     CommonModule,
     ReactiveFormsModule
   ],
  exports: [
     ProductListComponent
  ]
})
export class ProductModule { }
