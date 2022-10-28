import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ValidationPipe } from '@nestjs/common';


dotenv.config({
  path: path.resolve(
    (process.env.NODE_ENV === 'dev') ? './env/.config.env' : 'not config env'
  )
})


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  //const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  const config = new DocumentBuilder()
    .setTitle('nestjs_start')
    .setDescription('nestjs_start API')
    .setVersion('1.0')
    .addTag('nestjs')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // app.use(cookieParser());
  // if (process.env.NODE_ENV !== 'dev') {
  //   console.log(1);
  //   app.use(helmet());
  // } else {
  //   app.use(helmet({ contentSecurityPolicy: false }));
  // }

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  });
  // //app.register(fastifyHelmet)
  // app.use(logger('dev'));
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     transform: true,
  //   }),
  // );
  // //setupSwagger(app)
  // app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));


  await app.listen(3000);

  console.log(process.env.LOGGING, 'is true');
  console.log('main in');
}
bootstrap();
