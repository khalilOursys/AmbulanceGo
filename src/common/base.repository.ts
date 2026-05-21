import { PrismaService } from '@infra/prisma/prisma.service';

export abstract class BaseRepository {
  constructor(protected readonly prisma: PrismaService) {}
}
