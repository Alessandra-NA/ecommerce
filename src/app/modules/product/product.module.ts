import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductQuickViewComponent } from './components/product-quick-view/product-quick-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
   declarations: [
      ProductCardComponent,
      ProductListComponent,
      CreateProductComponent,
      ProductDetailsComponent,
      ProductQuickViewComponent
   ],
  imports: [
     CommonModule,
     ReactiveFormsModule,
     FormsModule,
      RouterModule
   ],
  exports: [
     ProductListComponent
  ]
})
export class ProductModule { }
