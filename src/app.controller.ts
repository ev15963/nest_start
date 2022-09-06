import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('app controller appcontroller');
    return this.appService.getHello();
  }
}
