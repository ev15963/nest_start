import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAirDto } from './dto/create-air.dto';
import { UpdateAirDto } from './dto/update-air.dto';
import { TBL_AIR } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirService {
  constructor(
    @InjectRepository(TBL_AIR)
    private users: Repository<TBL_AIR>,
  ) { }
  
  create(createAirDto: CreateAirDto) {
    return 'This action adds a new air';
  }

  async findAll() {
    console.log(this.users.find({
      select : ["tbl_air_seq", "sigun_cd"]
    }), 'ddd');
    return this.users.find({
      select : ["tbl_air_seq", "sigun_cd"]
    });
    // return `This action returns all air`;
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
