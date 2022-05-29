import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path:"products", component: ProductsComponent },
  {path: "about", component: AboutComponent},
  {path: "add", component: AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
