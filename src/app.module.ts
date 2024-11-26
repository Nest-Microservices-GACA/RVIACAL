import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';
import { ConfigService } from '@nestjs/config';

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
      synchronize:false
    }),
    //RviacalModule,    
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
