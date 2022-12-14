import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { lastValueFrom } from "rxjs";

@Injectable()
export class WeatherapiService {
    constructor(private readonly httpService: HttpService) {}
    private readonly logger = new Logger(WeatherapiService.name);
    @Cron('5 * * * * *', {name: 'cronTest'})
    async weatherapi(): Promise<string> {
        console.log('weather in');
        const result = await this.httpService.get(
            'https://openapi.gg.go.kr/Sidoatmospolutnmesure?TYPE=json',
            
            )
        const value = await lastValueFrom(result);
        
        this.logger.log(value.data.Sidoatmospolutnmesure[1].row[0].SIGUN_NM);

        return value.data.Sidoatmospolutnmesure[1].row[0];
    }
}