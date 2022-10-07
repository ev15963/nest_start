import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class WeatherapiService {
    private readonly logger = new Logger(WeatherapiService.name);
    @Cron('5 * * * * *', {name: 'cronTest'})
    weatherapi() {
        console.log('weather in');
        this.logger.log('Task Called');
        // return '';
    }
}