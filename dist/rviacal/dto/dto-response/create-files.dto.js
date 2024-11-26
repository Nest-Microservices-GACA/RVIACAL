"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilesDto = exports.RviaProcessDto = exports.CheckmarxDto = exports.ApplicationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ApplicationDto {
}
exports.ApplicationDto = ApplicationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "RVIA-Front" }),
    __metadata("design:type", String)
], ApplicationDto.prototype, "nom_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 968202410 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "idu_proyecto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "num_accion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { "1": true, "2": true, "3": true } }),
    __metadata("design:type", Object)
], ApplicationDto.prototype, "opc_arquitectura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "opc_lenguaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "opc_estatus_doc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "opc_estatus_doc_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "opc_estatus_caso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "opc_estatus_calificar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            idu_estatus_aplicacion: 2,
            des_estatus_aplicacion: "En espera"
        }
    }),
    __metadata("design:type", Object)
], ApplicationDto.prototype, "applicationstatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            nom_codigo_fuente: "fca623eea060b42b5ecf86c6857e986b:ccd38f3ce1ce66cbb1dcfc8592b8001dbb9421a44d76ad8f0d93ecf57c37d08fb8501d2609dfa58b38eb7eb9f611723838b4eb70c62de8aaa732d98dfe869b04",
            nom_directorio: "9ddf084b029365cf1a02efa31284918d:05fec69d16b1798d7b2bb2f209983c1ced4e64c55ff58017e00bfa413c8c58eca5eb7096ad50b180674a89138e0157bd",
            idu_codigo_fuente: 157
        }
    }),
    __metadata("design:type", Object)
], ApplicationDto.prototype, "sourcecode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            idu_usuario: 1,
            numero_empleado: 99887766,
            nom_correo: "example@coppel.com",
            nom_usuario: "nombre usuario completo",
            esactivo: true,
            position: {
                idu_rol: 1,
                nom_rol: "Administrador"
            }
        }
    }),
    __metadata("design:type", Object)
], ApplicationDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 157 }),
    __metadata("design:type", Number)
], ApplicationDto.prototype, "idu_aplicacion", void 0);
class CheckmarxDto {
}
exports.CheckmarxDto = CheckmarxDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: [] }),
    __metadata("design:type", Array)
], CheckmarxDto.prototype, "checkmarx", void 0);
class RviaProcessDto {
}
exports.RviaProcessDto = RviaProcessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], RviaProcessDto.prototype, "isValidProcess", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Proceso IA Iniciado Correctamente" }),
    __metadata("design:type", String)
], RviaProcessDto.prototype, "messageRVIA", void 0);
class CreateFilesDto {
}
exports.CreateFilesDto = CreateFilesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: ApplicationDto }),
    __metadata("design:type", ApplicationDto)
], CreateFilesDto.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CheckmarxDto }),
    __metadata("design:type", CheckmarxDto)
], CreateFilesDto.prototype, "checkmarx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], CreateFilesDto.prototype, "esSanitizacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RviaProcessDto }),
    __metadata("design:type", RviaProcessDto)
], CreateFilesDto.prototype, "rviaProcess", void 0);
//# sourceMappingURL=create-files.dto.js.map