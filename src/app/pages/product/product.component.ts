import { CartServiceService } from './../../services/cart-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;
  quatity:number = 1;
  constructor(
    private route: ActivatedRoute,
    public productService : ProductServiceService,
    public cartService: CartServiceService 
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    // this.product =
    this.productService.getProductByID(id).subscribe( res => {
      this.product = res[0];
    });
  }
}
