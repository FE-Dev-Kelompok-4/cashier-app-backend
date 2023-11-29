import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { AuthenticationsModule } from './features/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './features/menu/menu.module';
import { OrderModule } from './features/orders/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthenticationsModule,
    MenuModule,
    OrderModule,
  ],
})
export class AppModule {}
