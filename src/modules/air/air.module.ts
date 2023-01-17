import { Module } from '@nestjs/common';
import { AirService } from './air.service';
import { AirController } from './air.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TBL_AIR } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TBL_AIR]),],
  controllers: [AirController],
  providers: [AirService]
})
export class AirModule {}
