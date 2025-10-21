import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  @Post('login')
  login(username: string, password: string): string {
    return 'Ok';
  }

  @Post('/register')
  register(username: string, password: string): string {
    return 'ok';
  }
}
