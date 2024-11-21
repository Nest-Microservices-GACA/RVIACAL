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
exports.ApplicationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const application_entity_1 = require("./entities/application.entity");
const common_service_1 = require("../common/common.service");
let ApplicationsService = class ApplicationsService {
    constructor(applicationRepository, encryptionService) {
        this.applicationRepository = applicationRepository;
        this.encryptionService = encryptionService;
        this.logger = new common_1.Logger('ApplicationsService');
    }
    async addAppRateProject(id, createRateProject) {
        try {
            const application = await this.applicationRepository.findOne({
                where: { idu_aplicacion: id }
            });
            if (!application)
                throw new common_1.NotFoundException(`Aplicación con ID ${id} no encontrado`);
            application.opc_arquitectura = {
                ...application.opc_arquitectura,
                [createRateProject.opcArquitectura]: true,
            };
            application.opc_estatus_calificar = 2;
            await this.applicationRepository.save(application);
            application.nom_aplicacion = this.encryptionService.decrypt(application.nom_aplicacion);
            return application;
        }
        catch (error) {
        }
    }
};
exports.ApplicationsService = ApplicationsService;
exports.ApplicationsService = ApplicationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(application_entity_1.Application)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        common_service_1.CommonService])
], ApplicationsService);
//# sourceMappingURL=applications.service.js.map