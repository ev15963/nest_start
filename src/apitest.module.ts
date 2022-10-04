import { Module } from "@nestjs/common";
import { ApitestController } from './apitest.controllers';
import { ApitestService } from "./apitest.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [ApitestController],
    providers: [ApitestService],
})
export class ApitestModule {}