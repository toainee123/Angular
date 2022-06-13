import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/model/Products';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: IProduct = {
    img: "",
    name: "",
    price: 0,
    status: true,
    desc: ""
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id  = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }
  onSubmit(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data)
      setTimeout( () => {
        this.router.navigateByUrl('/admin')
      }, 2000)
    })
  }

}
