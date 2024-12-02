import { Entity, Property } from '@mikro-orm/core';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'src/base.entity';

@Entity()
export class Jobs extends BaseEntity {
    @Property()
    @IsNotEmpty()
    type!: string;

    @Property({type:'text'})
    @IsNotEmpty()
    payload!: string;

    @Property()
    @IsNotEmpty()
    status!: string;

    @Property({onCreate:() => 0})
    @IsNotEmpty()
    attempt!: number;

    constructor(type: string,payload:string,status:string, createdBy?: number,updatedBy?: number) {
        super();
        this.type = type;
        this.payload = payload;
        this.status = status;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
      }
}
