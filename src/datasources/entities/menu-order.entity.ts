import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Menu } from './menu.entity';

@Entity({ name: 'menu_order' })
export class MenuOrder {
  @PrimaryColumn({ name: 'order_id' })
  orderId: string;

  @PrimaryColumn({ name: 'menu_id' })
  menuId: string;

  @Column({ name: 'quantity', type: 'integer' })
  quantity: number;

  @ManyToOne(() => Order, (o) => o.menus)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Menu, (m) => m.orders)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;
}
