import { Module } from '@nestjs/common';
import { CatsController } from './cats.controllers';

@Module({
  controllers: [CatsController],
})
export class CatsModule {}
