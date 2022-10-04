import { Module } from "@nestjs/common";
import { ApitestController } from './apitest.controllers'
import { ApitestService } from "./apitest.service";

@Module({
    imports: [],
    controllers: [ApitestController],
    providers: [ApitestService],
})
export class ApitestModule {}