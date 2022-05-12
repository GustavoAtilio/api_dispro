import { HttpStatus } from '@nestjs/common';
import { UserModel } from './../models/userModel';
import { InjectRepository } from "@nestjs/typeorm";
import { AppError } from "src/shared/errors/error";
import { Security } from "src/shared/security/hash.security";
import { Repository } from 'typeorm';
import { UserEntity } from "../entities/user.entity";



export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
        private readonly security: Security,
    ){}

    async createUserService(user:UserModel){
        const userdb = await this.getuser(user);
        let errors: any[] = [];
        if(userdb){
            if(user.name == userdb.name) errors.push("Nome do usuário já existe.")
            if(user.email == userdb.email) errors.push("Email do usuário já existe.")
            if(user.number == userdb.number) errors.push("Número do usuário já existe.")
        }
        if(errors.length != 0) throw new AppError("Verificar os dados.",errors,HttpStatus.BAD_REQUEST)

        user.password = await this.security.hashPassword(user.password);
        await this.repository.save(user);
    }

    async loginUserService(user:UserModel){
        const userdb = await this.getuser(user);
        if(!userdb) throw new AppError("Usuário ou senha inserido está incorreto,tente novamente.",null,HttpStatus.BAD_REQUEST)

        const valid = await this.security.comparePassword(user.password, userdb.password);
        if(!valid) throw new AppError("Usuário ou senha inserido está incorreto,tente novamente.",null,HttpStatus.BAD_REQUEST)

        return user;
    }

    async getuser(user:UserModel):Promise<UserEntity|undefined>{
        return await this.repository.findOne(
            {
            where:[
             {email:user.email}, 
             {number:user.number},
             {name:user.name},
            ]
            });
    }
}

