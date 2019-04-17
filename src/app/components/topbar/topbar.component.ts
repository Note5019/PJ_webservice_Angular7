import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public collapse: boolean = false;
  public cart_num:number;
  constructor(
      private cartService: CartServiceService
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
