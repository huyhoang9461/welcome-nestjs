import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class UserResponseDto {
    id: number;
    username: string;
    @Exclude()
    password: string;
    @IsEmail()
    email: string;
    permission: string;
}
