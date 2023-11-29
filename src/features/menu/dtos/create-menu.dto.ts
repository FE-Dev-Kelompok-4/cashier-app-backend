import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { MenuCategory } from 'src/datasources/entities/menu.entity';

export class CreateMenuDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(MenuCategory)
  category: MenuCategory;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  image: string;
}

export class CreateMenuBodyDTO {
  @Type(() => CreateMenuDTO)
  menu: CreateMenuDTO[];
}
