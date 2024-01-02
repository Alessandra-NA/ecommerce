import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
     CommonModule,
     ButtonModule
   ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
