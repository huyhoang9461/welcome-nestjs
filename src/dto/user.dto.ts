import { Expose } from 'class-transformer';

export class UserResponseDto {
    id: number;
    username: string;
    @Expose()
    password: string;
    permission: string;
}
