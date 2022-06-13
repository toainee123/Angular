import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './Components/signin/signin.component';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { WebsiteLayoutsComponent } from './page/clients/website-layouts/website-layouts.component';
import { AdminLayoutComponent } from './page/Admin/admin-layout/admin-layout.component';
import { HomepageComponent } from './page/clients/homepage/homepage.component';
import { BlogComponent } from './page/clients/blog/blog.component';
import { WorkComponent } from './page/work/work.component';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
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
    DashboardComponent
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
