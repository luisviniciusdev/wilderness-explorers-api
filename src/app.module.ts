import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExplorersModule } from './explorers/explorers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ExplorersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
