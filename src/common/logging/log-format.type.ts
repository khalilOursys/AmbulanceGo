export type LogLevel = 'log' | 'error' | 'warn' | 'debug';

export interface AppLog {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: string;
  requestId?: string;
}
