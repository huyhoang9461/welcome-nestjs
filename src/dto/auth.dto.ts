import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

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