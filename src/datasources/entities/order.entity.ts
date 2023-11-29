import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuOrder } from './menu-order.entity';

@Entity({ name: 'order' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'recipient_name', type: 'varchar', length: 50 })
  recipientName: string;

  @Column({ name: 'total_price', type: 'integer' })
  totalPrice: number;

  @OneToMany(() => MenuOrder, (m) => m.order, { cascade: true })
  menus: MenuOrder[];

  @CreateDateColumn({ name: 'order_at' })
  orderAt: Date;
}
