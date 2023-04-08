import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirService } from './air.service';
import { CreateAirDto } from './dto/create-air.dto';
import { UpdateAirDto } from './dto/update-air.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SchedulerRegistry } from '@nestjs/schedule';

@ApiTags('대기질 배치 api')
@Controller('air')
export class AirController {
  constructor(
    private readonly airService: AirService,
    private scheduler: SchedulerRegistry
  ) { }

@ApiOperation({summary: '배치 시작 api', description: '배치 시작'})
@Get('/start-sample')
start() {
    const job = this.scheduler.getCronJob('air_start');

    job.start();
    console.log('start!!', job.lastDate());
}

@ApiOperation({summary: '배치 종료 api', description: '배치 종료'})
@Get('/stop-sample')
stop() {
    const job = this.scheduler.getCronJob('air_start');

    job.stop();
    console.log('stoped', job.lastDate());
}

//  @Post()
//  create(@Body() createAirDto: CreateAirDto) {
//    return this.airService.create();
//  }
  @ApiOperation({summary: '배치 api', description: '배치 api'})
  @Post()
  upsert() {
    console.log(`upsert in`);
    return this.airService.upsert();
  }

  @Get()
  findAll() {
    console.log(`findall in`);
    return this.airService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirDto: UpdateAirDto) {
    return this.airService.update(+id, updateAirDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airService.remove(+id);
  }
}
