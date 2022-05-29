import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  products: {name: string, price: number} = {
    name: "",
    price: 0
  }
  constructor() {}

  ngOnInit(): void {
  }
  onSubmit(){
    this.onAdd.emit(this.products)
    console.log(this.onAdd.emit(this.products));
  }

}
