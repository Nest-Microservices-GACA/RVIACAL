import { Module } from '@nestjs/common';
import { RviacalService } from './rviacal.service';
import { RviacalController } from './rviacal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';
import { Checkmarx } from './dto/checkmarx.entity';
import { Application } from './dto/application.entity';

@Module({
  controllers: [RviacalController],
  providers: [RviacalService],
  imports:[
    TypeOrmModule.forFeature([ Checkmarx, Application ]),
    CommonModule,
    ClientsModule.register([
      { 
        name: NATS_SERVICE, 
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers
        }
      },
    ]),
  ],
  exports:[
    TypeOrmModule
  ]
})
export class RviacalModule {}
