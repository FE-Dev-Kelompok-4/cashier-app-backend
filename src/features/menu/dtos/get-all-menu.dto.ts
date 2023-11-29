import { IsEnum, IsOptional, IsString } from 'class-validator';
import { MenuCategory } from 'src/datasources/entities/menu.entity';

export class GetAllMenuQueryDTO {
  @IsEnum(MenuCategory)
  @IsOptional()
  category: MenuCategory;

  @IsString()
  @IsOptional()
  search: string;
}
