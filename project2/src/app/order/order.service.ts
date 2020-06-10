import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class OrderService {
  constructor(private shoppingCartService: ShoppingCartService, private http: Http){}
  itemsValue(): number {
    return this.shoppingCartService.total();
  }
  cartItems(): CartItem[] { 
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);

  }

  remove(item: CartItem) {
    this.shoppingCartService.removeItem(item)
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers}))
    .map(response => response.json())
    .map(order => order.id)
  }

  clear(){
    this.shoppingCartService.clear();
  }
}