import { HttpStatus } from '@nestjs/common';


export class AppError{
    constructor(
        public message:string,
        public errors?: any,
        public status?: HttpStatus ,
    ){}
}