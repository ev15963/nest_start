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
        process.env.DB_CONNECTION_LIMIT === "50" ? "./env/.config.env" : "no config",
    }),
    CatsModule,
    ApitestModule,
    WeatherapiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
