import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/grard/auth.guard";
import { AuthService } from "./auth.service";

@Controller('/auth')
export class AuthController {

    constructor(private readonly authservice: AuthService) {}

    // @Post('signUp')
    // @ApiOperation({ summary: '회원가입 API', description: '회원가입' })
    // @ApiOkResponse({ type: ResSignInDto })
    // async signUp(@Body() sign_data: SignUpDto) {
    //   const result = await this.authService.signUp(sign_data);
    //   return new ResponseDto(result);
    // }
  
    // @Post('signIn')
    // @ApiOperation({ summary: '로그인 API', description: '로그인 하기' })
    // @ApiOkResponse({ type: ResSignInDto })
    // async signIn(@Body() sign_data: SignInDto) {
    //   const data = await this.authService.signIn(sign_data);
    //   return new ResponseDto(data);
    // }
  
    // @Delete('signOut')
    // @ApiOperation({ summary: '로그아웃 API', description: '로그아웃' })
    // @ApiOkResponse({ type: ResponseDto })
    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    // async signOut(@User() user: AccessTokenDto) {
    //   const result = await this.authService.signOut(user);
    //   return new ResponseDto();
    // }


    @Post('/test')
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    authtest() {
        console.log('authtest in');

        // const result = this.authservice.login(user);

        // return result;
        return 'ddd';
    }
}