import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderReqBody } from './dtos/create-order.dto';
import { OrderService } from './order.service';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() order: CreateOrderReqBody) {
    return this.orderService.createOrder(order);
  }
}
