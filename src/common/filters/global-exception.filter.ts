import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppLoggerService } from '@common/logging/app-logger.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: AppLoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    this.logger.error({
      timestamp: new Date().toISOString(),
      level: 'error',
      context: 'GlobalExceptionFilter',
      message:
        exception instanceof Error ? exception.message : String(exception),
    });

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const error = exception.getResponse();

      return response.status(status).json(error);
    }

    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: 500,
      message: 'Internal server error',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }
}
