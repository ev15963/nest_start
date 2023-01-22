import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirService } from './air.service';
import { CreateAirDto } from './dto/create-air.dto';
import { UpdateAirDto } from './dto/update-air.dto';

@Controller('air')
export class AirController {
  constructor(private readonly airService: AirService) {}

  @Post()
  create(@Body() createAirDto: CreateAirDto) {
    return this.airService.create();
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
