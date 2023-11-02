import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatasourceModule } from 'src/datasources/datasource.module';

@Module({
  imports: [DatasourceModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
