import {
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { EntityManager } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { Jobs } from './jobs.entity'; 
import { JobsFailed } from 'src/jobs-failed/jobs-failed.entity'; 
import { Cron } from '@nestjs/schedule';

@Injectable()
export class JobsService {
    constructor(
        private readonly em: EntityManager,
        @InjectRepository(Jobs)
        private readonly jobsRepository: EntityRepository<Jobs>
      ) {}
    
      async addJob(type: string, payload: any): Promise<void> {
        const job = new Jobs(
            type,
            payload,
            'pending'
        )
        this.em.persist(job);
        await this.em.flush();
      }
      
      async getPendingJobs(): Promise<Jobs[]> {
        return await this.jobsRepository.find({ status: 'pending' });
      }

      async updateJobStatus(id: number, status: string): Promise<void> {
        const job = await this.jobsRepository.findOne({id:id})
        if(!job){
            throw new NotFoundException("Jobs tidak ditemukan")
        }
        job.status = status;
        this.em.persist(job);
      }

      @Cron('*/5 * * * * *')
      async processJobs(): Promise<void> {
        const emFork = this.em.fork();
        const jobs = await emFork.find(Jobs, { status: 'pending' });
        for (const job of jobs) {
            await emFork.begin();
            await emFork.nativeUpdate(Jobs, { id: job.id }, { status: 'processing' });
            try {
                const payload = JSON.parse(job.payload);
                switch (job.type) {
                    case 'example':
                        console.log("Tes Job");
                        break;
                }
                await emFork.nativeUpdate(Jobs, { id: job.id }, { status: 'completed' });
                await emFork.commit();
            } catch (error) {
                await emFork.rollback();
                await emFork.nativeUpdate(Jobs, { id: job.id }, { status: 'failed' });
                await emFork.begin();
                const jobs_failed = new JobsFailed(
                    job,
                    error?.message ?? 'Internal Server Error'
                );
                await emFork.persist(jobs_failed);
                await emFork.commit();
            }
            
        }
        
      }
}
