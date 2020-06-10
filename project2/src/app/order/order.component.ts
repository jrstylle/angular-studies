import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  delivery: number = 8
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Value Refeição', value: 'REF' },
  ]
  constructor(private orderService: OrderService, private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
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
