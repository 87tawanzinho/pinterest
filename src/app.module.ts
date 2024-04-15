import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExampleModule } from './example/example.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [AuthModule, PrismaModule, ExampleModule, JwtAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
