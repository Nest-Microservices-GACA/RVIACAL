import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Application } from './entities/application.entity';
import { CommonService } from 'src/common/common.service';
import { CreateRateProject } from './dto/create-rateproject.dto';

@Injectable()
export class ApplicationsService {

  private readonly logger = new Logger('ApplicationsService');
  private readonly crviaEnvironment: number;

  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    private readonly encryptionService: CommonService
  ) {
    
  }

  async addAppRateProject(id: number, createRateProject: CreateRateProject) {
    try {
      const application = await this.applicationRepository.findOne({
        where: { idu_aplicacion: id }
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
      //this.handleDBExceptions(error);
    }
  }
}
