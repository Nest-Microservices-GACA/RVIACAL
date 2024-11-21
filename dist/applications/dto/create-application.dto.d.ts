export declare class CreateApplicationDto {
    url: string;
    num_accion: number;
    opc_lenguaje: number;
    opc_arquitectura: Record<string, boolean>;
    fec_creacion?: Date;
    fec_actualizacion?: Date;
}
