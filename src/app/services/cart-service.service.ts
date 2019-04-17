import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartList: Cart[] = [];
  get cartLength(){
    return this.cartList.length;
  }
  get totalPrice(){
    let totalPrice = 0;
    return () => {
      
    };
  }
  makeCartObject(product:Product , quatity:number){
    let obj: Cart = {
      product: product,
      quantity:quatity
    }
    this.addToCartList(obj);
  }

  addToCartList(cart:Cart){
    let dup = this.cartList.findIndex( c => c.product.productID === cart.product.productID);
    if(dup > -1){
      console.log(dup);
      this.cartList[dup].quantity += cart.quantity;
    }
    else{
      this.cartList.push(cart);
    }
    console.log(this.cartList);
    
  }
  //---------------------------------------
  public cartListSubject = new BehaviorSubject([]);
  public toggleCartSubject = new BehaviorSubject(false);

  toggleCart_old = () => {
    this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
  };
  addToCart_old = (cart: Cart) => {
    let current = this.cartListSubject.getValue();
    let dup = current.find(c => c.product.productID === cart.product.productID);
    if (dup) dup.quantity += cart.quantity;
    else current.push(cart);
    this.cartListSubject.next(current);
  };
  reloadCart_old = (cartList) => {
    this.cartListSubject.next(cartList);
  };
  removeCart_old = index => {
    let current = this.cartListSubject.getValue();
    current.splice(index, 1);
    this.cartListSubject.next(current);
  };
}
