import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasources/datasource.module';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [DatasourceModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
