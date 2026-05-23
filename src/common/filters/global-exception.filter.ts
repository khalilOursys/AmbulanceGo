import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();

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
