import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsInt, IsNumber, IsString } from 'class-validator';
import { CreateRateProjectIdDto } from './create-rate-project-id.dto';

export class UpdateRateProjectIdDto extends PartialType(CreateRateProjectIdDto) {
  @IsString()
  idu_proyecto: string;

  @IsNumber()
  @IsIn([4], {
      message: 'La opción debe ser 4',
  })
  opc_arquitectura: number;

  @IsNumber()
  opc_estatus_calificar: number;
}