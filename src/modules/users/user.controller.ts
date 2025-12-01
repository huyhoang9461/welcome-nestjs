import { Controller, Get, Res } from "@nestjs/common";
import type { Response } from "express";
import { UserResponseDto } from "src/dto/user.dto";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { ResponseType } from "src/global/globalType";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { Public } from "src/constant/decorator";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        protected readonly userService: UserService,
    ) {}

    @Public()
    @Get()
    async getUsers(@Res() res: Response): Promise<ResponseType<UserResponseDto[] | null>> {
        try{
            const users = await this.userService.getUsers();
            return res.json(
                new ResponseData(users, HttpStatus.SUCCESS, HttpMessage.SUCCESS)
            );
        } catch (error) {
            return res.json(
                new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR)
            );
        }
        
    }
}