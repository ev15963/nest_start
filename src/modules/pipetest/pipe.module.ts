import { Module } from "@nestjs/common";
import { PipeController } from "./pipe.controllers";
import { PipeService } from "./pipe.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [PipeController],
    providers: [PipeService],
})
export class PipeModule {}