import { Body, Controller, HttpException, HttpStatus, Post, UseInterceptors } from "@nestjs/common";
import { ValidatorInterceptor } from "src/shared/interceptors/validator.interceptor";
import {  UserCreateContract } from "../contracts/user-create.contract";
import { UserLoginContract } from "../contracts/user-login.contract";
import { ResponseDto } from "../dtos/response.dto";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController{

    constructor(
        private readonly service: UserService,
    ){}

    @Post('/create')
    @UseInterceptors(new ValidatorInterceptor(new UserCreateContract()))
    async createUser(@Body() body:UserEntity){
        try{
            const user = await this.createUser(body);
            return new ResponseDto('Usuário Criado com Sucesso.',true,user,null);
        }catch(e){
            throw new HttpException(new ResponseDto('Ops',false, null,e,),HttpStatus.BAD_REQUEST)
        }
    }

    @Post('/login')
    @UseInterceptors(new ValidatorInterceptor(new UserLoginContract()))
    async loginUser(@Body() body:UserEntity){

    }
    
}