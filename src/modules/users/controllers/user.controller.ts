import { UserEntity } from './../entities/user.entity';
import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UseInterceptors } from "@nestjs/common";
import { ErrorsInterceptor } from "src/shared/interceptors/error.interceptor";
import { ValidatorInterceptor } from "src/shared/interceptors/validator.interceptor";
import {  UserCreateContract } from "../contracts/user-create.contract";
import { UserLoginContract } from "../contracts/user-login.contract";
import { ResponseDto } from "../dtos/response.dto";
import { UserDto } from "../dtos/user.dto";
import { UserModel } from "../models/userModel";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController{

    constructor(
        private readonly service: UserService,
    ){}

    @Post('/create')
    @UseInterceptors(new ValidatorInterceptor(new UserCreateContract()))
    @UseInterceptors(new ErrorsInterceptor())
    async createUser(@Body() body:UserEntity){

         const user = await this.service.createUserService(body);
         return new ResponseDto('Usuário Criado com Sucesso.',true,user,null);
    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(new ValidatorInterceptor(new UserLoginContract()))
    @UseInterceptors(new ErrorsInterceptor())
    async loginUser(@Body() body:UserDto){

        const user = await this.service.loginUserService(new UserModel(body.userName, body.userName,body.userName,body.password));
        return new ResponseDto('Usuário Autenticado..',true,user,null);
    }
    
}