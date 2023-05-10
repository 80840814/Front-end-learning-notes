import { ConfigService } from './config/config.service';
export declare class AppController {
    private readonly config;
    constructor(config: ConfigService);
    getHello(): any;
}
