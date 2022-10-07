import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { WeatherapiController } from "./weatherapi.controllers";
import { WeatherapiService } from "./weatherapi.service";

@Module({
    imports: [
        ScheduleModule.forRoot(),
    ],
    controllers: [WeatherapiController],
    providers: [WeatherapiService],
})
export class WeatherapiModule {}