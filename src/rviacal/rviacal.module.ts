import { Module } from '@nestjs/common';
import { RviacalService } from './rviacal.service';

@Module({
  providers: [RviacalService],
})
export class RviacalModule {}
