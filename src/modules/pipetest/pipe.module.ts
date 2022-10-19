import { Module } from "@nestjs/common";
import { PipeController } from "./pipe.controllers";
import { PipeService } from "./pipe.service";
import { HttpModule } from "@nestjs/axios";
import { AuthService } from "./auth.service";

@Module({
    imports: [HttpModule],
    controllers: [PipeController],
    providers: [PipeService, AuthService],
})
export class PipeModule {}