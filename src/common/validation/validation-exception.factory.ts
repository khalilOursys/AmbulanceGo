import { BadRequestException, ValidationError } from '@nestjs/common';

export function validationExceptionFactory(errors: ValidationError[]) {
  return new BadRequestException({
    message: errors.map((error) => ({
      field: error.property,
      errors: Object.values(error.constraints ?? {}),
    })),
  });
}
