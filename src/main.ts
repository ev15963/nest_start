import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {  }s

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('main in');
}
bootstrap();
