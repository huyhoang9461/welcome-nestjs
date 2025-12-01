import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserResponseDto } from "src/dto/user.dto";
import { UserEntity } from "src/entities/user.entity";
import { IUserRepository } from "src/interface/IUserRepository";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository:  Repository<UserEntity>,
    ) {}

    async getUsers(): Promise<UserResponseDto[] | null> {
        return await this.repository.find()
    }
}