import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller('/cats')
export class CatsController {
  // constructor(private readonly appService: AppService) {}
  @Get()
  findAll(): string {
    console.log('cats return before');
    return 'This action returns all cats';
  }
}
