import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CreateProductComponent } from './modules/product/components/create-product/create-product.component';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { AllProductsComponent } from './modules/product/components/all-products/all-products.component';
import { OverviewComponent } from './modules/cart/components/overview/overview.component';
import { SearchProductComponent } from './modules/product/components/search-product/search-product.component';

const routes: Routes = [
   { path: '', component:  HomeComponent},
   { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'new-product', component: CreateProductComponent },
   { path: 'product-details/:id', component: ProductDetailsComponent },
   { path: 'shop', component: AllProductsComponent },
   { path: 'cart', component: OverviewComponent },
   { path: 'search/:searchString', component: SearchProductComponent}
   
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
