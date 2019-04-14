import { environment } from './../../environments/environment';
import { SearchProduct } from './../models/searchProduct';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  readonly rootURL = environment.rootURL;

  productList: Product[];
  isSearch: boolean = false;
  formSearchProduct: SearchProduct = {
    productID: "",
    productName: "",
    catID: "",
    priceFrom: 0,
    priceTo: 100000
  }

  constructor(private http: HttpClient) {
    this.refreshList();
    this.isSearch = false;
  }

  clearFormSearchProduct() {
    this.isSearch = false;
    this.formSearchProduct = {
      productID: "",
      productName: "",
      catID: "",
      priceFrom: 0,
      priceTo: 100000
    }
    this.refreshList();
  }

  searchProduct() {
    this.isSearch = true;
    let params3 = new HttpParams()
      .set('productID', this.formSearchProduct.productID)
      .set('productName', this.formSearchProduct.productName)
      .set('catID', this.formSearchProduct.catID)
      .set('priceFrom', this.formSearchProduct.priceFrom.toString())
      .set('priceTo', this.formSearchProduct.priceTo.toString());
    // if(this.formSearchProduct.productName == ""){
    //   console.log("productName", this.formSearchProduct.productName);
    // }
    // else{
    //   console.log("productName", this.formSearchProduct.productName);
    //   params3.set('productName', this.formSearchProduct.productName);
    // }
    // this.formSearchProduct.productID == "" ? console.log("productID", this.formSearchProduct.productID) : params3.set('productID', this.formSearchProduct.productID);
    // this.formSearchProduct.productName == "" ? console.log("productName", this.formSearchProduct.productName) : params3.set('productName', this.formSearchProduct.productName);
    // this.formSearchProduct.catID == "" ? console.log("catID", this.formSearchProduct.catID) : params3.set('catID', this.formSearchProduct.catID);
    // this.formSearchProduct.priceFrom == 0 ? console.log("priceFrom", this.formSearchProduct.priceFrom) : params3.set('priceFrom', this.formSearchProduct.priceFrom.toString());
    // this.formSearchProduct.priceTo == 100000 ? console.log("priceTo", this.formSearchProduct.priceTo) : params3.set('priceTo', this.formSearchProduct.priceTo.toString());
    // const params = new HttpParams({ fromString: '_page=1&_limit=1' });
    console.log(params3);
    this.http.get(this.rootURL + "/product", { params: params3 })
      .toPromise()
      .then(res => this.productList = res as Product[]).then(res => { console.log('searchProductList', this.productList) });
  }

  refreshList() {
    this.isSearch = false;
    console.log("refreshList()");
    this.http.get(this.rootURL + "/product")
      .toPromise()
      .then(res => this.productList = res as Product[]).then(res => { console.log('refreshProductList', this.productList) });
  }
}
