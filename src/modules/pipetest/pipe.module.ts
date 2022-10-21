import { Module } from "@nestjs/common";
import { PipeController } from "./pipe.controllers";
import { PipeService } from "./pipe.service";
import { HttpModule } from "@nestjs/axios";
import { AuthService } from "../auth/auth.service";
import { EmailService } from "../auth/email.service";

@Module({
    imports: [HttpModule],
    controllers: [PipeController],
    providers: [
        PipeService, 
        AuthService,
        EmailService,
    ],
})
export class PipeModule {}