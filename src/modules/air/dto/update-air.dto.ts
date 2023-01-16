import { PartialType } from '@nestjs/mapped-types';
import { CreateAirDto } from './create-air.dto';

export class UpdateAirDto extends PartialType(CreateAirDto) {}
