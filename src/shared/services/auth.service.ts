
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async createToken(id:string) {
        const user = {ìd:id}
        return this.jwtService.sign(user);
    }

}