import { InjectRepository } from "@nestjs/typeorm";
import { throws } from "assert";
import { AppError } from "src/shared/errors/error";
import { Security } from "src/shared/security/hash.security";
import { Repository } from 'typeorm';
import { UserDto } from "../dtos/user.dto";
import { UserEntity } from "../entities/user.entity";



export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
        private readonly security: Security,
    ){}

    async createUserService(user:UserEntity){
        user.password = await this.security.hashPassword(user.password);
        await this.repository.save(user);
    }

    async loginUserService(user:UserDto){
        const userdb = await this.repository.findOne(
            {
            where:[
             {email:user.userName}, 
             {number:user.userName},
             {name:user.userName},
            ]
            });
        if(!userdb) throw new AppError("Usuário ou senha inserido está incorreto,tente novamente.")

        const valid = await this.security.comparePassword(user.password, userdb.password);
        if(!valid) throw new AppError("Usuário ou senha inserido está incorreto,tente novamente.")

        return user;
    }
}

