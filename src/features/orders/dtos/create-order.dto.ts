import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateMenuDTO {
  @IsString()
  menuId: string;

  @IsNumber()
  quantity: number;
}

export class CreateOrderReqBody {
  @IsString()
  recipientName: string;

  @Type(() => CreateMenuDTO)
  menus: CreateMenuDTO[];

  @IsNumber()
  totalPrice: number;
}
