import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { ResponseDto } from 'src/modules/users/dtos/response.dto';
  import { AppError } from '../errors/error';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(err => throwError(() => {
               
                if(err instanceof AppError){
                    throw new HttpException(new ResponseDto(
                        err.message,
                        false,
                        null,
                        err.errors,
                        ), err.status);
                }
               
               throw new HttpException(err,HttpStatus.INTERNAL_SERVER_ERROR);
            })),
          );
          
    }
  }
