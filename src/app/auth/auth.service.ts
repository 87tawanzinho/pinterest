import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly prismaORM: PrismaService) {}
  async SignUp(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prismaORM.user.create({
      data: user,
    });

    return {
      ...createdUser,
      password: 'Confidencial.',
    };
  }

  async Login() {
    return 'value';
  }
}
