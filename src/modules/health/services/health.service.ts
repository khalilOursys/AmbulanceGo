import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth() {
    return {
      status: 'ok',
    };
  }

  getReadiness() {
    return {
      status: 'ready',
    };
  }

  getLiveness() {
    return {
      status: 'alive',
    };
  }
}
