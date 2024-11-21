import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { Application } from './entities/application.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  imports:[
    TypeOrmModule.forFeature([ Application ]),
    HttpModule,
    CommonModule,
  ],
  exports:[ ApplicationsService,TypeOrmModule ]
})
export class ApplicationsModule {}
