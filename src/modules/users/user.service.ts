import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance, instanceToPlain } from "class-transformer";
import { UserResponseDto } from "src/dto/user.dto";
import type { IUserRepository } from "src/interface/IUserRepository";

@Injectable()
export class UserService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) { }

    async getUsers(): Promise<UserResponseDto[] | null> {
        const users = await this.userRepository.getUsers();
        const dtos = plainToInstance(UserResponseDto, users);
        return instanceToPlain(dtos) as UserResponseDto[];
    }
}