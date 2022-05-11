import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ResponseDto } from "../dtos/response.dto";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController{

    constructor(
        private readonly service: UserService,
    ){}

    @Post('/create')
    async createUser(@Body() body:UserEntity){
        try{
            const user = await this.createUser(body);
            return new ResponseDto('Usuário Criado com Sucesso.',true,user,null);
        }catch(e){
            throw new HttpException(new ResponseDto('Ops',false, null,e,),HttpStatus.BAD_REQUEST)
        }
    }

    @Post('/login')
    async loginUser(@Body() body:UserEntity){

    }
    
}