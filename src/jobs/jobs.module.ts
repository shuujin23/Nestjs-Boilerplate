import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Jobs } from 'src/jobs/jobs.entity';
import { JobsFailed } from 'src/jobs-failed/jobs-failed.entity';
import { ScheduleModule } from '@nestjs/schedule'; 

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Jobs,JobsFailed] }),
      ScheduleModule.forRoot()
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
