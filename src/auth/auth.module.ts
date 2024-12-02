import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Users } from 'src/users/users.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/jwt/jwt.config';
import { Response } from 'src/helper/response';
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Users] }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(jwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, Response],
})
export class AuthModule {}
