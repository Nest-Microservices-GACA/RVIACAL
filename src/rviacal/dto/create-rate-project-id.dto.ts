import { Transform } from "class-transformer";
import { IsIn, IsNumber, IsString } from "class-validator";

export class CreateRateProjectIdDto {
    @IsString()
    idu_proyecto: string;

    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10))
    @IsIn([4], {
        message: 'La opción debe ser 4',
    })
    opc_arquitectura: number;

    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10))
    opc_estatus_calificar: number;
    
}
