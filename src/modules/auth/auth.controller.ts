import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationDto } from 'src/dto/auth.dto';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { User } from 'src/models/user.model';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() authDto: AuthenticationDto): Promise<ResponseData<User>> {
    try {
      return new ResponseData<User[]>(
        await null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<User[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post('/register')
  async register(@Body() authDto: AuthenticationDto): Promise<ResponseData<User> | null> {
    try {
      return new ResponseData<User[] | null>(
        null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<User[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
