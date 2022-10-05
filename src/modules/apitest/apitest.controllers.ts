import { Controller, Get } from '@nestjs/common';
// import { get } from 'http';
import { ApitestService } from './apitest.service';

@Controller('/apitest')
export class ApitestController {

    constructor(private readonly apitestservice: ApitestService) {}

    @Get()
    apitest1(): Promise<string> {
        console.log('api in');

        const result = this.apitestservice.apitest1();


        return result;
    }
}