import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationsRepository } from './repositories/auth.repository';
import { UsersRepository } from './repositories/users.repository';
import { MenuRepository } from './repositories/menu.repository';
import { OrderRepository } from './repositories/order.repository';

const repositories = [
  UsersRepository,
  AuthenticationsRepository,
  MenuRepository,
  OrderRepository,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'password',
      host: 'localhost',
      port: 3306,
      database: 'db_cashier',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/entities/*.entity.{js,ts}'],
    }),
  ],
  providers: [...repositories],
  exports: [...repositories],
})
export class DatasourceModule {}
