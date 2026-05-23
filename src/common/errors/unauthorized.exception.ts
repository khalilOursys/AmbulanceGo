import { HttpStatus } from '@nestjs/common';

import { AppException } from '@common/errors/app.exception';

export class UnauthorizedAppException extends AppException {
  constructor(message = 'Unauthorized') {
    super(HttpStatus.UNAUTHORIZED, message, 'UNAUTHORIZED');
  }
}
