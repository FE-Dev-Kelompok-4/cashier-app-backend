import { UsersRepository } from 'src/datasources/repositories/users.repository';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User } from 'src/datasources/entities/users.entity';
import { PasswordHasher } from 'src/helpers';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async registerUser(payload: CreateUserDTO): Promise<string> {
    const userWithSameUsername = await this.usersRepository.getUserByUsername(
      payload.username,
    );

    if (userWithSameUsername)
      throw new BadRequestException('Username already used');

    const user = new User();
    user.username = payload.username;
    user.firstName = payload.firstName;
    user.lastName = payload.lastName;
    user.password = await PasswordHasher.hashPassword(payload.password);

    return await this.usersRepository.createUser(user);
  }
}
