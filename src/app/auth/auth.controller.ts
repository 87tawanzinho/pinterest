import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly serviceAuth: AuthService) {}
  @Post('signup')
  async SignUp() {
    return this.serviceAuth.SignUp();
  }

  @Post('login')
  async Login() {
    return this.serviceAuth.Login();
  }
}
