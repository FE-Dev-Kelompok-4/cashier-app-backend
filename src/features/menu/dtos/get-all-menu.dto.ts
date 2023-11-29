import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { MenuCategory } from 'src/datasources/entities/menu.entity';

export class GetAllMenuQueryDTO {
  @IsEnum(MenuCategory)
  @IsOptional()
  category: MenuCategory;

  @IsNumber()
  @IsOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  limit: number;
}
