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

  productMasterList: Product[];
  isSearchMaster: boolean = false;
  formSearchProductMaster: SearchProduct = {
    productID: "",
    productName: "",
    catID: "",
    priceFrom: 0,
    priceTo: 100000
  }

  constructor(private http: HttpClient) {
    // this.refreshList();
    console.log("log", this.refreshListMaster());
    this.isSearch = false;
    this.isSearchMaster = false;
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

  //------------------------------------Master Part
  clearFormSearchProductMaster() {
    this.isSearchMaster = false;
    this.formSearchProductMaster = {
      productID: "",
      productName: "",
      catID: "",
      priceFrom: 0,
      priceTo: 100000
    }
    this.refreshListMaster();
  }

  searchProductMaster() {
    this.isSearchMaster = true;
    let params3 = new HttpParams()
      .set('productID', this.formSearchProductMaster.productID)
      .set('productName', this.formSearchProductMaster.productName)
      .set('catID', this.formSearchProductMaster.catID)
      .set('priceFrom', this.formSearchProductMaster.priceFrom.toString())
      .set('priceTo', this.formSearchProductMaster.priceTo.toString());
    console.log(params3);
    this.http.get(this.rootURL + "/product", { params: params3 })
      .toPromise()
      .then(res => this.productMasterList = res as Product[]).then(res => { console.log('productMasterList', this.productMasterList) });
  }

  // refreshListMaster(): Product[] {
  //   this.isSearch = false;
  //   console.log("refreshList-Master()");
  //   let result: Product[];
  //   this.http.get(this.rootURL + "/product")
  //     .toPromise()
  //     .then(res => {
  //       this.productMasterList = res as Product[];
  //       result = res as Product[];
  //     }).then(res => { console.log('productMasterList', this.productMasterList) });
  //   return result;
  // }
  refreshListMaster() {
    this.isSearch = false;
    console.log("refreshList-Master()");
    return this.http.get(this.rootURL + "/product")
      .toPromise()
    .then(res => {
      this.productMasterList = res as Product[];
    }).then(res => { console.log('productMasterList', this.productMasterList) });
  }

  insertProduct(product: Product) {
    this.http.post(this.rootURL + "/product", product)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        this.refreshListMaster();
      });
  }

  updateProduct(product: Product) {
    this.http.put(this.rootURL + `/product/${product.productID}`, product)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        this.refreshListMaster();
      });
  }
}
