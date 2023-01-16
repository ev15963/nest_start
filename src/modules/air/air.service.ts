import { Injectable } from '@nestjs/common';
import { CreateAirDto } from './dto/create-air.dto';
import { UpdateAirDto } from './dto/update-air.dto';

@Injectable()
export class AirService {
  create(createAirDto: CreateAirDto) {
    return 'This action adds a new air';
  }

  findAll() {
    return `This action returns all air`;
  }

  findOne(id: number) {
    return `This action returns a #${id} air`;
  }

  update(id: number, updateAirDto: UpdateAirDto) {
    return `This action updates a #${id} air`;
  }

  remove(id: number) {
    return `This action removes a #${id} air`;
  }
}
