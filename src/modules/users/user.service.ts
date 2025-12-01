import { Inject, Injectable } from "@nestjs/common";
import { UserResponseDto } from "src/dto/user.dto";
import type { IUserRepository } from "src/interface/IUserRepository";

@Injectable()
export class UserService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) {}

    async getUsers(): Promise<UserResponseDto[] | null> {
        return await this.userRepository.getUsers();
    }
}