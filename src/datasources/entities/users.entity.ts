import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Authentication } from './auth.entity';
import { Role } from 'src/helpers';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({ name: 'id', type: 'varchar', length: 36 })
  id: string;

  @Column({ name: 'first_name', type: 'varchar', length: 50 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50 })
  lastName: string;

  @Column({ name: 'username', type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ name: 'password', type: 'text' })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Cashier })
  role: Role;

  @OneToMany(() => Authentication, (auth) => auth.user)
  authentications: Authentication[];
}
