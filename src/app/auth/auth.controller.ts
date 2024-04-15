import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly serviceAuth: AuthService) {}
  @Post('signup')
  async SignUp(@Body() createUserDto: CreateUserDto) {
    return this.serviceAuth.SignUp(createUserDto);
  }

  @Post('login')
  async Login(@Body('email') email: string) {
    return this.serviceAuth.Login(email);
  }
}
