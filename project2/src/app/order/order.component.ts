import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio-option/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Value Refeição', value: 'REF' },
  ]
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() : CartItem[] {
    return this.orderService.cartItems();
  }
  increaseQty(item: any){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: any) {
    this.orderService.decreaseQty(item);
  }
  
  remove(item: any){
    this.orderService.remove(item);
  }

}
