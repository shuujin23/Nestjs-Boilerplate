import { Entity, Property,ManyToOne } from '@mikro-orm/core';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'src/base.entity';
import { Jobs } from 'src/jobs/jobs.entity';

@Entity()
export class JobsFailed extends BaseEntity {
    @IsNotEmpty()
    @ManyToOne(() => Jobs)
    jobs!: Jobs;

    @Property({type:'text'})
    @IsNotEmpty()
    exception!: string;

    constructor(jobs: Jobs,exception:string, createdBy?: number,updatedBy?: number) {
        super();
        this.jobs = jobs;
        this.exception = exception;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
      }
}
