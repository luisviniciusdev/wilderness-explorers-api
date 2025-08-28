import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ExplorersService } from './explorers.service';
import { CreateExplorerDto } from './dtos/create-explorer.dto';
import { UpdateExplorerDto } from './dtos/update-explorer.dto';
import { UpdateMeDto } from './dtos/update-me.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';

@Controller('explorers')
export class ExplorersController {
  constructor(private readonly explorersService: ExplorersService) {}

  // Admin endpoints
  @Post()
  async create(@Body() createExplorerDto: CreateExplorerDto) {
    return await this.explorersService.create(createExplorerDto);
  }

  @Get()
  async findAll() {
    return await this.explorersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.explorersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExplorerDto: UpdateExplorerDto,
  ) {
    return await this.explorersService.update(id, updateExplorerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.explorersService.remove(id);
  }

  // User endpoints (self)
  @Get('me')
  async getMe() {
    return await this.explorersService.getMe();
  }

  @Patch('me')
  async updateMe(@Body() updateMeDto: UpdateMeDto) {
    return this.explorersService.updateMe(updateMeDto);
  }

  @Patch('me/password')
  async updatePassword(@Body() updatePasswordDto: UpdatePasswordDto) {
    return await this.explorersService.updatePassword(updatePasswordDto);
  }
}
