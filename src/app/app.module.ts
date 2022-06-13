import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './page/Admin/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './page/clients/signin/signin.component';
import { ListUserComponent } from './page/Admin/list-user/list-user.component';
import { WebsiteLayoutsComponent } from './page/clients/website-layouts/website-layouts.component';
import { AdminLayoutComponent } from './page/Admin/admin-layout/admin-layout.component';
import { HomepageComponent } from './page/clients/homepage/homepage.component';
import { BlogComponent } from './page/clients/blog/blog.component';
import { WorkComponent } from './page/clients/work/work.component';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
import { EditProductsComponent } from './page/Admin/edit-products/edit-products.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ProductAddComponent,
    SigninComponent,
    ListUserComponent,
    WebsiteLayoutsComponent,
    AdminLayoutComponent,
    HomepageComponent,
    BlogComponent,
    WorkComponent,
    HeaderComponent,
    DashboardComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
