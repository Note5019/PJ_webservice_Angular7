import { Product } from './../../models/product';
import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css']
})
export class MasterProductComponent implements OnInit {
  searchToggle: boolean = false;
  isOpenFormProduct: boolean = false;
  OperationText: string;
  formProduct: Product = {
    productID: "",
    productName: "",
    catID: "",
    price: 0,
    amount: 0,
    imgURL: "",
  }
  constructor(
    public productService: ProductServiceService,
    public categoryService: CategoryServiceService) { }

  ngOnInit() {
  }

  openFormProduct(opt: string, product?: Product) {
    this.isOpenFormProduct = true;
    this.OperationText = opt;
    if (product) {
      console.log("edit!!!");
      this.formProduct = product;
    }
  }

  closeFormProduct() {
    this.isOpenFormProduct = false;
    this.resetForm();
  }

  resetForm() {
    this.formProduct = {
      productID: "",
      productName: "",
      catID: "",
      price: 0,
      amount: 0,
      imgURL: "",
    }
  }

  submitForm(opt: string, formProduct: Product) {
    if (opt == 'Add') {
      this.productService.insertProduct(formProduct);
    }
    else if (opt == 'Edit') {
      this.productService.updateProduct(formProduct);
    }
  }

  deleteProduct(product: Product){
    if(confirm(`Are you sure to delete ${product.productName} (${product.productID})?`)){
      this.productService.deleteProduct(product);
    }
  }

}
