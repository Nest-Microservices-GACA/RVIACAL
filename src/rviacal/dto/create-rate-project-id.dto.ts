import { Transform } from "class-transformer";
import { IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRateProjectIdDto {
    @IsOptional()
    @IsNumber()
    @IsIn([4], { message: 'La opción debe ser 4' })
    @Transform(({ value }) => (value !== undefined ? parseInt(value, 10) : undefined))
    opcArquitectura?: number;

    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10))
    opc_estatus_calificar: number;

    constructor() {
        this.opcArquitectura = 4; 
    }
}
