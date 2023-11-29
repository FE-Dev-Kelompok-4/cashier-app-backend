import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { EntityManager, Repository } from 'typeorm';
import { MenuOrder } from '../entities/menu-order.entity';

@Injectable()
export class OrderRepository {
  private orderDatasource: Repository<Order>;
  private menuOrderDatasource: Repository<MenuOrder>;
  constructor(
    @InjectEntityManager() private readonly datasource: EntityManager,
  ) {
    this.orderDatasource = datasource.getRepository(Order);
    this.menuOrderDatasource = datasource.getRepository(MenuOrder);
  }

  async createOrder(order: Order): Promise<string> {
    const addedOrder = await this.orderDatasource.save(order);
    return addedOrder.id;
  }
}
