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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const applications_service_1 = require("./applications.service");
const create_rateproject_dto_1 = require("./dto/create-rateproject.dto");
const dto_response_1 = require("./dto/dto-response");
let ApplicationsController = class ApplicationsController {
    constructor(applicationsService) {
        this.applicationsService = applicationsService;
    }
    addAppRateProject(id, createRateProject) {
        return this.applicationsService.addAppRateProject(id, createRateProject);
    }
};
exports.ApplicationsController = ApplicationsController;
__decorate([
    (0, common_1.Patch)('rate-project/:id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la aplicación para calificar el proyecto', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Se muestra correctamente', type: dto_response_1.CreateRateProjectIdDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request', type: dto_response_1.BadRequestResponse }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized', type: dto_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden', type: dto_response_1.ForbiddenResponse }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error', type: dto_response_1.InternalServerErrorResponse }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_rateproject_dto_1.CreateRateProject]),
    __metadata("design:returntype", void 0)
], ApplicationsController.prototype, "addAppRateProject", null);
exports.ApplicationsController = ApplicationsController = __decorate([
    (0, swagger_1.ApiTags)('Aplicaciones'),
    (0, common_1.Controller)('applications'),
    __metadata("design:paramtypes", [applications_service_1.ApplicationsService])
], ApplicationsController);
//# sourceMappingURL=applications.controller.js.map