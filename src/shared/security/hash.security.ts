import * as bcrypt from 'bcrypt';

export class Security{

    private saltOrRounds: number = 10;

    async hashPassword(pass:string):Promise<string>{
        return await bcrypt.hash(pass, this.saltOrRounds);
    }

    async comparePassword(pass:string, hash:string):Promise<boolean>{
        return await bcrypt.compare(pass, hash);
    }

}