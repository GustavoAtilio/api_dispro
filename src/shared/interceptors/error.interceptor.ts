import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    CallHandler,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError, flatMap } from 'rxjs/operators';
import { ResponseDto } from 'src/modules/users/dtos/response.dto';
import { AppError } from '../errors/error';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(err => throwError(() => {
                if(err instanceof AppError){
                    throw new HttpException(new ResponseDto(
                        "Ops!! algo saiu errado!",
                        false,
                        null,
                        err.message,
                        ), HttpStatus.BAD_REQUEST);
                }

                throw new HttpException(new ResponseDto(
                    "Ops!! algo saiu errado!",
                    false,
                    null,
                    err,
                    ), HttpStatus.INTERNAL_SERVER_ERROR);
            })),
          );
          
    }
  }
  