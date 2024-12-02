import { Module } from '@nestjs/common';
import { JobsFailedService } from './jobs-failed.service';
import { JobsFailedController } from './jobs-failed.controller';

@Module({
  controllers: [JobsFailedController],
  providers: [JobsFailedService],
})
export class JobsFailedModule {}
