import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { GetprodactsService } from './service/getprodacts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OurProductsComponent,
    ContacUsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    GetprodactsService,
    HttpClient
  ]
})
export class MainModule { }
