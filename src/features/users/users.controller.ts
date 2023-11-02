import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO, CreateUserResponseDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ResponseWrapper } from 'src/helpers';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async postCreateUser(@Body() body: CreateUserDTO): Promise<ResponseWrapper> {
    const userId = await this.usersService.registerUser(body);
    return ResponseWrapper.success<CreateUserResponseDTO>(
      'User created successfully',
      { userId },
    );
  }
}
