import { TBL_AIR } from './entities/user.entity';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
dotenv.config({
    path: path.resolve(
     (process.env.NODE_ENV === 'dev') ? './env/.config.env' : 'not config env'
)
});

const ormconfig:TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.F_HOST,
    port: +process.env.F_PORT,
    username: process.env.F_USERNAME,
    password: process.env.F_PASSWD,
    database: process.env.F_DATABASE,
    entities: [ TBL_AIR ],
    synchronize: true, 
    logging: true
};
export = ormconfig;