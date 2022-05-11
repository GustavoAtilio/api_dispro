import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';

@Module({
    controllers:[
        UserController,
    ],
    providers:[],
})
export class UsersModule {}