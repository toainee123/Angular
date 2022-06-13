import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { SigninComponent } from './Components/signin/signin.component';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { WebsiteLayoutsComponent } from './page/clients/website-layouts/website-layouts.component';
import { HomepageComponent } from './page/clients/homepage/homepage.component';
import { BlogComponent } from './page/clients/blog/blog.component';
import { WorkComponent } from './page/work/work.component';
import { AdminLayoutComponent } from './page/Admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
const routes: Routes = [
  {path: "listProducts", component: ProductsComponent},
  {path: "add", component: ProductAddComponent},
  {
    path: "",
    component: WebsiteLayoutsComponent,
    children: [
      {
        path: "", component: HomepageComponent
      },
      {
        path: "blog", component: BlogComponent
      },
      {
        path: "work", component: WorkComponent
      }
    ]
  },
  {
    path: "admin",
    component: DashboardComponent,
    children: [
      {
        path: "add", component: ProductAddComponent
      },
      {
        path: "", component: ProductsComponent 
      }
    ]
  },
  

  // {path: '', component: WebsiteLayoutsComponent},{
  //   path: 'home', children: [
  //     {path:"products", component: ProductsComponent },
  //     {path: "about", component: AboutComponent},
  //     {path: "add", component: ProductAddComponent},
  //     {path: "signin", component: SigninComponent},
  //     {path: "listUser", component: ListUserComponent}
  //   ]
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
