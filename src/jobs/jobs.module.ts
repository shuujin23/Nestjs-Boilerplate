import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Jobs } from 'src/jobs/jobs.entity';
import { JobsFailed } from 'src/jobs-failed/jobs-failed.entity';
import { User } from 'src/user/user.entity';
import { Company } from 'src/company/company.entity';
import { AttendanceSchedule } from 'src/attendance-schedule/attendance-schedule.entity';
import { AttendanceScheduleDetail } from 'src/attendance-schedule-detail/attendance-schedule-detail.entity';
import { AttendanceEmployee } from 'src/attendance-employee/attendance-employee.entity';
import { Attendance } from 'src/attendance/attendance.entity';
import { AttendanceShift } from 'src/attendance-shift/attendance-shift.entity';
import { CompanyHoliday } from 'src/company-holiday/company-holiday.entity';
import { AttendanceEmployeeService } from 'src/attendance-employee/attendance-employee.service';
import { ScheduleModule } from '@nestjs/schedule'; 

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Jobs,JobsFailed,CompanyHoliday,AttendanceShift,Attendance,AttendanceEmployee,
      AttendanceScheduleDetail,AttendanceSchedule,Company,User] }),
      ScheduleModule.forRoot()
  ],
  controllers: [JobsController],
  providers: [JobsService,AttendanceEmployeeService],
})
export class JobsModule {}
