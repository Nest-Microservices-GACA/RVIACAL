import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNumber, IsString } from 'class-validator';
import { CreateRateProjectIdDto } from './create-rate-project-id.dto';

export class UpdateRateProjectIdDto extends PartialType(CreateRateProjectIdDto) {

  @IsString()
  idu_proyecto: string;
}