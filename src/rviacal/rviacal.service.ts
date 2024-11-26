import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Application } from './entities/application.entity';
import { CommonService } from 'src/common/common.service';
import { CreateRateProject } from './dto/create-rateproject.dto';

@Injectable()
export class RviacalService {
  private readonly logger = new Logger(RviacalService.name);

  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    private readonly encryptionService: CommonService,
  ) {}

  async addAppRateProject(id: number, createRateProject: CreateRateProject) {
    try {
      const application = await this.applicationRepository.findOne({
        where: { idu_aplicacion: id },
      });

      if (!application) throw new NotFoundException(`Aplicación con ID ${id} no encontrado`);

      application.opc_arquitectura = {
        ...application.opc_arquitectura,
        [createRateProject.opcArquitectura]: true,
      };

      application.opc_estatus_calificar = 2;

      await this.applicationRepository.save(application);

      application.nom_aplicacion = this.encryptionService.decrypt(application.nom_aplicacion);

      return application;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.response) throw new BadRequestException(error.message);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
