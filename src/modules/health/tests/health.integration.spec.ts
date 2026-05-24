import { Test, TestingModule } from '@nestjs/testing';

import { HealthService } from '@modules/health/services/health.service';

describe('Health Integration', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should return health status', () => {
    expect(service.getHealth()).toEqual({
      status: 'ok',
    });
  });
});
