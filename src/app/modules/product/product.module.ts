import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductQuickViewComponent } from './components/product-quick-view/product-quick-view.component';
import { RouterModule } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SearchProductComponent } from './components/search-product/search-product.component';



@NgModule({
   declarations: [
      ProductCardComponent,
      ProductListComponent,
      CreateProductComponent,
      ProductDetailsComponent,
      ProductQuickViewComponent,
      AllProductsComponent,
      SearchProductComponent
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
