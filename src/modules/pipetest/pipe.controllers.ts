import { Body, Controller, DefaultValuePipe, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "src/dto/apitest/request/create-user.dto";
import { PipeService } from "./pipe.service";
import { AuthService } from "../auth/auth.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
// import { ValidationPipe } from './validation.pipe';

@ApiTags('pipe 유효성검사')
@Controller('/pipetest')
export class PipeController {
    constructor(private readonly pipetestservice: PipeService, 
        private readonly authuserservice: AuthService) {}

    @ApiOperation({summary: 'pipe 구축 test api', description: 'pipe 구축 test'})
    @Get('/')
    test() {
        return 'dddd';
    }

    @ApiOperation({summary: 'name, email, paswd api', description: 'name, email, paswd'})
    @Post('/users')
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.pipetestservice.create(createUserDto);
    }

    // @Post('/users/email-verify')
    // @Post('/users/login')
    // async login(email: string, password: string): Promise<string> {
    //     const user = await this.authuserservice.findOne({ email, password });

    //     if(!user) {
    //         throw new NotFoundException('유저가 존재하지 않습니다.');
    //     }

    //     // return this.authuserservice.login({
    //     //     id: user.id,
    //     //     name: user.name,
    //     //     email: user.email,
    //     // });
    // }

    @ApiOperation({summary: 'pipe 파리미터 값 없으면 0, 20 api', description: 'pipe 파리미터 값 없으면 0, 20'})
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
    
    @ApiOperation({summary: 'id가 number type인지 검증하는 pipe api', description: 'id가 number type인지 검증하는 pipe'})
    @Get(':id')
    pipetest(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        console.log('pipe controllers in');
        const result = this.pipetestservice.pipetest(id);

        return result;
    }

}