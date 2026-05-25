import { Test, TestingModule } from '@nestjs/testing';

import { HealthController } from '@modules/health/controllers/health.controller';

import { HealthService } from '@modules/health/services/health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],

      providers: [HealthService],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should return health status', () => {
    expect(controller.getHealth()).toEqual({
      status: 'ok',
    });
  });
});
