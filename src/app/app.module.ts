import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { CartModule } from './modules/cart/cart.module';
import { ProductModule } from './modules/product/product.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      UserModule,
      CartModule,
      ProductModule,
      HomeModule,
      SharedModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
