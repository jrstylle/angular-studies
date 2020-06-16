import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder}  from '@angular/forms'

import { RadioOption } from 'app/shared/radio-option/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order, OrderItem } from './order.model';
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup
  delivery: number = 8
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Value Refeição', value: 'REF' },
  ]
  constructor(
    private orderService: OrderService, 
    private shoppingCartService: ShoppingCartService, 
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      addressComplementary: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    })
  }

  itemsValue(): number {
    return this.shoppingCartService.total();
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe( (orderId: string) => {
      this.router.navigate(['/order-sumary'])
       this.orderService.clear();
    });
  }

}
