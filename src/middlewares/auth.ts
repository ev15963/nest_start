import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../entities/user.entity';
// const jwt = require('jsonwebtoken');

// import {refreshVerify, refreshToken} from "../controller/Auth.CTRL"
//import { checkAccessToken } from "../controller/Auth.CTRL"

// import {
//     getPrivate,
//     getPublic
// } from "../lib/constants";
/**
 * jwt 로그인 구현 : https://dapsu-startup.tistory.com/entry/NestJS-JWT-%EC%9D%B8%EC%A6%9D-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
 */

@Injectable()
export class JwtMiddleWare implements NestMiddleware<Request, Response> {
    constructor(
        private readonly jwtService: JwtService,
    // private readonly 
    ) {}

    async jwtLogin(data: UserEntity) {
        const { email, password } = data;
        const token = req.headers['accesstoken'] || req.headers['auth'] || req.headers['Auth'];

        if (token) {
            res.json({code: 401, message: "인증이 필요한 페이지이입니다."});
            return false;
        }
        
        // const p = 
    }
}
