import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {
  @Input() data!: string
  title = 22;
  productName: string = 'Product A';
  productPrice: number = 200;
  productStatus: boolean = false;
  productInfo: {id: number, name: string, price: number,  status: boolean} = {
    id: 1,
    name: "Product A",
    status: false,
    price: 200
  }
  productList: {id: number, name: string, price: number, status: boolean}[] = [
    {
      id: 1,
      name: "Product A",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "Product C",
      price: 300,
      status: false
    },
    {
      id: 3,
      name: "Product B",
      price: 500,
      status: true
    }
  ]
  onhandleClick(){
    console.log('Clicked');
    this.productStatus = !this.productStatus
  }
  onhandleRemove(id:number){
   this.productList = this.productList.filter(item => item.id !== id)
    
  }
  onhandleKeyPress(event:any){
    this.title = event.target.value
    console.log(this.title = event.target.value);
    
  }
}
