import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { AuthenticationsModule } from './features/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthenticationsModule],
})
export class AppModule {}
