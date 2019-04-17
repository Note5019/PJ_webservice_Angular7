import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar2',
  templateUrl: './topbar2.component.html',
  styleUrls: ['./topbar2.component.css']
})
export class Topbar2Component implements OnInit {

  // public collapse: boolean = false;
  public cart_num: number;
  constructor(
    public cartService: CartServiceService
  ) { }

  ngOnInit() {
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cart_num = res.length;
      })
  }
  toggleCartPopup = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.toggleCart_old()
  }
}
