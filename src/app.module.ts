import { Module } from '@nestjs/common';
import { ApitestModule } from './modules/apitest/apitest.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { WeatherapiModule } from './modules/weatherapi/weatherapi.module';
import { ConfigModule } from "@nestjs/config";
console.log('module in');
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === "dev" ? './env/.config.env' : 'not config env',
    }),
    CatsModule,
    ApitestModule,
    WeatherapiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
