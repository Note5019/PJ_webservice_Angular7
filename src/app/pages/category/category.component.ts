import { CartServiceService } from './../../services/cart-service.service';
import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  searchToggle:boolean = false;
  constructor(
    public productService: ProductServiceService,
    public categoryService: CategoryServiceService,
    public cartService: CartServiceService
    ) { 
      // this.cartService.makeCartObject(this.productService.productList?[0],1);
    }

  ngOnInit() {
  }
}
