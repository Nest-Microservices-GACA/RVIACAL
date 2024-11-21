import { ApplicationsService } from './applications.service';
import { CreateRateProject } from './dto/create-rateproject.dto';
export declare class ApplicationsController {
    private readonly applicationsService;
    constructor(applicationsService: ApplicationsService);
    addAppRateProject(id: number, createRateProject: CreateRateProject): Promise<import("./entities/application.entity").Application>;
}
