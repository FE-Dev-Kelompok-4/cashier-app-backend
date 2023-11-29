import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateOrderReqBody } from './dtos/create-order.dto';
import { OrderService } from './order.service';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() order: CreateOrderReqBody) {
    return this.orderService.createOrder(order);
  }

  @Get()
  async getAllOrders(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.orderService.getAllOrders({
      page,
      limit,
    });
  }
}
