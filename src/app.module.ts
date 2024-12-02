import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { SeederService } from './seed/seeder.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';
import { JobsFailedModule } from './jobs-failed/jobs-failed.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    UsersModule, 
    RoleModule,
    AuthModule,
    RoleModule,
    JobsModule,
    JobsFailedModule
  ],
  controllers: [AppController],
  providers: [AppService,SeederService],
})
export class AppModule {}
