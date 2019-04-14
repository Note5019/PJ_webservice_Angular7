import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    public productService: ProductServiceService,
    public categoryService: CategoryServiceService
    ) { }

  ngOnInit() {
  }
}
