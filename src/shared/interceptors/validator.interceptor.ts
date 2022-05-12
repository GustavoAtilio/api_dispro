import { AppError } from 'src/shared/errors/error';
import {CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor} from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "src/modules/users/contracts/contract";
import { ResponseDto } from "src/modules/users/dtos/response.dto";


@Injectable()
export class ValidatorInterceptor implements NestInterceptor{
    constructor(public contract: Contract){}

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);
        
        if(!valid) throw new AppError("Dados Invalido.", this.contract.errors, HttpStatus.BAD_REQUEST)
         
        return next.handle();
    }

} {

}