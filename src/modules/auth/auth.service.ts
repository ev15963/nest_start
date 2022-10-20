import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as jwt from 'jsonwebtoken';

interface User {
    id: string;
    name: string;
    email: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        
    ) {}
    // findOne(signupVerifyToken: Array) {
        
    // }

    async validateUser(user_id: string, password: string): Promise<any> {
        console.log('authservice');
        const accessToken = await this.jwtService.sign(result);
        
    }

    login(user: User){
        const payload = { ...user};
    }
}