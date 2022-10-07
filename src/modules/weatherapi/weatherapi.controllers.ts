import { Controller, Get } from "@nestjs/common";
import { WeatherapiService } from "./weatherapi.service";

@Controller('/weatherapi')
export class WeatherapiController {
    constructor(private readonly weatherapiservice: WeatherapiService) {};

    @Get()
    weathertest() {
        const result = this.weatherapiservice.weatherapi();

        // return result;
    }

}