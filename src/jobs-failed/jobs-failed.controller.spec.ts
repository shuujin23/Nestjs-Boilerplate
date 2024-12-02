import { Test, TestingModule } from '@nestjs/testing';
import { JobsFailedController } from './jobs-failed.controller';
import { JobsFailedService } from './jobs-failed.service';

describe('JobsFailedController', () => {
  let controller: JobsFailedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsFailedController],
      providers: [JobsFailedService],
    }).compile();

    controller = module.get<JobsFailedController>(JobsFailedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
