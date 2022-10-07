import { Controller, Get } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";
import { WeatherapiService } from "./weatherapi.service";

@Controller('/weatherapi')
export class WeatherapiController {
    // constructor(private ){}
    constructor(private readonly weatherapiservice: WeatherapiService, private scheduler: SchedulerRegistry) {};

    @Get('/weather')
    weathertest() {
        const result = this.weatherapiservice.weatherapi();

        // return result;
    }

    @Get('/start-sample')
    start() {
        const job = this.scheduler.getCronJob('cronexample');

        job.start();
        console.log('start!!', job.lastDate());
    }

    @Get('/stop-sample')
    stop() {
        const job = this.scheduler.getCronJob('cronSample');

        job.stop();
        console.log('stoped', job.lastDate());
    }

}
