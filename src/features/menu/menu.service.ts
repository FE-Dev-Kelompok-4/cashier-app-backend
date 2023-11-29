import { Injectable } from '@nestjs/common';
import { Menu } from 'src/datasources/entities/menu.entity';
import { MenuRepository } from 'src/datasources/repositories/menu.repository';
import { CreateMenuBodyDTO } from './dtos/create-menu.dto';
import { GetAllMenuQueryDTO } from './dtos/get-all-menu.dto';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async createMenu(payload: CreateMenuBodyDTO) {
    const ids: string[] = [];

    for (const menu of payload.menu) {
      const newMenu = new Menu();
      newMenu.name = menu.name;
      newMenu.description = menu.description;
      newMenu.category = menu.category;
      newMenu.price = menu.price;
      newMenu.stock = menu.stock;
      newMenu.image = menu.image;
      const id = await this.menuRepository.createMenu(newMenu);
      ids.push(id);
    }

    return ids;
  }

  async getMenuByCategory(category: GetAllMenuQueryDTO): Promise<Menu[]> {
    return this.menuRepository.getAllMenu(category.category, category.search);
  }

  async getMenuById(id: string): Promise<Menu> {
    return this.menuRepository.getMenuById(id);
  }
}
