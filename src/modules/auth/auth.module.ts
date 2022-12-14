import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "../../grard/passport.jwt.strategy";
import { EmailService } from "./email.service";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({ secret: process.env.JWT_SECRET }),

    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtModule, EmailService],
})
export class AuthModule {}