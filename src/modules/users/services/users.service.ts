import { BusinessException } from '@common/errors/business.exception';

export class UsersService {
  async createUser() {
    const userExists = true; // exemple logique

    if (userExists) {
      throw new BusinessException('User already exists', 'USER_ALREADY_EXISTS');
    }
  }
}
