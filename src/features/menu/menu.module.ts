import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { DatasourceModule } from 'src/datasources/datasource.module';

@Module({
  imports: [DatasourceModule],
  providers: [MenuService],
  controllers: [MenuController],
})
export class MenuModule {}
