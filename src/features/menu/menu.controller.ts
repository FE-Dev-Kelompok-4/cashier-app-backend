import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetAllMenuQueryDTO } from './dtos/get-all-menu.dto';
import { MenuService } from './menu.service';
import { Menu } from 'src/datasources/entities/menu.entity';
import { CreateMenuBodyDTO } from './dtos/create-menu.dto';

@Controller('/api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async createMenu(@Body() menu: CreateMenuBodyDTO) {
    return await this.menuService.createMenu(menu);
  }

  @Get()
  async getAllMenu(@Query() query: GetAllMenuQueryDTO) {
    const result = await this.menuService.getMenuByCategory(query.category);

    return result;
  }

  @Get(':id')
  async getMenuById(@Param('id') id: string): Promise<Menu> {
    return this.menuService.getMenuById(id);
  }
}
