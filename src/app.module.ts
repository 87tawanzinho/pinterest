import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [AuthModule, PrismaModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
