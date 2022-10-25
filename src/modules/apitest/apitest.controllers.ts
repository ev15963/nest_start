import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { get } from 'http';
import { ApitestService } from './apitest.service';

@ApiTags('api httpService 이용')
@Controller('/apitest')
export class ApitestController {

    constructor(private readonly apitestservice: ApitestService) {}

    @ApiOperation({summary: '일별 박스 오피스 api', description: '일별 박스 오피스'})
    @Get()
    apitest1(): Promise<string> {
        console.log('api in');

        const result = this.apitestservice.apitest1();


        return result;
    }
}