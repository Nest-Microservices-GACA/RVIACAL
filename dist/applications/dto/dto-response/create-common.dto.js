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
exports.CreateCommonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCommonDto {
}
exports.CreateCommonDto = CreateCommonDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 204 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "idu_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "266202410" }),
    __metadata("design:type", String)
], CreateCommonDto.prototype, "idu_proyecto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "examenes" }),
    __metadata("design:type", String)
], CreateCommonDto.prototype, "nom_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "num_accion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "opc_lenguaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "opc_estatus_doc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "opc_estatus_doc_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "opc_estatus_caso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "opc_estatus_calificar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { "1": false, "2": false, "3": false, "4": false } }),
    __metadata("design:type", Object)
], CreateCommonDto.prototype, "opc_arquitectura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                idu_checkmarx: 113,
                nom_checkmarx: "checkmarx_266202410_examenes.csv",
                nom_directorio: "d4cf2403da30c4c075770ac3f67f2e14:2f61ecbc8d79d1a428b3a2f290588c8fbcc6800099cc3b1be75e4087af1b23ba4313a917a061c1e34af396e0db3d88813eb584bc39593bb45ea46474912eccd2308bd925b002ee73bcdaba2f90861b30"
            }
        ]
    }),
    __metadata("design:type", Array)
], CreateCommonDto.prototype, "checkmarx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [] }),
    __metadata("design:type", Array)
], CreateCommonDto.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            idu_estatus_aplicacion: 2,
            des_estatus_aplicacion: "En espera"
        }
    }),
    __metadata("design:type", Object)
], CreateCommonDto.prototype, "applicationstatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            idu_codigo_fuente: 204,
            nom_codigo_fuente: "9ad61f44-6f4a-49c0-b3e5-6b6b97dfaf25.examenes.zip",
            nom_directorio: "/sysx/bito/projects/266202410_examenes"
        }
    }),
    __metadata("design:type", Object)
], CreateCommonDto.prototype, "sourcecode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            idu_usuario: 1,
            numero_empleado: 99806750,
            nom_correo: "e0dd34d83937aa751de783155ca1bf4d:af39db51b0ca96d353b625edb632a15a59a4794170fe8e979a7c88d16f060745",
            nom_usuario: "nombre usuario completo",
            esactivo: true
        }
    }),
    __metadata("design:type", Object)
], CreateCommonDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "sequentialId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateCommonDto.prototype, "totalCost", void 0);
//# sourceMappingURL=create-common.dto.js.map