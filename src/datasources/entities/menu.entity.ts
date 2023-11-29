import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MenuOrder } from './menu-order.entity';

export enum MenuCategory {
  Starter = 'STARTER',
  MainCourse = 'MAIN-COURSE',
  SideDish = 'SIDE-DISH',
  Dessert = 'DESSERT',
  Beverage = 'BEVERAGE',
}

@Entity({ name: 'menu' })
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'description', type: 'text' })
  description: string;

  @Column({ name: 'category', type: 'enum', enum: MenuCategory })
  category: MenuCategory;

  @OneToMany(() => MenuOrder, (o) => o.menu)
  orders: MenuOrder[];

  @Column({ name: 'price', type: 'integer' })
  price: number;

  @Column({ name: 'stock', type: 'integer' })
  stock: number;

  @Column({ name: 'image', type: 'text' })
  image: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at' })
  modifiedAt: Date;
}
