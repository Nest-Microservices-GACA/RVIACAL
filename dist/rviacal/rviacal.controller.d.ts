import { RviacalService } from './rviacal.service';
import { CreateRateProject } from './dto/create-rateproject.dto';
import { CreateRateProjectIdDto } from './dto/dto-response';
export declare class RviacalController {
    private readonly rviacalService;
    private readonly logger;
    constructor(rviacalService: RviacalService);
    addAppRateProject(id: number, createRateProject: CreateRateProject): Promise<CreateRateProjectIdDto>;
}
