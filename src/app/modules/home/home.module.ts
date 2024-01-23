import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductModule } from '../product/product.module';
import { TopCategoryComponent } from './components/top-category/top-category.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FeaturedComponent,
    FeaturedProductsComponent,
    TopCategoryComponent
  ],
  imports: [
     CommonModule,
     ButtonModule,
     ProductModule,
     RouterModule
   ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
