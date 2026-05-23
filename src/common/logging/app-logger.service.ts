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

  log(message: LogData | string, context?: string) {
    super.log(this.sanitize(message), context);
  }

  error(message: LogData | string, trace?: string, context?: string) {
    super.error(this.sanitize(message), trace, context);
  }

  warn(message: LogData | string, context?: string) {
    super.warn(this.sanitize(message), context);
  }
}
