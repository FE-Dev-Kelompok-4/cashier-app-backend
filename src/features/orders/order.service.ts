import { Injectable } from '@nestjs/common';
import { CreateMenuDTO, CreateOrderReqBody } from './dtos/create-order.dto';
import { MenuOrder } from 'src/datasources/entities/menu-order.entity';
import { OrderRepository } from 'src/datasources/repositories/order.repository';
import { Order } from 'src/datasources/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(payload: CreateOrderReqBody) {
    const menuOrders = payload.menus.map(this.mapDtoToMenuOrder);

    const newOrder = new Order();
    newOrder.menus = menuOrders;
    newOrder.recipientName = payload.recipientName;

    return this.orderRepository.createOrder(newOrder);
  }

  private mapDtoToMenuOrder(menuOrder: CreateMenuDTO) {
    const newMenuOrder = new MenuOrder();
    newMenuOrder.quantity = menuOrder.quantity;
    newMenuOrder.menuId = menuOrder.menuId;

    return newMenuOrder;
  }
}
