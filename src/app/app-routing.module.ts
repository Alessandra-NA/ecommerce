import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
   { path: '', component:  HomeComponent},
   { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
