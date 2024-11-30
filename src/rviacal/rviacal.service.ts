import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { Application } from './entities/application.entity';
import { UpdateRateProjectIdDto } from './dto/update-rate-project-id.dto';

@Injectable()
export class RviacalService {
  private readonly logger = new Logger(RviacalService.name);

  constructor(
    @InjectRepository(Application)
    private readonly appRepository: Repository<Application>
  ) {}

  async addAppRateProject(idu_proyecto: string, updateRateProjectIdDto: UpdateRateProjectIdDto) {
    
    const app = await this.appRepository.findOne({ where: { idu_proyecto: idu_proyecto } });
    if ( !app ) {
      this.logger.error('[rviacal.addAppRateProject.service]');
      throw new RpcException({
        status: 404,
        message: `App ${ idu_proyecto } no encontrada`,
      });
    }

    
    app.opc_arquitectura = {
      ...app.opc_arquitectura,
      [updateRateProjectIdDto.opcArquitectura]: true,
    };
    

    app.opc_estatus_calificar = updateRateProjectIdDto.opc_estatus_calificar;
    await this.appRepository.save(app);

    // TODO: Implementar lógica para llamar a addons
    
    return {
      message: `Test case añadido a la aplicación ${idu_proyecto}`,
      application: app
    };
  }
}
