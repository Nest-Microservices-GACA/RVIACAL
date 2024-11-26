export declare class ApplicationStatusDto {
    idu_estatus_aplicacion: number;
    des_estatus_aplicacion: string;
}
export declare class PositionDto {
    idu_rol: number;
    nom_rol: string;
}
export declare class UserDto {
    idu_usuario: number;
    numero_empleado: number;
    nom_correo: string;
    nom_usuario: string;
    esactivo: boolean;
    position: PositionDto;
}
export declare class SourceCodeDto {
    idu_codigo_fuente: number;
    nom_codigo_fuente: string;
    nom_directorio: string;
}
export declare class CreateDocumentationCodeIdDto {
    idu_aplicacion: number;
    idu_proyecto: string;
    nom_aplicacion: string;
    num_accion: number;
    opc_lenguaje: number;
    opc_estatus_doc: number;
    opc_estatus_doc_code: number;
    opc_estatus_caso: number;
    opc_estatus_calificar: number;
    opc_arquitectura: {
        [key: number]: boolean;
    };
    applicationstatus: ApplicationStatusDto;
    user: UserDto;
    sourcecode: SourceCodeDto;
}
