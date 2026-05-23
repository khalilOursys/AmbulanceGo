import { HttpStatus } from '@nestjs/common';

import { AppException } from '@common/errors/app.exception';

export class BusinessException extends AppException {
  constructor(message: string, code = 'BUSINESS_RULE_VIOLATION') {
    super(HttpStatus.CONFLICT, message, code);
  }
}
