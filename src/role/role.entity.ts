import { Entity, Property } from '@mikro-orm/core';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'src/base.entity';

@Entity()
export class Role extends BaseEntity{
    @Property()
    @IsNotEmpty()
    name!: string;
}
