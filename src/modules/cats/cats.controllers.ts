import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';

@ApiTags('기본 cats')
@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @ApiOperation({summary: '기본 텍스트 및 env test api', description: '기본 텍스트 및 env test'})
  @Get()
  findAll(): string {
    console.log('cats return before');
    // return 'This action returns all cats';
    const result = this.catsService.getCat();

    return 'ddd'+result;
  }
}
