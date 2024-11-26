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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RviacalController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RviacalController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rviacal_service_1 = require("./rviacal.service");
const create_rateproject_dto_1 = require("./dto/create-rateproject.dto");
const dto_response_1 = require("./dto/dto-response");
const class_transformer_1 = require("class-transformer");
let RviacalController = RviacalController_1 = class RviacalController {
    constructor(rviacalService) {
        this.rviacalService = rviacalService;
        this.logger = new common_1.Logger(RviacalController_1.name);
    }
    async addAppRateProject(id, createRateProject) {
        const application = await this.rviacalService.addAppRateProject(id, createRateProject);
        return (0, class_transformer_1.plainToInstance)(dto_response_1.CreateRateProjectIdDto, {
            applicationstatus: application.opc_estatus_calificar,
            user: application.nom_aplicacion,
            sourcecodets: application.opc_arquitectura,
        });
    }
};
exports.RviacalController = RviacalController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'rate-project' }),
    __param(0, (0, microservices_1.Payload)('id')),
    __param(1, (0, microservices_1.Payload)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_rateproject_dto_1.CreateRateProject]),
    __metadata("design:returntype", Promise)
], RviacalController.prototype, "addAppRateProject", null);
exports.RviacalController = RviacalController = RviacalController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [rviacal_service_1.RviacalService])
], RviacalController);
//# sourceMappingURL=rviacal.controller.js.map