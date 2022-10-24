import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as jwt from 'jsonwebtoken';
import * as uuid from 'uuid';
import {EmailService} from './email.service';

interface User {
    id: string;
    name: string;
    email: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly emailService: EmailService,
        // readonly jwtService: JwtService, 
        // @Inject()
    ) {}
    // findOne(signupVerifyToken: Array) {
        
    // }

    // async validateUser(user_id: string, password: string): Promise<any> {
    //     console.log('authservice');
    //     const accessToken = await this.jwtService.sign(result);
        
    // }


    async createUser(name: string, email: string, password: string) {
        const signupVerifyToken = uuid.v1();

        // 회원가입 이메일 발송
        await this.sendMemberJoinEmail(email, signupVerifyToken);
    }

    private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
        await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    }

    findOne(signupVerifyToken: any) {
        const id = '01FKTS71436TMSNVA0ZYKZEFC1';
        const name = 'Dexter';
        const email = 'dexter.haan@gmail.com';
        return {id: id, name: name, email: email};
        // return signupVerifyToken;
    }

    login(user: User){
        const payload = { ...user};
        console.log(payload, 'payload')
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d',
            // audience: 'example.com',
            // issuer: 'example.com',
            algorithm: 'HS256', // 암호화 알고리즘
        // expiresIn: '1h', 	  // 유효기간
        });
    }
}