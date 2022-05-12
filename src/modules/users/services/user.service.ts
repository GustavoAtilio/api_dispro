import { InjectRepository } from "@nestjs/typeorm";
import { throws } from "assert";
import { Security } from "src/shared/security/hash.security";
import { Repository } from 'typeorm';
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

    async loginUserService(user:UserEntity){
        const userdb = await this.repository.findOne(
            {
            where:[
             {email:user.email}, 
             {number:user.number},
             {name:user.name},
            ]
            });
        if(!userdb) throw new Error("Usuário ou senha inserido está incorreto,tente novamente.")

        const valid = await this.security.comparePassword(user.password, userdb.password);
        if(!valid) throw new Error("Usuário ou senha inserido está incorreto,tente novamente.")

        return user;
    }
}

