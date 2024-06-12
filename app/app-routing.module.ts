import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContacUsComponent } from './main/contac-us/contac-us.component';
import { HomeComponent } from './main/home/home.component';
import { OurProductsComponent } from './main/our-products/our-products.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cont-us', component: ContacUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-product', component: OurProductsComponent },
  {
    path:'**',
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
