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
exports.CreateZipIdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateZipIdDto {
}
exports.CreateZipIdDto = CreateZipIdDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["localhost"] }),
    __metadata("design:type", Array)
], CreateZipIdDto.prototype, "host", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "3000" }),
    __metadata("design:type", String)
], CreateZipIdDto.prototype, "port", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["applications", "7z", "1"] }),
    __metadata("design:type", Array)
], CreateZipIdDto.prototype, "path", void 0);
//# sourceMappingURL=create-zip-id.dto.js.map