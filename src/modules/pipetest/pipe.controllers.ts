import { Body, Controller, DefaultValuePipe, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Query, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "src/dto/apitest/request/create-user.dto";
import { PipeService } from "./pipe.service";
import { AuthService } from "../auth/auth.service";
// import { ValidationPipe } from './validation.pipe';

@Controller('/pipetest')
export class PipeController {
    constructor(private readonly pipetestservice: PipeService, 
        private readonly authuserservice: AuthService) {}


    @Get('/')
    test() {
        return 'dddd';
    }

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

    // @UseGuards(Jw)
}