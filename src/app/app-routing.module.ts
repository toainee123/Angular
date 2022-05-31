import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';

const routes: Routes = [
  {path: "", component: HeaderComponent},
  {path:"products", component: ProductsComponent },
  {path: "about", component: AboutComponent},
  {path: "add", component: ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
