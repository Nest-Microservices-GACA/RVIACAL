import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';
import { RviacalModule } from './rviacal/rviacal.module';
import { Applicationstatus } from './rviacal/dto/applicationstatus.entity';
import { Application, CreateRviadocDto } from './rviacal/dto';
import { Checkmarx } from './rviacal/dto/checkmarx.entity';
import { Cost } from './rviacal/dto/cost.entity';
import { Position } from './rviacal/dto/position.entity';
import { Scan } from './rviacal/dto/scan.entity';
import { Sourcecode } from './rviacal/dto/sourcecode.entity';
import { User } from './rviacal/dto/user.entity';
import { UsersApplication } from './rviacal/dto/users-application.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: envs.dbHost,
      port: envs.dbPort,
      database: envs.dbName,
      username: envs.dbUsername,
      password: envs.dbPassword,
      autoLoadEntities: true,
      synchronize:false,
      entities: 
      [
        Application, 
        Applicationstatus,
        Checkmarx,
        Cost,
        CreateRviadocDto,
        Position,
        Scan,
        Sourcecode,
        User,
        UsersApplication,
      ]
    }),
    RviacalModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
