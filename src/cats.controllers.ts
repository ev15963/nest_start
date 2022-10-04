import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @Get()
  findAll(): string {
    console.log('cats return before');
    // return 'This action returns all cats';
    const result = this.catsService.getCat();

    return result;
  }
}
