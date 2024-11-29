import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RviacalService } from './rviacal.service';
import { UpdateRateProjectIdDto } from './dto/update-rate-project-id.dto';

@Controller()
export class RviacalController {
  constructor(private readonly rviacalService: RviacalService) {}

  @MessagePattern('rate-project')
  addAppRateProject(@Payload() updateRateProjectIdDto: UpdateRateProjectIdDto) {
    return this.rviacalService.addAppRateProject(updateRateProjectIdDto.idu_proyecto, updateRateProjectIdDto);
  }
}
