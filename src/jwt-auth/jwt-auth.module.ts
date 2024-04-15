import { Module } from '@nestjs/common';
import { JwtAuthController } from './jwt-auth.controller';
import { JwtAuthService } from './jwt-auth.service';

@Module({
  controllers: [JwtAuthController],
  providers: [JwtAuthService]
})
export class JwtAuthModule {}
