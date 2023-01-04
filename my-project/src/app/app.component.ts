import { Component } from '@angular/core';
import { Iproduct } from '../app/Model/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "Toai"
  title = 'my-project';
  productList: Iproduct[] = [
    {
      id: 1,
      name: "Product A",
      price: 500,
      status: false
    },
    {
      id: 2,
      name: "Product C",
      price: 500,
      status: true
    },
    
  ]
  onhandleAdd(products:any){
    this.productList.push(products)
  }
}
