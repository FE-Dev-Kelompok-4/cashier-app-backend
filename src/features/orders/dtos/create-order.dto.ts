import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateMenuDTO {
  @IsString()
  id: string;
}

export class CreateOrderMenuDTO {
  @IsNumber()
  quantity: number;

  @Type(() => CreateMenuDTO)
  menu: CreateMenuDTO;
}

export class CreateOrderReqBody {
  @IsString()
  recipientName: string;

  @Type(() => CreateOrderMenuDTO)
  menus: CreateOrderMenuDTO[];

  @IsNumber()
  totalPrice: number;
}
