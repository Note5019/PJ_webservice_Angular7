import { HttpClient } from '@angular/common/http';
import { Category } from './../models/category';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  readonly rootURL = environment.rootURL;
  categoryList: Category[];

  constructor(private http: HttpClient) {
    this.refreshList();
  }

  refreshList() {
    this.http.get(this.rootURL + "/category")
      .toPromise()
      .then(res => this.categoryList = res as Category[]);
  }

}
