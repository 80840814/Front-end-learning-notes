import { Controller, Get } from '@nestjs/common'

@Controller('test')
export class TestController {
  @Get()
  Show() {
    return 'test Method'
  }
}
