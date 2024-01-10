import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CreateProductComponent } from './modules/product/components/create-product/create-product.component';

const routes: Routes = [
   { path: '', component:  HomeComponent},
   { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'new-product', component:  CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
