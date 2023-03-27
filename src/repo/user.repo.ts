import { Injectable } from "@nestjs/common";
import { SetMetadata } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
// import { DataSource, EntityRepository, Repository } from "typeorm";
import { TBL_AIR } from '../entities/user.entity';
import { CustomRepository } from './typeorm-ex.decorator';

@CustomRepository(TBL_AIR)
export class UserRepository extends Repository<TBL_AIR> {}
