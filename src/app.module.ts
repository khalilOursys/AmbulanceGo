import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import appConfig from '@config/app.config';
import databaseConfig from '@config/database.config';

import { validate } from '@config/env.validation';

import { HealthModule } from '@modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

      load: [appConfig, databaseConfig],

      validate,

      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`, '.env'],
    }),

    HealthModule,
  ],
})
export class AppModule {}
