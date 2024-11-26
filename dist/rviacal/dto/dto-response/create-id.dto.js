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
exports.CreateIdDto = exports.SourceCodeDto = exports.UserDto = exports.PositionDto = exports.ApplicationStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ApplicationStatusDto {
}
exports.ApplicationStatusDto = ApplicationStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ApplicationStatusDto.prototype, "idu_estatus_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "En proceso" }),
    __metadata("design:type", String)
], ApplicationStatusDto.prototype, "des_estatus_aplicacion", void 0);
class PositionDto {
}
exports.PositionDto = PositionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], PositionDto.prototype, "idu_rol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "560d8d05cfacc7ea2dae3c177ee41032:5cc44baca89a4f886de66004424365ce" }),
    __metadata("design:type", String)
], PositionDto.prototype, "nom_rol", void 0);
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UserDto.prototype, "idu_usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 99806750 }),
    __metadata("design:type", Number)
], UserDto.prototype, "numero_empleado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "e0dd34d83937aa751de783155ca1bf4d:af39db51b0ca96d353b625edb632a15a59a4794170fe8e979a7c88d16f060745" }),
    __metadata("design:type", String)
], UserDto.prototype, "nom_correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "22671f1e796ac3cf89e1f39c0c16567c:6320621716baf39e59903a944a27bbe39e8df11c7d8a3f0abc68ab41c6a6ecdb" }),
    __metadata("design:type", String)
], UserDto.prototype, "nom_usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserDto.prototype, "esactivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PositionDto }),
    __metadata("design:type", PositionDto)
], UserDto.prototype, "position", void 0);
class SourceCodeDto {
}
exports.SourceCodeDto = SourceCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 204 }),
    __metadata("design:type", Number)
], SourceCodeDto.prototype, "idu_codigo_fuente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "096e06a0e2b5ff76df85c29096f5c11d:c84cf07d33dd5144fb714a19ed83cd71ba84b58587866a7428ec1634dab15a665d374d9af08c2caf478f3108e334216209970a6b159647ff3e8fa0c61ee939e2" }),
    __metadata("design:type", String)
], SourceCodeDto.prototype, "nom_codigo_fuente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "b52ab59fb7b626857642ff64e6dfe56b:db07d9eca4bf0291aca972fc6150e38b8bcd866355e210db40369fb0af2789bd3b96d62902ded9b4b6844509a2832416" }),
    __metadata("design:type", String)
], SourceCodeDto.prototype, "nom_directorio", void 0);
class CreateIdDto {
}
exports.CreateIdDto = CreateIdDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 204 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "idu_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "266202410" }),
    __metadata("design:type", String)
], CreateIdDto.prototype, "idu_proyecto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "examenes" }),
    __metadata("design:type", String)
], CreateIdDto.prototype, "nom_aplicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "num_accion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "opc_lenguaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "opc_estatus_doc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "opc_estatus_doc_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "opc_estatus_caso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], CreateIdDto.prototype, "opc_estatus_calificar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { "1": false, "2": false, "3": false, "4": false } }),
    __metadata("design:type", Object)
], CreateIdDto.prototype, "opc_arquitectura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ApplicationStatusDto }),
    __metadata("design:type", ApplicationStatusDto)
], CreateIdDto.prototype, "applicationstatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserDto }),
    __metadata("design:type", UserDto)
], CreateIdDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SourceCodeDto }),
    __metadata("design:type", SourceCodeDto)
], CreateIdDto.prototype, "sourcecode", void 0);
//# sourceMappingURL=create-id.dto.js.map