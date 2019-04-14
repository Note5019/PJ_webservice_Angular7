import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css']
})
export class MasterProductComponent implements OnInit {

  constructor(public productService:ProductServiceService) { }

  ngOnInit() {
  }

}
