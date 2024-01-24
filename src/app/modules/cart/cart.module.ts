import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
     CommonModule,
     ReactiveFormsModule,
     FormsModule
  ]
})
export class CartModule { }
