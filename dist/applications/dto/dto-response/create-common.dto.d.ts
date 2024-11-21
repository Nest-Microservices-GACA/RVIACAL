export declare class CreateCommonDto {
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
    checkmarx: Array<{
        idu_checkmarx: number;
        nom_checkmarx: string;
        nom_directorio: string;
    }>;
    cost: any[];
    applicationstatus: {
        idu_estatus_aplicacion: number;
        des_estatus_aplicacion: string;
    };
    sourcecode: {
        idu_codigo_fuente: number;
        nom_codigo_fuente: string;
        nom_directorio: string;
    };
    user: {
        idu_usuario: number;
        numero_empleado: number;
        nom_correo: string;
        nom_usuario: string;
        esactivo: boolean;
    };
    sequentialId: number;
    totalCost: number;
}
