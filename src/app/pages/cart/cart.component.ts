import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService : CartServiceService
  ) { }

  ngOnInit() {
  }

}
