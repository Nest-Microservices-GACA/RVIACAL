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
exports.CreateApplicationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateApplicationDto {
    constructor() {
        this.opc_lenguaje = 0;
    }
}
exports.CreateApplicationDto = CreateApplicationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateApplicationDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsIn)([0, 1, 2, 3], {
        message: 'El valor de num_accion debe ser 0, 1, 2 o 3',
    }),
    __metadata("design:type", Number)
], CreateApplicationDto.prototype, "num_accion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], CreateApplicationDto.prototype, "opc_lenguaje", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        try {
            return typeof value === 'string' ? JSON.parse(value) : value;
        }
        catch {
            throw new Error('opc_arquitectura debe ser una cadena JSON válida');
        }
    }),
    (0, class_validator_1.IsObject)({ message: 'opc_arquitectura debe ser un objeto' }),
    __metadata("design:type", Object)
], CreateApplicationDto.prototype, "opc_arquitectura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateApplicationDto.prototype, "fec_creacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateApplicationDto.prototype, "fec_actualizacion", void 0);
//# sourceMappingURL=create-application.dto.js.map