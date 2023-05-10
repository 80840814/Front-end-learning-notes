import { Inject, Injectable } from '@nestjs/common'


@Injectable()
export class AppService {
  // constructor(private readonly hd: HdService) {}
  constructor(@Inject('config') private config: any) {}
  findOne() {
    return 'app.findOne method ' + this.config.name
  }
}
