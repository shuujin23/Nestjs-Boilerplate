import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
  import { EntityManager } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';


@Injectable()
export class JobsFailedService {
    
}
