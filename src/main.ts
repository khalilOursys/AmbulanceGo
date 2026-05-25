import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { validationOptions } from '@common/validation/validation-options';
import { validationExceptionFactory } from '@common/validation/validation-exception.factory';
import { GlobalExceptionFilter } from '@common/filters/global-exception.filter';
import { AppLoggerService } from '@common/logging/app-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = app.get(AppLoggerService);

  // Manually pass the logger instance to the filter
  app.useGlobalFilters(new GlobalExceptionFilter(logger));

  app.useGlobalPipes(
    new ValidationPipe({
      ...validationOptions,
      exceptionFactory: validationExceptionFactory,
    }),
  );

  logger.log('Application starting...');

  process.on('SIGINT', async () => {
    logger.log('Application shutting down...');
    await app.close();
  });

  await app.listen(3000);
}

bootstrap();
