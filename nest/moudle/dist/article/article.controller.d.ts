import { ConfigService } from 'src/config/config.service';
export declare class ArticleController {
    private readonly config;
    constructor(config: ConfigService);
    index(): string;
}
