import { Controller } from '@nestjs/common';
import { JobsFailedService } from './jobs-failed.service';

@Controller('jobs-failed')
export class JobsFailedController {
  constructor(private readonly jobsFailedService: JobsFailedService) {}
}
