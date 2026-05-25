import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '@modules/users/dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() dto: CreateUserDto) {
    return dto;
  }
}
