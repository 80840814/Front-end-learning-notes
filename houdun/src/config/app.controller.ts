import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import config from '../config'

@Controller('config')
export class AppController {
  constructor(@Inject(config.KEY) private conf: ConfigType<typeof config>) {}

  @Get()
  getHello(): any {
    return this.conf.city
  }
}
