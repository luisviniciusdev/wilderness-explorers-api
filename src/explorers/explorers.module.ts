import { Module } from '@nestjs/common';
import { ExplorersService } from './explorers.service';
import { ExplorersController } from './explorers.controller';

@Module({
  providers: [ExplorersService],
  exports: [ExplorersService],
  controllers: [ExplorersController],
})
export class ExplorersModule {}
