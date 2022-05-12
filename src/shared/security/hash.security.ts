import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export class Security{

    constructor(
        private jwtService: JwtService,
    ){}

    private saltOrRounds: number = 10;

    async hashPassword(pass:string):Promise<string>{
        return await bcrypt.hash(pass, this.saltOrRounds);
    }

    async comparePassword(pass:string, hash:string):Promise<boolean>{
        return await bcrypt.compare(pass, hash);
    }


}