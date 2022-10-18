import { Controller, Get, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { PipeService } from "./pipe.service";

@Controller('/pipetest')
export class PipeController {
    constructor(private readonly pipetestservice: PipeService) {}


    @Get('/')
    test() {
        return 'dddd';
    }

    @Get(':id')
    pipetest(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        console.log('pipe controllers in');
        const result = this.pipetestservice.pipetest(id);

        return result;
    }
}