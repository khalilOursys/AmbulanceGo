import { Injectable, Logger } from '@nestjs/common';

type LogData = Record<string, unknown>;

@Injectable()
export class AppLoggerService extends Logger {
  private sanitize(data: LogData | string) {
    if (typeof data === 'string') return data;

    const clone: LogData = { ...data };

    delete clone.password;
    delete clone.token;
    delete clone.accessToken;
    delete clone.refreshToken;
    delete clone.authorization;
    delete clone.jwt;
    delete clone.databaseUrl;

    return clone;
  }

  private format(level: string, message: LogData | string, context?: string) {
    return {
      timestamp: new Date().toISOString(),
      level,
      message: this.sanitize(message),
      context,
    };
  }

  log(message: LogData | string, context?: string) {
    super.log(this.format('log', message, context), context);
  }

  error(message: LogData | string, trace?: string, context?: string) {
    super.error(this.format('error', message, context), trace, context);
  }

  warn(message: LogData | string, context?: string) {
    super.warn(this.format('warn', message, context), context);
  }
}
