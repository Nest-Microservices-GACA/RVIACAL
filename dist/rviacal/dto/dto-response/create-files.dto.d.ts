export declare class ApplicationDto {
    nom_aplicacion: string;
    idu_proyecto: number;
    num_accion: number;
    opc_arquitectura: {
        [key: number]: boolean;
    };
    opc_lenguaje: number;
    opc_estatus_doc: number;
    opc_estatus_doc_code: number;
    opc_estatus_caso: number;
    opc_estatus_calificar: number;
    applicationstatus: {
        idu_estatus_aplicacion: number;
        des_estatus_aplicacion: string;
    };
    sourcecode: {
        nom_codigo_fuente: string;
        nom_directorio: string;
        idu_codigo_fuente: number;
    };
    user: {
        idu_usuario: number;
        numero_empleado: number;
        nom_correo: string;
        nom_usuario: string;
        esactivo: boolean;
        position: {
            idu_rol: number;
            nom_rol: string;
        };
    };
    idu_aplicacion: number;
}
export declare class CheckmarxDto {
    checkmarx: any[];
}
export declare class RviaProcessDto {
    isValidProcess: boolean;
    messageRVIA: string;
}
export declare class CreateFilesDto {
    application: ApplicationDto;
    checkmarx: CheckmarxDto;
    esSanitizacion: boolean;
    rviaProcess: RviaProcessDto;
}
