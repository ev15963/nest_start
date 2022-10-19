import { Controller, DefaultValuePipe, Get, HttpStatus, Param, ParseIntPipe, Query } from "@nestjs/common";
import { PipeService } from "./pipe.service";

@Controller('/pipetest')
export class PipeController {
    constructor(private readonly pipetestservice: PipeService) {}


    @Get('/')
    test() {
        return 'dddd';
    }

    @Get('/default')
    findAll(
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    ) {
        console.log('default in');
        console.log(offset, limit);
        // return 'ddd';
        return this.pipetestservice.pipetest1();
    }
        
    @Get(':id')
    pipetest(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        console.log('pipe controllers in');
        const result = this.pipetestservice.pipetest(id);

        return result;
    }
}