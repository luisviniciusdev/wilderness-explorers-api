import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ExplorersModule } from './explorers/explorers.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isDev = config.get<string>('NODE_ENV') === 'development';

        return {
          type: 'postgres',
          host: config.get<string>('POSTGRES_HOST'),
          port: config.get<number>('POSTGRES_PORT'),
          username: config.get<string>('POSTGRES_USER'),
          password: config.get<string>('POSTGRES_PASSWORD'),
          database: config.get<string>('POSTGRES_DB'),
          autoLoadEntities: true,
          synchronize: isDev,
          logging: isDev,
        };
      },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 60 seconds
        limit: 10, // 10 requests
      },
    ]),
    AuthModule,
    ExplorersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
