import { Module } from '@nestjs/common';
import { AirService } from './air.service';
import { AirController } from './air.controller';

@Module({
  controllers: [AirController],
  providers: [AirService]
})
export class AirModule {}
