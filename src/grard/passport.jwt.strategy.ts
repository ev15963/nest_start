import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../modules/auth/auth.service";
// import { Payload } from "./payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        console.log('ddddddstrategy');
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payload: any) {
        // const user = await this.authService.tokenValidateUser(payload);
        // if (!user) {
        //     return done(new UnauthorizedException({ message: 'user does not exist' }), false);
        // }

        return 'jwtstrategy validate';
    }


//     "id": "01FKTS71436TMSNVA0ZYKZEFC1",
//   "name": "Dexter",
//   "email": "dexter.haan@gmail.com",
//   "iat": 1636207919,
//   "exp": 1636294319,
//   "aud": "example.com",
//   "iss": "example.com"

    // async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
    //     const user = await this.authService.tokenValidateUser(payload);
    //     if (!user) {
    //         return done(new UnauthorizedException({ message: 'user does not exist' }), false);
    //     }

    //     return done(null, user);
    // }
}