import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { AuthenticationDto, AuthPayloadDto, AuthPermission, AuthResponseDto } from 'src/dto/auth.dto';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ResponseType } from 'src/global/globalType';
import { AuthService } from './auth.service';
import { Public } from 'src/constant/decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(protected readonly authService: AuthService) {}

  @Public()
  @Post('/sign-in')
  async signIn(@Body() authDto: AuthPayloadDto, @Res() res: Response): Promise<ResponseType<AuthPermission | boolean>> {
    try {
      const isAuth = await this.authService.signIn(authDto);
      if (!isAuth) {
        return res.json(
          new ResponseData(isAuth, HttpStatus.ERROR, HttpMessage.ERROR),
        )
      }
      return res.json(
        new ResponseData(isAuth, HttpStatus.SUCCESS, HttpMessage.SUCCESS),
      )
    } catch (error) {
      return res.json(
        new ResponseData(false, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }

  @Public()
  @Post('/sign-up')
  async signUp(@Body() authDto: AuthPayloadDto, @Res() res: Response): Promise<ResponseType<AuthResponseDto>> {
    try {
      const isAuth = await this.authService.signUp(authDto);
      if (!isAuth) {
        return res.json(
          new ResponseData(isAuth, HttpStatus.ERROR, HttpMessage.ERROR),
        )
      }
      return res.json(
        new ResponseData(isAuth, HttpStatus.SUCCESS, HttpMessage.SUCCESS),
      )
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }
}
