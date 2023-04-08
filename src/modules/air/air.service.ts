// import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAirDto } from './dto/create-air.dto';
import { UpdateAirDto } from './dto/update-air.dto';
import { TBL_AIR } from '../../entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
// import { Cron } from "@nestjs/schedule";
import { lastValueFrom } from "rxjs";
// import { sign } from 'crypto';

@Injectable()
export class AirService {
  constructor(
    @InjectRepository(TBL_AIR)
    private users: Repository<TBL_AIR>,
    private readonly httpService: HttpService,
    private dataSource: DataSource,
  ) { }
  
//  

//  create() {
 //   console.log(this.users.insert({
 //     sigun_cd: '1', 
 //     sigun_nm: '용인시', 
 //     mesurstn_nm: '이동읍',
 //     instl_yy: '', 
 //     mesrnw_nm: '도시대기',  
 //     mesure_day_tm: '2021-01-01 01:00', 
//      sua_gas_dnst_vl: '0.002', 
//      comnxd_dnst_vl: '0.5',  
//      no2_dnst_vl: '0.026',  
//      ozone_dnst_vl: '0.005', 
//      finedust_pm10_dnst_vl: '36', 
//      finedust_pm2_5_dnst_vl: '26',
//  }))
    // return 'This action adds a new air';
//  }

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

  async upsert(): Promise<string> {
    console.log(`upsert in`);
    console.log(this.users);
    const columns = new TBL_AIR();
    
    const result = await this.httpService.get(
   // 'https://openapi.gg.go.kr/Sidoatmospolutnmesure?TYPE=json',
     `https://openapi.gg.go.kr/Sidoatmospolutnmesure?TYPE=json&key=${process.env.WAPI_KEY}`,
    
    )
    const value = await lastValueFrom(result);
    let query_result;
    for (let i = 0; i < value.data.Sidoatmospolutnmesure[1].row.length; i++) {
      const {
        SIGUN_CD,
        SIGUN_NM,
        MESURSTN_NM,
        INSTL_YY,
        MESRNW_NM,
        MESURE_DAY_TM,
        SUA_GAS_DNST_VL,
        COMNXD_DNST_VL,
        NO2_DNST_VL,
        OZONE_DNST_VL,
        FINEDUST_PM10_DNST_VL,
        FINEDUST_PM2_5_DNST_VL
      }
        = await value.data.Sidoatmospolutnmesure[1].row[i];

      query_result = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(TBL_AIR)
        .values({
          sigun_cd: SIGUN_CD,
          sigun_nm: SIGUN_NM,
          mesurstn_nm: MESURSTN_NM,
          instl_yy: INSTL_YY,
          mesrnw_nm: MESRNW_NM,
          mesure_day_tm: MESURE_DAY_TM, 
          sua_gas_dnst_vl: SUA_GAS_DNST_VL,
          comnxd_dnst_vl: COMNXD_DNST_VL,
          no2_dnst_vl: NO2_DNST_VL,
          ozone_dnst_vl: OZONE_DNST_VL,
          finedust_pm10_dnst_vl: FINEDUST_PM10_DNST_VL,
          finedust_pm2_5_dnst_vl: FINEDUST_PM2_5_DNST_VL
        })
       .onConflict(`("mesurstn_nm") DO UPDATE SET 
          "sigun_cd"= :SIGUN_CD, "sigun_nm"=:SIGUN_NM, "mesurstn_nm"=:MESURSTN_NM, "instl_yy"=:INSTL_YY,
          "mesrnw_nm"= :MESRNW_NM, "mesure_day_tm"=:MESURE_DAY_TM, "sua_gas_dnst_vl"=:SUA_GAS_DNST_VL,
          "comnxd_dnst_vl"=:COMNXD_DNST_VL, "no2_dnst_vl"=:NO2_DNST_VL, "ozone_dnst_vl"=:OZONE_DNST_VL,
          "finedust_pm10_dnst_vl"=:FINEDUST_PM10_DNST_VL, "finedust_pm2_5_dnst_vl"=:FINEDUST_PM2_5_DNST_VL,
          "update_at"= NOW()`)
        .setParameter('SIGUN_CD', SIGUN_CD)
        .setParameter('SIGUN_NM', SIGUN_NM)
        .setParameter('MESURSTN_NM', MESURSTN_NM)
        .setParameter('INSTL_YY', INSTL_YY)
        .setParameter('MESRNW_NM', MESRNW_NM)
        .setParameter('MESURE_DAY_TM', MESURE_DAY_TM)
        .setParameter('SUA_GAS_DNST_VL', SUA_GAS_DNST_VL)
        .setParameter('COMNXD_DNST_VL', COMNXD_DNST_VL)
        .setParameter('NO2_DNST_VL', NO2_DNST_VL)
        .setParameter('OZONE_DNST_VL', OZONE_DNST_VL)
        .setParameter('FINEDUST_PM10_DNST_VL', FINEDUST_PM10_DNST_VL)
        .setParameter('FINEDUST_PM2_5_DNST_VL', FINEDUST_PM2_5_DNST_VL)
        .execute()
    }

    return query_result; 
  }
}
