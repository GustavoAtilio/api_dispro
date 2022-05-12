import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './services/user.service';
import { Security } from 'src/shared/security/hash.security';


@Module({
    imports:[TypeOrmModule.forFeature([
        UserEntity,
      ]),
    ],
    controllers:[
        UserController,
    ],
    providers:[
        UserService,
        Security,
    ],
})
export class UsersModule {}
