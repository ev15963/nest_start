import { Controller, Get } from "@nestjs/common";
import { SchedulerRegistry } from "@nestjs/schedule";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { WeatherapiService } from "./weatherapi.service";

@ApiTags('날씨 api')
@Controller('/weatherapi')
export class WeatherapiController {
    // constructor(private ){}
    constructor(private readonly weatherapiservice: WeatherapiService, private scheduler: SchedulerRegistry) {
        this.weathertest();
    }
    @ApiOperation({summary: '날씨 api 배치 api', description: '날씨 api 배치'})
    @Get('/weather')
    weathertest() {
        const result = this.weatherapiservice.weatherapi();

        return result;
    }

    @ApiOperation({summary: '배치 시작 api', description: '배치 시작'})
    @Get('/start-sample')
    start() {
        const job = this.scheduler.getCronJob('cronTest');

        job.start();
        console.log('start!!', job.lastDate());
    }

    @ApiOperation({summary: '배치 종료 api', description: '배치 종료'})
    @Get('/stop-sample')
    stop() {
        const job = this.scheduler.getCronJob('cronTest');

        job.stop();
        console.log('stoped', job.lastDate());
    }

}
