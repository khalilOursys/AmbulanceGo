import 'reflect-metadata';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@app/app.module';

import { validationOptions } from '@common/validation/validation-options';
import { validationExceptionFactory } from '@common/validation/validation-exception.factory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      ...validationOptions,

      exceptionFactory: validationExceptionFactory,
    }),
  );

  await app.listen(3000);
}

bootstrap();
