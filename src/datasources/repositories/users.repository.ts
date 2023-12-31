import { Injectable } from '@nestjs/common';
import { User } from '../entities/users.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  private usersDatasource: Repository<User>;
  constructor(
    @InjectEntityManager() private readonly datasource: EntityManager,
  ) {
    this.usersDatasource = datasource.getRepository(User);
  }

  async createUser(user: User): Promise<string> {
    const addedUser = await this.usersDatasource.save(user);
    return addedUser.id;
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.usersDatasource.findOneBy({ username });
  }

  async getUserById(id: string): Promise<User> {
    return this.usersDatasource.findOneBy({ id });
  }

  async getUsersWithSimiliarUsername(username: string): Promise<User[]> {
    const users: User[] = await this.usersDatasource.query(
      'SELECT id, username, fullname FROM users WHERE username LIKE ?',
      [`%${username}%`],
    );

    return users;
  }
}
