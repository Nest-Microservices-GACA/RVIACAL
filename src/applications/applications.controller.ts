import { Controller, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApplicationsService } from './applications.service';

import { CreateRateProject } from './dto/create-rateproject.dto';
import { BadRequestResponse, UnauthorizedResponse, ForbiddenResponse, InternalServerErrorResponse, CreateRateProjectIdDto } from './dto/dto-response'
@ApiTags('Aplicaciones')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) { }

  @Patch('rate-project/:id')
  @ApiParam({ name: 'id', description: 'ID de la aplicación para calificar el proyecto', type: Number })
  @ApiResponse({ status:201, description:'Se muestra correctamente', type: CreateRateProjectIdDto})
  @ApiResponse({ status:400, description:'Bad Request', type: BadRequestResponse })
  @ApiResponse({ status:401, description:'Unauthorized', type: UnauthorizedResponse })
  @ApiResponse({ status:403, description:'Forbidden', type: ForbiddenResponse })
  @ApiResponse({ status:500, description:'Internal server error', type: InternalServerErrorResponse })
  addAppRateProject(@Param('id', ParseIntPipe) id: number, @Body() createRateProject: CreateRateProject) {
    return this.applicationsService.addAppRateProject(id, createRateProject);
  }
}
