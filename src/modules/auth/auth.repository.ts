import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from "src/dto/auth.dto";
import { UserEntity } from "src/entities/user.entity";
import { IAuthRepository } from "src/interface/IAuthenticationRepository";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Role } from "src/global/globalEnum";
import { JwtService } from "@nestjs/jwt";
import { Public } from "src/constant/decorator";

@Injectable()
export class AuthRepository implements IAuthRepository {
    constructor(
        @InjectRepository(UserEntity)
        protected readonly repository: Repository<UserEntity>,
        private jwtService: JwtService,
    ) { }

    async signIn(body: AuthPayloadDto): Promise<AuthPermission | boolean> {
        const { username, password } = body;
        const userAuth = await this.repository.findOne({ where: { username } });
        if (!userAuth) {
            return false;
        }
        const isMatch = await bcrypt.compare(password, userAuth.password);
        if (!isMatch) {
            return false;
        }
        const payload = { ...new AuthResponseDto(userAuth) };
        return new AuthPermission({
            id: userAuth.id,
            token: await this.jwtService.signAsync(payload),
            expiredTime: 900000,
        });
    }

    async signUp(body: AuthPayloadDto): Promise<AuthResponseDto> {
        const { username, password } = body;
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        return this.repository.save({
            username,
            password: hash,
            permission: Role.ADMIN,
        });
    }
}