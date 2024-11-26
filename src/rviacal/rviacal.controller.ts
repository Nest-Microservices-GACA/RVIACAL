import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RviacalService } from './rviacal.service';
import { CreateRateProject } from './dto/create-rateproject.dto';
import { CreateRateProjectIdDto } from './dto/dto-response';
import { plainToInstance } from 'class-transformer';

@Controller()
export class RviacalController {
  private readonly logger = new Logger(RviacalController.name);

  constructor(private readonly rviacalService: RviacalService) {}

  @MessagePattern({ cmd: 'rate-project' })
async addAppRateProject(
  @Payload('id') id: number,
  @Payload('data') createRateProject: CreateRateProject,
): Promise<CreateRateProjectIdDto> {
  const application = await this.rviacalService.addAppRateProject(id, createRateProject);

  // Mapear la entidad al DTO
  return plainToInstance(CreateRateProjectIdDto, {
    applicationstatus: application.opc_estatus_calificar,
    user: application.nom_aplicacion,
    sourcecodets: application.opc_arquitectura,
  });
}
}
