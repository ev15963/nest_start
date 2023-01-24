import { Module } from '@nestjs/common';
import { ApitestModule } from './modules/apitest/apitest.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { WeatherapiModule } from './modules/weatherapi/weatherapi.module';
import { ConfigModule } from "@nestjs/config";
import { PipeModule } from './modules/pipetest/pipe.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repo/user.repo';
import { AirModule } from './modules/air/air.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === "dev" ? '../env/.config.env' : 'not config env',
    }),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([UserRepository]),
    CatsModule,
    ApitestModule,
    WeatherapiModule,
    PipeModule,
    AuthModule,
    AirModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
