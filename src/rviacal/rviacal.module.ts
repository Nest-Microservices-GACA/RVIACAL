import { Module } from '@nestjs/common';
import { RviacalService } from './rviacal.service';
import { RviacalController } from './rviacal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';

@Module({
  controllers: [RviacalController],
  providers: [RviacalService],
  imports:[
    TypeOrmModule.forFeature([ Application ])
  ]
})
export class RviacalModule {}
