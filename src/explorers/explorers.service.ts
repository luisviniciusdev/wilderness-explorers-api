import { Injectable } from '@nestjs/common';
import { CreateExplorerDto } from './dtos/create-explorer.dto';
import { UpdateMeDto } from './dtos/update-me.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { UpdateExplorerDto } from './dtos/update-explorer.dto';

@Injectable()
export class ExplorersService {
  async create(createExplorerDto: CreateExplorerDto) {
    // explorer create logic
    return await { message: 'create not implemented' };
  }

  async findAll() {
    // explorer findAll logic
    return await { message: 'findAll not implemented' };
  }

  async findOne(id: string) {
    // explorer findOne logic
    return await { message: 'findOne not implemented' };
  }

  async update(id: string, updateExplorerDto: UpdateExplorerDto) {
    // explorer update logic
    return await { message: 'update not implemented' };
  }

  async remove(id: string) {
    // explorer remove logic
    return await { message: 'remove not implemented' };
  }

  async getMe() {
    // explorer getMe logic
    return await { message: 'getMe not implemented' };
  }

  async updateMe(updateMeDt: UpdateMeDto) {
    // explorer updateMe logic
    return await { message: 'updateMe not implemented' };
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto) {
    // explorer updatePassword logic
    return await { message: 'updatePassword not implemented' };
  }
}
