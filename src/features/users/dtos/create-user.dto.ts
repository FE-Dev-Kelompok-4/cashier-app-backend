import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/helpers';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}

export class CreateUserResponseDTO {
  userId: string;
}
