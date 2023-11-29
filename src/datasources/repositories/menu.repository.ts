import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Menu, MenuCategory } from '../entities/menu.entity';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class MenuRepository {
  private menuDatasource: Repository<Menu>;
  constructor(
    @InjectEntityManager() private readonly datasource: EntityManager,
  ) {
    this.menuDatasource = datasource.getRepository(Menu);
  }

  async createMenu(menu: Menu): Promise<string> {
    const addedMenu = await this.menuDatasource.save(menu);
    return addedMenu.id;
  }

  async getAllMenu(where: MenuCategory, search?: string): Promise<Menu[]> {
    const queryBuilder = this.menuDatasource
      .createQueryBuilder('m')
      .select(['m.id', 'm.name', 'm.price', 'm.stock', 'm.image'])
      .where('m.category = :where', { where });

    if (search) {
      queryBuilder.andWhere('m.name LIKE :search', {
        search: '%' + search + '%',
      });
    }

    return queryBuilder.getMany();
  }

  async getMenuById(id: string): Promise<Menu> {
    return this.menuDatasource.findOneBy({ id });
  }
}
