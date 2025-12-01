import { UserResponseDto } from "src/dto/user.dto";

export interface IUserRepository {
    getUsers(): Promise<UserResponseDto[] | null>;
}