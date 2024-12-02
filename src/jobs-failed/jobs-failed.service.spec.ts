import { Test, TestingModule } from '@nestjs/testing';
import { JobsFailedService } from './jobs-failed.service';

describe('JobsFailedService', () => {
  let service: JobsFailedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobsFailedService],
    }).compile();

    service = module.get<JobsFailedService>(JobsFailedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
