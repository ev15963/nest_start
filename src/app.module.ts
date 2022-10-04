import { Module } from '@nestjs/common';
import { ApitestModule } from './apitest.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats.module';
console.log('module in');
@Module({
  imports: [
    CatsModule,
    ApitestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
