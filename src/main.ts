import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { validationOptions } from '@common/validation/validation-options';
import { validationExceptionFactory } from '@common/validation/validation-exception.factory';
import { GlobalExceptionFilter } from '@common/filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      ...validationOptions,

      exceptionFactory: validationExceptionFactory,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(3000);
}

bootstrap();
