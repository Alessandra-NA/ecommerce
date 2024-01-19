import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
   declarations: [
      LoginComponent,
      SignupComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule
   ],
   exports: [
      LoginComponent,
      SignupComponent
   ]
})
export class UserModule { }
