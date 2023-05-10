import { Controller, Get } from '@nestjs/common'
import { TestService } from 'src/test/test.service'

@Controller('hd')
export class HdController {
  constructor(private readonly test: TestService) {}
  @Get()
  Show() {
    return this.test.Show()
  }
}
