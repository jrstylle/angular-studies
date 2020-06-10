
class Order {
  constructor(
    public address: string,
    public number: number,
    public addressComplement: string,
    public optionPayment: string,
    public orderItems: OrderItem[] = []
  ){}
}

class OrderItem {
  constructor(public quantity: number, public menuId:string ){}
}


export { Order, OrderItem }