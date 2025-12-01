import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, MinLength } from "class-validator";
import { Role } from "src/global/globalEnum";

export class AuthenticationDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'Username must be not empty' })
    @MinLength(6, { message: 'Username must be at least 6 characters long' })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Password must be not empty' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;
}

export class AuthResponseDto {
    username: string;
    permission: Role;

    constructor({ username, permission }) {
        this.username = username;
        this.permission = permission;

        return this;
    }
}

export class AuthPayloadDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Username must be not empty' })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Password must be not empty' })
    password: string;

    permission?: Role;
}

export class AuthPermission {
    id: number;
    token: string;
    expiredTime: number;

    constructor({ id, token, expiredTime }) {
        this.id = id;
        this.token = token;
        this.expiredTime = expiredTime;

        return this;
    }
}