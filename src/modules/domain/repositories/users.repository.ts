import { Injectable } from '@nestjs/common';
import { BaseRepository } from '@common/base.repository';
import { PrismaService } from '@infra/prisma/prisma.service';

@Injectable()
export class UsersRepository extends BaseRepository {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  async findByTenant(tenantId: string) {
    return this.prisma.user.findMany({
      where: { tenantId },
    });
  }
}
