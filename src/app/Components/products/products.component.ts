import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/model/Products';
import { isEmpty } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  
  
  productList!: IProduct[]
  constructor(
    
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  {
    this.showProduct()
  }

  ngOnInit(): void {

  }
  showProduct(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }
  onRemove(id:any){
    const confirm = window.confirm('Bạn có muốn xoá không ?')
    if(confirm){
      this.productService.removeProduct(id).subscribe(data => {
        this.productList = this.productList.filter(item => item.id !== id)
      })
    }
    
    
  }

}
