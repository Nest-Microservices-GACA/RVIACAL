import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { CommonService } from 'src/common/common.service';
import { CreateRateProject } from './dto/create-rateproject.dto';
export declare class RviacalService {
    private readonly applicationRepository;
    private readonly encryptionService;
    private readonly logger;
    constructor(applicationRepository: Repository<Application>, encryptionService: CommonService);
    addAppRateProject(id: number, createRateProject: CreateRateProject): Promise<Application>;
    private handleDBExceptions;
}
