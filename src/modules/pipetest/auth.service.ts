import { Inject, Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';

interface User {
    id: string;
    name: string;
    email: string;
}

@Injectable()
export class AuthService {
    // constructor(
    //     @Inject(authConfig.KEY)
    // )
    // findOne(signupVerifyToken: Array) {
        
    // }

    login(user: User){
        const payload = { ...user};
    }
}