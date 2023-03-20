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
  
//  

  create() {
    console.log(this.users.insert({
      sigun_cd: '1', 
      sigun_nm: '용인시', 
      mesurstn_nm: '이동읍',
      instl_yy: '', 
      mesrnw_nm: '도시대기',  
      mesure_day_tm: '2021-01-01 01:00', 
      sua_gas_dnst_vl: '0.002', 
      comnxd_dnst_vl: '0.5',  
      no2_dnst_vl: '0.026',  
      ozone_dnst_vl: '0.005', 
      finedust_pm10_dnst_vl: '36', 
      finedust_pm2_5_dnst_vl: '26',
  }))
    // return 'This action adds a new air';
  }

  async findAll() {
    console.log(this.users.find({
      select : ["tbl_air_seq", "sigun_cd"]
    }), 'ddd');
    console.log(+process.env.F_PORT);
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
