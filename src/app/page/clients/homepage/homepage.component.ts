import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/model/Products';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listProduct!: IProduct[]
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.showProduct()
   }

  ngOnInit(): void {
  }
  showProduct(){
    this.productService.getProducts().subscribe(data => {
      this.listProduct = data
    })
  }

}
